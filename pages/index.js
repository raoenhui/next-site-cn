import Page from '../components/page'
import Intro from '../components/home/intro'
import Showcase from '../components/home/showcase'
import Features from '../components/home/features'
import Screen from '../components/screen'

function Index() {
  return <Page>
    <Screen offset={144}>
      <Intro/>
    </Screen>
    <Showcase />
    <Features />
  </Page>
}

export default Index
