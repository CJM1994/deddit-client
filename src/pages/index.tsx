import type { NextPage } from 'next'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <div>
        Hello World!
      </div>
    </>
  )
}

export default Home
