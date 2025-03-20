import React from 'react'
import { Hero, Cards, Features } from '@/componets'

const page = () => {
  return (
  //  <div
  //   style={{
  //     backgroundImage: "url('https://source.unsplash.com/random/1920x1080')",
  //     backgroundSize: "cover",
  //     backgroundPosition: "center",
  //     height: "100vh",
  //     width: "100%",
  //   }}
  // >
  // </div>
    <div>
      <Hero />
      <Cards />
      <Features />
    </div>
  )
}

export default page
