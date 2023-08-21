import './Contact.css'

import map from './assets/map.png'
import cntimg from './assets/cntimg.jpg'
import lstimg from './assets/lstimg.jpg'

import { BiSolidChevronRight } from 'react-icons/bi'
import { LuContact } from 'react-icons/lu'
import { LiaHomeSolid } from 'react-icons/lia'
import { HiChevronRight } from 'react-icons/hi'

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
                  <div className='ctcarr bl'>
                    <BiSolidChevronRight id='3' />
                  </div>
                  <div>
                    <label className='bl'>Address</label>
                    <div>2972 Westheimer Rd. Santa Ana, Illinois 85486</div>
                  </div>
                </div>
                <div className='cntdtl'>
                  <div className='ctcarr bl'>
                    <BiSolidChevronRight id='2' />
                  </div>
                  <div>
                    <label className='bl'>Phone</label>
                    <div>{'(205) 555-0100'}</div>
                  </div>
                </div>
                <div className='cntdtl'>
                  <div className='ctcarr bl'>
                    <BiSolidChevronRight id='1' />
                  </div>
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
            <div className='frmbtn'>Book Now</div>
          </div>
        </div>
      </div>
      <div className='ctcbtm'>
        <div className='ctcbtm-lbl'>
          <div className='midfnt bld' style={{ width: '95%' }}>
            We Love To Work Together
          </div>
          <div style={{ display: 'block', marginTop: '50px' }}>
            <div className='fl ctcwrp'>
              <div>
                <LiaHomeSolid
                  style={{
                    color: 'white',
                    fontSize: '1.6rem',
                    marginRight: '15px',
                    fontWeight: 'bold',
                  }}
                />
              </div>
              <div>
                <div className='bld'>Address</div>
                <div className='ctcadr'>
                  4517 Washington Ave, Manchester, Kentucky 39495
                </div>
              </div>
            </div>
            <div className='fl ctcwrp'>
              <div>
                <LuContact
                  style={{
                    color: 'white',
                    fontSize: '1.6rem',
                    marginRight: '15px',
                    fontWeight: 'bold',
                  }}
                />
              </div>
              <div>
                <div className='bld'>Contact</div>
                <div className='ctcadr'>
                  <p>+44 7393 830395</p>
                  <p>bill.sanders@example.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='ctcbtm-rt'>
          <div className='bccircle'>
            <div className='bgcircle'></div>
          </div>
          <img src={lstimg} alt='lstimg' className='lstimg' />
          <img src={map} alt='map' className='lstmap' />
        </div>
      </div>
    </>
  )
}

export default Contact
