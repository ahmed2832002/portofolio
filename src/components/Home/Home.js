import React from 'react'
import Typewriter from 'typewriter-effect';
import './home.css'
function Home() {
  return (
    <>
      <section className='container-fluid home'>
        <div className="container homecnt">
          <h1>Hi, I am </h1>
          <h3>
            <Typewriter
              options={{
                strings: [
                  'UI/UX Designer',
                   'Front-End Developer',
                   'Civil Engineering Student'
                  ],
                autoStart: true,
                loop: true,
                delay:5,
              }}
            />
          </h3>

        </div>

        <div className='d-flex'>
          <a href="#!" >Hire me</a>
          <a href="#!" className='ahmed'>Get Resume</a>
        </div>

      </section>{/*home*/}

      <section className="container sec   text-center">
      <h4>About</h4>
      <span className='line'></span>
        <div className="row">

        <div className=' col-md-6 pec text-center col-sm-12'>
              <img src={require('../../image/WhatsApp Image 2022-12-20 at 10.19.47 PM.jpeg')} alt="" />
        </div>{/*photo*/}

        <div className=' col-md-6 col-sm-12 text-center text-dark aa'>
              <h1 className="text-capitalize">front-end and UI/UX developer</h1>
            <p>

    A front-end developer is one who designs and codes the visual aspects of a website or mobile application. A UI/UX developer is a digital designer responsible for creating a product's user interface. In addition, a UX designer is the person who creates both the look and functionality of a product's user experience. Basically, a front-end developer and a user experience designer work together to create a visually appealing and functional product.</p>
        </div>{/*text*/}
       
        </div>
      </section>{/*about*/}
      
      
      <footer className="">

      </footer>

    </>

  )
}

export default Home