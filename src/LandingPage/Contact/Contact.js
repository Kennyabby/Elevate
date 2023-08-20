import './Contact.css'

import map from './assets/map.png'
import cntimg from './assets/cntimg.jpg'

import { BiSolidChevronRight } from 'react-icons/bi'

const Contact = () => {
  return (
    <>
      <div className='cnt-tp'>
        <img className='map' src={map} alt='map' />
        <div className='cnt-frm'>
          <div className='lfrm'>
            <img className='cntimg' src={cntimg} alt='cntimg' />
            <div className='cntdtl-cont'>
              <div className='ctrl-ctc'>
                <div className='cntdtl'>
                  <BiSolidChevronRight className='ctcarr bl' />
                  <div>
                    <label className='bl'>Address</label>
                    <div>2972 Westheimer Rd. Santa Ana, Illinois 85486</div>
                  </div>
                </div>
                <div className='cntdtl'>
                  <BiSolidChevronRight className='ctcarr bl' />
                  <div>
                    <label className='bl'>Phone</label>
                    <div>{'(205) 555-0100'}</div>
                  </div>
                </div>
                <div className='cntdtl'>
                  <BiSolidChevronRight className='ctcarr bl' />
                  <div>
                    <label className='bl'>Email</label>
                    <div>alma.lawson@example.com</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='rfrm'>
            <h1>Book an appointment</h1>
            <div style={{ padding: '15px' }}>At your service 24/7</div>
            <input className='input' placeholder='Name*' />
            <input className='input' placeholder='Email*' />
            <textarea className='area' placeholder='Message' />
            <div className='frmbtn'>Order Now</div>
          </div>
        </div>
      </div>
      <div></div>
    </>
  )
}

export default Contact
