import {Component} from 'react'
import Video from './video'
import NotificationBanner from './notification-banner'
import Title from './title'

function Intro() {
  return (
  <>  
    <NotificationBanner />
    <Title />
    <Video />
  </>
  )
}

export default Intro
