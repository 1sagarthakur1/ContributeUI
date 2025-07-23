/* eslint-disable react/no-unescaped-entities */
import { NavLink } from 'react-router-dom'
import LowerNavbar from '../Components/Navbar/LowerNavbar'
import Navbar from '../Components/Navbar/Navbar'


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
            <h1>Create Components with ContributeUI</h1>
            <h3>Hello, you can use ContributieUI for free right now, you can use the creativity feature, its update will come soon.</h3>
            <p>Our application is designed to make web UI creation simple, intuitive, and efficient. Whether you're a beginner or an experienced developer, our tool allows you to visually build, customize, and manage your HTML structures with ease. From adding and styling text elements to creating interactive forms with various input types, every action is seamlessly integrated into a user-friendly interface. With real-time editing, responsive control panels, and advanced design features like margin, padding, and border-radius adjustments, our application empowers users to design stunning, responsive layouts without writing a single line of code.</p>
            <NavLink to="/creativdiv"><button className="tryIt_button" > Try ContributeUI</button></NavLink>
          </div>
          <div className='containt_container'>
            {/* <h1 style={{ color: 'white', margin:'0px'}}>{displayWidth}</h1> */}
          </div>
          <footer>
            
          </footer>
        </div>
      </div>
      <div style={{ display: displayWidth < 900 ? 'flex' : 'none' }} className='cover'>
        <h1> You need to use big screen !</h1>
      </div>
    </>
  )
}
