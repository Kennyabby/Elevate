import { useContext, useState, useRef, useEffect } from 'react'
import './Navbar.css'
import ContextProvider from '../ContextProvider'

import { BsArrowRight } from 'react-icons/bs'
import { BiMenuAltRight } from 'react-icons/bi'

const Navbar = ({ viewRefs }) => {
  const [menuClicked, setMenuClicked] = useState(false)
  const [makeNavStatic, setMakeNavStatic] = useState(false)
  const { winSize, scrollY } = useContext(ContextProvider)

  const homeRef = useRef(null)
  const servicesRef = useRef(null)
  const aboutRef = useRef(null)
  const contactRef = useRef(null)
  const navRef = useRef(null)

  const [currentMenu, setCurrentMenu] = useState(homeRef)
  const menuRefs = [homeRef, servicesRef, contactRef, aboutRef]

  const handleMenu = () => {
    setMenuClicked(!menuClicked)
  }
  useEffect(() => {
    if (menuClicked) {
      const navHeight = navRef.current.getBoundingClientRect().height
      if (scrollY >= navHeight) {
        setMakeNavStatic(true)
      } else {
        setMakeNavStatic(false)
      }
      if (currentMenu.current !== null) {
        currentMenu.current.style.color = 'white'
        currentMenu.current.style.fontWeight = 'bold'
      }
    }
  }, [scrollY, menuClicked, currentMenu])

  const handleMenuClick = (e) => {
    const index = e.target.getAttribute('index')
    viewRefs.forEach((viewRef, i) => {
      if (String(i) === index) {
        menuRefs.forEach((menuRef, id) => {
          if (id === i) {
            setCurrentMenu(menuRef)
          } else {
            menuRef.current.style.color = 'rgba(220,220,220)'
            menuRef.current.style.fontWeight = 'lighter'
          }
        })
        viewRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        })
      }
    })
    setMenuClicked(false)
  }
  return (
    <>
      <div
        className={
          menuClicked && winSize <= 700
            ? makeNavStatic
              ? 'navst'
              : 'navbl'
            : 'nav'
        }
        ref={navRef}
      >
        {winSize <= 700 && (
          <div
            className='navtp'
            style={{
              background: menuClicked
                ? 'rgb(34, 113, 180)'
                : 'rgba(57, 166, 255, 1)',
            }}
          >
            <BiMenuAltRight className='menu' onClick={handleMenu} />
            <div className='logo bld'>
              <label>Connectin</label>
              <label
                style={{
                  color: 'rgb(34, 113, 180)',
                }}
              >
                skillz
              </label>
            </div>
          </div>
        )}
        {(winSize > 700 || menuClicked) && (
          <div className='bar'>
            <div className='lbar'>
              <div className='logo bld'>
                <label>Connectin</label>
                <label
                  style={{ color: menuClicked ? 'black' : 'rgb(34, 113, 180)' }}
                >
                  skillz
                </label>
              </div>
              <ul className='ul' onClick={handleMenuClick}>
                <li className='li' index={0} ref={homeRef}>
                  Home
                </li>
                <li className='li' index={1} ref={servicesRef}>
                  Services
                </li>
                <li className='li' index={3} ref={aboutRef}>
                  About
                </li>
                <li className='li' index={2} ref={contactRef}>
                  Contact
                </li>
              </ul>
            </div>
            <div className='rbar'>
              <div className='brd'>
                <label>Consultancy</label>
                <BsArrowRight />
              </div>

              <div className='marg-ud'>
                <div>We are available</div>
                <div className='bld'>+44 7393 830395</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Navbar
