import React, { useEffect, useRef } from 'react'

const Hero = () => {

    const videoReef =useRef(null)

    useEffect(()=>{
       if(videoReef.current) videoReef.current.playbackRate = 2
    },[])
  return (
    <section id='hero'>
      <div>
        <h1>MacBook Pro</h1>
        <img src='/title.png' alt='Macbook Title' />
      </div>

      <video ref={videoReef} src='/videos/hero.mp4' autoPlay muted playsInline />

      <button>Buy</button>
      <p>From $1599  or $133/month for 12 months</p>
    </section>
  )
}

export default Hero
