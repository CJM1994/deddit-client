import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { createClient, dedupExchange, fetchExchange, Provider } from 'urql'
import { cacheExchange, QueryInput, Cache } from '@urql/exchange-graphcache'
import { devtoolsExchange } from '@urql/devtools'
import { LoginMutation, MeDocument, MeQuery } from '../generated/graphql'

function cacheUpdateQuery<Result, Query>(
  cache: Cache,
  qi: QueryInput,
  result: any,
  fn: (r: Result, q: Query) => Query
) {
  return cache.updateQuery(qi, (data) => fn(result, data as any) as any);
}

// urql client for connecting to graphql
const client = createClient({
  url: 'http://localhost:4000/graphql',
  // fetchOptions required to return cookies to user
  fetchOptions: {
    credentials: 'include'
  },
  // using graphCache to normalize caching, needed for login to present properly
  exchanges: [
    dedupExchange, // dedup exchange first avoids unecessary work / requests
    cacheExchange({ // looks at cache to rewrite the result of queries when something changes
      updates: {
        Mutation: {
          login(result, args, cache, info) {
            cacheUpdateQuery<LoginMutation, MeQuery>(
              cache,
              { query: MeDocument },
              result,
              (result, query) => {
                if (result.login.errors) {
                  return query;
                } else {
                  return {
                    me: result.login.user,
                  };
                }
              }
            );
          }
        }
      }
    }),
    fetchExchange, // looks at fetch data, async so needs to go last
    devtoolsExchange
  ]
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider value={client}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  )
}

export default MyApp
