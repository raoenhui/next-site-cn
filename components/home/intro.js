import {Component} from 'react'
import Video from './intro/video'
import NotificationBanner from './intro/notification-banner'
import Title from './intro/title'

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
