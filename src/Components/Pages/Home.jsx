/* eslint-disable react/no-unescaped-entities */
import { NavLink } from 'react-router-dom'
import LowerNavbar from '../Navbar/LowerNavbar'
import Navbar from '../Navbar/Navbar'


export default function Home() {
  const displayWidth = window.innerWidth;
  displayWidth < 900 ? document.body.style.overflow = 'hidden' : ''

  return (
    <>
      <div>
        <Navbar />
        <LowerNavbar />
        {/* <div className="next_search_bar">
        <input className="search_bar" placeholder="Search" />
      </div> */}
        <div className="middile-container-home">
          <div className="our_tegline">
            <h1>Welcome to</h1>
            <h1>ContributeUI,</h1>
            <h1>Come Contribute with us!</h1>
            <h3>Hello, you can use ContributieUI for free right now, you can use the creativity feature, its update will come soon.</h3>
            <p>"Welcome to ContributeUI, your one-stop destination for collaborative UI and component creation! Our platform empowers users like you to actively participate in shaping the digital landscape by contributing to website and mobile application designs. Whether you're a seasoned developer, a budding designer, or simply passionate about user interfaces, ContributeUI offers an inclusive space for you to unleash your creativity.

              With ContributeUI, you can seamlessly create, share, and utilize UI components, fostering a vibrant community-driven ecosystem. Our intuitive interface and powerful features enable you to design and prototype with ease, while also providing the flexibility to customize and refine your creations. Join hands with fellow contributors, exchange ideas, and collectively elevate the standard of UI design.

              Stay tuned as we roll out exciting features and updates to enhance your ContributeUI experience. From collaborative projects to curated resources, we're committed to nurturing a dynamic environment that inspires innovation and collaboration. Whether you're looking to showcase your skills, learn from others, or simply explore new horizons in UI design, ContributeUI is your go-to destination. Let's build together and shape the future of digital experiences!"</p>
            <NavLink to="/creativdiv"><button className="tryIt_button" > Try ContributeUI</button></NavLink>
          </div>
        </div>
        <div className='containt_container'>
          {/* <h1 style={{ color: 'white', margin:'0px'}}>{displayWidth}</h1> */}
        </div>
        <footer>
        </footer>
      </div>
      <div style={{display: displayWidth<900 ? 'flex' : 'none'}} className='cover'>
        <h1> You need to use big screen !</h1>
      </div>
    </>
  )
}
