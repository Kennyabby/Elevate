import { useContext, useRef, useEffect } from 'react'

import Header from './Header/Header'
import Services from './Services/Services'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'
import ContextProvider from '../ContextProvider'

import { IoIosArrowUp } from 'react-icons/io'

const LandingPage = ({ setViewRefs }) => {
  const { scrollY } = useContext(ContextProvider)

  const headerRef = useRef(null)
  const servicesRef = useRef(null)
  const contactRef = useRef(null)
  const footerRef = useRef(null)

  const viewRefs = [headerRef, servicesRef, contactRef, footerRef]
  setViewRefs(viewRefs)

  return (
    <>
      {scrollY > window.innerHeight + 200 && (
        <div
          className='scroll-up'
          onClick={() => {
            headerRef.current.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
              inline: 'nearest',
            })
          }}
        >
          <IoIosArrowUp className='top' />
        </div>
      )}
      <Header forwardRef={headerRef} />
      <Services forwardRef={servicesRef} />
      <Contact forwardRef={contactRef} />
      <Footer forwardRef={footerRef} />
    </>
  )
}

export default LandingPage
