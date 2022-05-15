import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { createClient, Provider } from 'urql'

// urql client for connecting to graphql
const client = createClient({
  url: 'http://localhost:4000/graphql',
  // fetchOptions required to return cookies to user
  fetchOptions: {
    credentials: 'include'
  }
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
