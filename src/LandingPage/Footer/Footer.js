import './Footer.css'

import { AiOutlineLinkedin } from 'react-icons/ai'
import { FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = ({ forwardRef }) => {
  return (
    <>
      <footer className='ftcnt' ref={forwardRef}>
        <div className='ft'>
          <div className='ftval'>
            <div className='ftbld'>Washington</div>
            <div className='ftlgt'>
              {'4517 Washington Ave, Manchester, Kentucky 39495 (239) 555-0108'}
            </div>
          </div>
          <div className='ftval'>
            <div className='ftbld'>Paris</div>
            <div className='ftlgt'>
              {'4517 Washington Ave, Manchester, Kentucky 39495 (239) 555-0108'}
            </div>
          </div>
          <div className='ftval'>
            <div className='ftbld'>Hong Kong</div>
            <div className='ftlgt'>
              {'4517 Washington Ave, Manchester, Kentucky 39495 (239) 555-0108'}
            </div>
          </div>
          <div className='ftval'>
            <div className='ftbld'>London</div>
            <div className='ftlgt'>
              {'4517 Washington Ave, Manchester, Kentucky 39495 (239) 555-0108'}
            </div>
          </div>
        </div>
        <div className='ftbtm'>
          <div className='ftscm'>
            <AiOutlineLinkedin className='ftgap' />
            <FaInstagram className='ftgap' />
            <FaTwitter className='ftgap' />
          </div>
          <div className='ftcpr'>Copyright Figmaland 2020</div>
        </div>
      </footer>
    </>
  )
}

export default Footer
