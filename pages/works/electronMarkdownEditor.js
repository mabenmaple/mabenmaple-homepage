import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Electron Markdown Editor">
    <Container>
      <Title>
        Electron Markdown Editor <Badge>2022</Badge>
      </Title>
      <P>
        Dynamic real-time rendering markdown editor.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://github.com/mabenmaple/electron-markdown-editor">
            https://github.com/mabenmaple/electron-markdown-editor <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
            <span>Typescript/Vue/HTML</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/markdowneditor.png" alt="markdown editor" />
    </Container>
  </Layout>
)

export default Work 
