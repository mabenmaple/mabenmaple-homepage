import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Byte Hello World">
    <Container>
      <Title>
        hard-helloworld <Badge>2021</Badge>
      </Title>
      <P>
        One off project to write &quot;Hello, World!&quot; with bytes in C.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://github.com/mabenmaple/helloworldbuthard">
            https://github.com/mabenmaple/helloworldbuthard <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>macOS/Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
            <span>C</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/helloworld.png" alt="hello world" />
    </Container>
  </Layout>
)

export default Work 
