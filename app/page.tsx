'use client'
import Features from './Components/Features'
import Header from './Components/Header'
import Pricing from './Components/Pricing'
// import Practice from './Components/practice'


export default function Home() {
  return (
    <>
      <main>
        <Header />
        <Pricing />
        <Features />
      </main>
    </>
  )
}
