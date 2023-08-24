import { useContext, useState, useRef, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

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
  const menuRefs = useMemo(() => {
    return [homeRef, servicesRef, contactRef, aboutRef]
  }, [])

  const handleMenu = () => {
    setMenuClicked(!menuClicked)
  }

  useEffect(() => {
    if (viewRefs !== undefined) {
      viewRefs.forEach((viewRef, i) => {
        if (viewRef.current !== null) {
          const viewTop = viewRef.current.getBoundingClientRect().top
          const viewHeight = viewRef.current.getBoundingClientRect().height
          const currentgap = viewTop + viewHeight

          if (currentgap > 0 && currentgap - 200 < viewHeight) {
            if (menuRefs[i].current !== null) {
              setCurrentMenu(menuRefs[i])
            }
          } else {
            if (menuRefs[i].current !== null) {
              menuRefs[i].current.style.color = 'rgba(220,220,220)'
              menuRefs[i].current.style.fontWeight = 'lighter'
            }
          }
        }
      })
    }
  }, [scrollY, menuRefs])

  useEffect(() => {
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
  }, [scrollY, currentMenu])

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
        <AnimatePresence mode='wait'>
          {(winSize > 700 || menuClicked) && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: 'easeIn' }}
              exit={{
                opacity: 0,
                transition: { duration: 1, ease: 'easeOut' },
              }}
              className='bar'
            >
              <div className='lbar'>
                <div className='logo bld'>
                  <label>Connectin</label>
                  <label
                    style={{
                      color: menuClicked ? 'black' : 'rgb(34, 113, 180)',
                    }}
                  >
                    skillz
                  </label>
                </div>
                <motion.ul
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, ease: 'easeIn' }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 1, ease: 'easeOut' },
                  }}
                  className='ul'
                  onClick={handleMenuClick}
                >
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
                </motion.ul>
              </div>
              <motion.div
                className='rbar'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: 'easeIn' }}
                exit={{
                  opacity: 0,
                  transition: { duration: 1, ease: 'easeOut' },
                }}
              >
                <div className='brd'>
                  <label>Consultancy</label>
                  <BsArrowRight />
                </div>

                <div className='marg-ud'>
                  <div>We are available</div>
                  <div className='bld'>+44 7393 830395</div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}

export default Navbar
