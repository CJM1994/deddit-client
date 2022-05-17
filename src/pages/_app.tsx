import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { createClient, dedupExchange, fetchExchange, Provider } from 'urql'
import { cacheExchange } from '@urql/exchange-graphcache'
import { MeDocument } from '../generated/graphql'

// urql client for connecting to graphql
const client = createClient({
  url: 'http://localhost:4000/graphql',
  // fetchOptions required to return cookies to user
  fetchOptions: {
    credentials: 'include'
  },
  // using graphCache to normalize caching, needed for login to present properly
  exchanges: [dedupExchange, fetchExchange, cacheExchange({
    updates: {
      Mutation: {
        login: (result, args, cache, info) => {
          cache.writeFragment(MeDocument, {
            id: args.id,
            username: args.username,
            createdAt: args.createdAt,
            updatedAt: args.updatedAt
          })
        }
      }
    }
  })]
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
