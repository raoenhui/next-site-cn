import Markdown, { meta } from './index.mdx'
import Documentation, { components } from '../../components/docs/documentation'

export default () => (
  <Documentation meta={meta}>
    <Markdown components={components} />
  </Documentation>
)
