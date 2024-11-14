import React, { useState } from 'react'
import "./Navbar.css"
import {images} from "../../constants/"
import {HiMenuAlt4,HiX} from "react-icons/hi"
import {motion} from "framer-motion"



const Navbar = () => {
    const [Toggle,setToggle] = useState(false)
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.logo} alt="" />
      </div>
      <ul className='app__navbar-links'>
        {['Home', "About" , "Contact" , 'Works', "Skills" ,'Testimonials'].map((item)=>(
            <li key={`link-${item}`} className="app__flex p-text">
                <div/>
                <a href={`#${item}`}>{item}</a>
            </li>
        ))}
      </ul>
      <div className="app__navbar-menu">
                <HiMenuAlt4  onClick={()=> setToggle(true)} className="lines" />
                {Toggle &&(
                    <motion.div className='side__bar'
                    whileInView={{x:[300 ,0]}}
                    transition={{duration:0.85}}
                    >
                        <HiX onClick={()=> setToggle(false)} className="cross"/>
                       <ul>
                       {['Home', "About" , "Contact" , 'Works', "Skills"].map((item)=>(
                            <li key={item} >
                                <div/>
                                <a href={`#${item}`} onClick={()=> setToggle(false)}>{item}</a>
                            </li>
                        ))}
                        </ul> 
                    </motion.div>
                )}
      </div>
    </nav>
  )
}

export default Navbar
