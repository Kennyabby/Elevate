import { useContext } from 'react'
import './Services.css'

import cskillzimg from './assets/cskillzimg.png'
import avatar from './assets/avatar.png'

import ContextProvider from '../../ContextProvider'
import { HiOutlineGlobe, HiUserGroup } from 'react-icons/hi'
import { ImStatsBars } from 'react-icons/im'
import { SiSecurityscorecard, SiFastlane } from 'react-icons/si'
import { RiTimerFlashLine } from 'react-icons/ri'
import { BsFillPatchCheckFill } from 'react-icons/bs'

import RatingStar from '../RatingStar/RatingStar'

const sptsContent = [
  {
    icon: <HiOutlineGlobe className='bl-icon' />,
    title: 'Operated Worldwide',
    content: 'We focus on orgonomics and meeting you where you work',
  },
  {
    icon: <ImStatsBars className='bl-icon' />,
    title: 'A single source of truth',
    content: 'We focus on orgonomics and meeting you where you work',
  },
  {
    icon: <SiSecurityscorecard className='bl-icon' />,
    title: '99% Clients satisfaction',
    content: 'We focus on orgonomics and meeting you where you work',
  },
  {
    icon: <SiFastlane className='bl-icon' />,
    title: 'Work at the speed of thought..',
    content: 'We focus on orgonomics and meeting you where you work',
  },
]

const plan = [
  {
    type: 'Free Plan',
    title: 'Organize across all the apps by hand',
    price: '0',
    services: [
      {
        type: 'Unlimited product updates',
        available: true,
      },
      {
        type: 'Unlimited Shares',
        available: true,
      },
      {
        type: 'Every feature in Figmaland',
        available: false,
      },
      {
        type: '1GB Cloud storage',
        available: false,
      },
      {
        type: 'Email and community support',
        available: false,
      },
    ],
  },
  {
    type: 'Basic Plan',
    title: 'Organize across all the apps by hand',
    price: '19',
    services: [
      {
        type: 'Unlimited product updates',
        available: true,
      },
      {
        type: 'Unlimited Shares',
        available: true,
      },
      {
        type: 'Every feature in Figmaland',
        available: true,
      },
      {
        type: '1GB Cloud storage',
        available: false,
      },
      {
        type: 'Email and community support',
        available: false,
      },
    ],
  },
  {
    type: 'Premium Plan',
    title: 'Organize across all the apps by hand',
    price: '49',
    services: [
      {
        type: 'Unlimited product updates',
        available: true,
      },
      {
        type: 'Unlimited Shares',
        available: true,
      },
      {
        type: 'Every feature in Figmaland',
        available: true,
      },
      {
        type: '1GB Cloud storage',
        available: true,
      },
      {
        type: 'Email and community support',
        available: true,
      },
    ],
  },
]

const reviews = [
  {
    rating: 4,
    comment:
      'Connectinskillz helps you track how many more days you need to study to reach your goal for the month and the year',
    name: 'Kunle',
    role: 'Computer Hardware Engineer',
  },
  {
    rating: 4.5,
    comment:
      'Connectinskillz helps you track how many more days you need to study to reach your goal for the month and the year',
    name: 'Isaac',
    role: 'Site Reliability Engineer',
  },
  {
    rating: 4,
    comment:
      'Connectinskillz helps you track how many more days you need to study to reach your goal for the month and the year',
    name: 'Greg',
    role: 'Computer System Analyst',
  },
  {
    rating: 4.5,
    comment:
      'Connectinskillz helps you track how many more days you need to study to reach your goal for the month and the year',
    name: 'Mitchell',
    role: 'Computer Software Engineer',
  },
  {
    rating: 3.5,
    comment:
      'Connectinskillz helps you track how many more days you need to study to reach your goal for the month and the year',
    name: 'Mitchell',
    role: 'Computer Software Engineer',
  },
]

const Services = ({ forwardRef }) => {
  const { winSize } = useContext(ContextProvider)
  return (
    <>
      <div className='services' ref={forwardRef}>
        <div className='spts smfnt'>
          <div className='spts-lbl'>
            <div className='midfnt bld'>Our Specialties</div>
            <div>
              Most calenders are designed for teams. Slate is designed for
              freelances who want a simple way to plan their schedule.
            </div>
          </div>
          <div className='spts-cont'>
            {sptsContent.map((bann) => {
              const { icon, title, content } = bann
              return (
                <div className='minbann'>
                  <div>{icon}</div>
                  <div className='bld marg-udl'>{title}</div>
                  <div className='smfnt'>{content}</div>
                </div>
              )
            })}
          </div>
        </div>
        <div className='mtf'>
          <div className='lmtf'>
            <div className='gcircle'></div>
            <img className='mtfimg' src={cskillzimg} alt='cskillzimg' />
            <iframe
              src='https://www.youtube.com/embed/m-o4BE6Gkhw'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowfullscreen
              width='560px'
              height='315px'
              className='vid'
            ></iframe>
          </div>
          <div className='rmtf'>
            <div className='midfnt bld rds'>Most trusted in our field</div>
            <div className={'smfnt' + (winSize > 700 ? 'rds' : '')}>
              Most calenders are designed for teams. Slate is designed for
              freelances who want a simple way to plan their schedule.
            </div>
            <div className={'smfnt' + (winSize > 700 ? 'rds' : '')}>
              <div style={{ margin: '25px auto' }}>
                <div className='bld smfnt fl'>
                  <HiUserGroup className='bl smicon' />
                  <label>Organize across all apps by hand</label>
                </div>
                <div className='smfnt'>
                  Most calenders are designed for teams. Slate is designed for
                  freelances
                </div>
              </div>
              <div style={{ margin: '25px auto' }}>
                <div className='bld smfnt fl'>
                  <RiTimerFlashLine className='bl smicon' />
                  <label>Organize across all apps by hand</label>
                </div>
                <div className='smfnt'>
                  Most calenders are designed for teams. Slate is designed for
                  freelances
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='off'>
          <div className='bld midfnt emerg'>We Offer Greate Prices</div>
          <label className='smfnt'>
            Most calenders are designed for teams. Slate is designed for
            freelances
          </label>

          <div className='pln'>
            {plan.map((pln, i) => {
              return (
                <div className={'pln-cnt' + (i === 1 ? ' boxsh' : '')}>
                  <div className='pln-tp bld'>{pln.type}</div>
                  <div className='pln-ttl smfnt'>{pln.title}</div>
                  <div className='bl smfnt pln-amt'>
                    <div className='pln-prc bld'>{pln.price}</div>
                    <div>
                      <div className='bld'>$</div>
                      <div>Per Month</div>
                    </div>
                  </div>
                  <div className='pln-svc'>
                    {pln.services.map((svc) => {
                      return (
                        <div className='pln-svc-cnt fl'>
                          <BsFillPatchCheckFill
                            className='smicon'
                            style={{
                              marginBottom: '0px',
                              color: svc.available
                                ? 'rgb(29, 211, 16)'
                                : 'rgba(200,200,200)',
                            }}
                          />
                          <label className='smfnt bld'>{svc.type}</label>
                        </div>
                      )
                    })}
                  </div>
                  <div className='pln-btn smfnt'>Order Now</div>
                </div>
              )
            })}
          </div>
        </div>
        <div className='rv'>
          <div className='clst'>
            <div className='bld midfnt emerg'>99% Clients Satisfaction</div>
            <label className='smfnt'>
              If you don't see an answer to your question, you can reach out to
              us via Email from our contact form
            </label>
            <div className='abt fl smfnt'>
              <img src={avatar} className='avatar' alt='avatar' />
              <div>
                <div className='bld'>
                  "Connectinskillz helps you track how many more days you need
                  to study to reach your goal for the month and the year"
                </div>
                <RatingStar rating={4.5} color={'rgba(255,215,0)'} />
                <div className='abtlbl'>
                  <div className='bl'>Ariel</div>
                  <div>Network Administrator</div>
                </div>
              </div>
            </div>
          </div>
          <div className='smfnt rtcont'>
            <div className='wrp-cnt'>
              {reviews.map((review) => {
                return (
                  <div className='rtview'>
                    <RatingStar
                      rating={review.rating}
                      color={'rgba(255,215,0)'}
                      className='rvw-st'
                    />
                    <div>{review.comment}</div>
                    <div className='rtprof fl'>
                      <img
                        src={avatar}
                        logo='avatar'
                        className='avtr'
                        alt='avatar'
                      />
                      <div className='bld'>
                        <div className='bl'>{review.name}</div>
                        <div>{review.role}</div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services
