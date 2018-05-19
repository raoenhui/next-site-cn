import {Component} from 'react'
import Page from '../components/page'
import RoundButton from '../components/round-button'
import Icons from '../components/icons'
import Intro from '../components/home/intro'
import Showcase from '../components/home/showcase'
import Features from '../components/home/features'

export default class Index extends Component {
  render() {
    return (
      <Page>
        <Intro/>
        <Showcase />
        <Features />
      </Page>
    )
  }
}
