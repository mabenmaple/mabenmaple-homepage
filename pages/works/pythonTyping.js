import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Python Typing Game">
    <Container>
      <Title>
        python-typing <Badge>2019</Badge>
      </Title>
      <P>
        Scuffed typing game in python trying to emulate the scrolling typing games on old computer systems of the mid 80s, included only because this is the only python project I can make public LOL
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://github.com/mabenmaple/typing">
            https://github.com/mabenmaple/typing <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
            <span>Python</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/typing.png" alt="python typing game" />
    </Container>
  </Layout>
)

export default Work 
