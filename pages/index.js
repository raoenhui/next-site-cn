import {Component} from 'react'
import Page from '../components/page'
import Intro from '../components/home/intro'
import Showcase from '../components/home/showcase'
import Features from '../components/home/features'

function Index() {
  return <Page>
    <Intro/>
    <Showcase />
    <Features />
  </Page>
}

export default Index
