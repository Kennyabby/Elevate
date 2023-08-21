import { useContext, useState } from 'react'
import './Navbar.css'
import ContextProvider from '../ContextProvider'

import { BsArrowRight } from 'react-icons/bs'
import { BiMenuAltRight } from 'react-icons/bi'

const Navbar = () => {
  const [menuClicked, setMenuClicked] = useState(false)
  const { winSize } = useContext(ContextProvider)

  const handleMenu = () => {
    setMenuClicked(!menuClicked)
  }

  return (
    <>
      <div className={menuClicked && winSize <= 700 ? 'navbl' : 'nav'}>
        {winSize <= 700 && (
          <div className='navtp'>
            <BiMenuAltRight className='menu' onClick={handleMenu} />
            <div className='logo bld'>
              <label>Connectin</label>
              <label style={{ color: '#282c34' }}>skillz</label>
            </div>
          </div>
        )}
        {(winSize > 700 || menuClicked) && (
          <div className='bar'>
            <div className='lbar'>
              <div className='logo bld'>
                <label>Connectin</label>
                <label style={{ color: '#282c34' }}>skillz</label>
              </div>
              <ul className='ul'>
                <li className='li'>Home</li>
                <li className='li'>Services</li>
                <li className='li'>About</li>
                <li className='li'>Contact</li>
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
