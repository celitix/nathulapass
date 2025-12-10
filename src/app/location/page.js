import React from 'react'
import Hero from '@/app/components/hero'

const locationpage = () => {
  return (
  <>
  <Hero title="Location" image="hero1.jpg" />

{/* Map section */}
 <div className='flex justify-center items-center py-12 lg:px-16 px-6 bg-white'>
      <div className='lg:w-[90%] w-full container mx-auto'>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14170.609745093278!2d88.830873!3d27.386568000000004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e14da401f1fec3%3A0x308bd28ec54349b4!2sNathu%20La!5e0!3m2!1sen!2sus!4v1762856652967!5m2!1sen!2sus" 
            referrerPolicy="no-referrer-when-downgrade"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
            className="rounded-2xl border-0"
          ></iframe>
        </div>

      </div>

  </>
  )
}

export default locationpage