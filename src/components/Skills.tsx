import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
      <div className='grid md:grid-cols-2 gap-20 items-center'>
        <div data-aos="zoom-in-up">
          <h2 className='text-4xl md:text-5xl' >Cars We Have</h2>
          <p className='text-gray-500 pt-2'>I have very vast collection of cars i like cars Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus explicabo quasi quis odio rerum tenetur porro ad nostrum harum excepturi nam deserunt, eligendi quibusdam obca</p>
        </div>
        <div>
          <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'>
          <div className='space-y-2'>
              <h2 data-aos="zoom-in-up">Corolla</h2>
              <h2 data-aos="zoom-in-up">Fortuner</h2>
              <h2 data-aos="zoom-in-up">Mehran</h2>
            </div>
            <div className='space-y-2'>
              <h2 data-aos="zoom-in-up">Civic</h2>
              <h2 data-aos="zoom-in-up">Hilux</h2>
              <h2 data-aos="zoom-in-up">City</h2>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Skills
