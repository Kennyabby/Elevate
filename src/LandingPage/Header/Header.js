import { BsArrowRight } from 'react-icons/bs'
import { motion, AnimatePresence } from 'framer-motion'
import './Header.css'

import bannerimg from './assets/bannerimg.png'
const Header = ({ forwardRef }) => {
  return (
    <>
      <div className='home' ref={forwardRef}>
        <div className='banner'>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: 'easeIn' }}
            exit={{
              opacity: 0,
              transition: { duration: 1, ease: 'easeOut' },
            }}
            className='lbanner'
          >
            <label className='lbl bld'>
              Your Best Shot Lies With ConnectinSkillz
            </label>
            <div className='lm'>
              <div className='wtbl bld'>
                <label style={{ cursor: 'pointer' }}>Learn More</label>
                <BsArrowRight className='marg-ud' />
              </div>
              <label className='b-marg-ud'>How it works</label>
            </div>
          </motion.div>
          <div className='rbanner'>
            <div className='wcircle'>
              <div className='bcircle rt'></div>
              <div className='bcircle lb'></div>
              <img className='bannimg' src={bannerimg} alt='bannerimg' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
