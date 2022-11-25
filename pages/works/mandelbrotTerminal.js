import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Terminal Ascii Mandelbrot">
    <Container>
      <Title>
        Terminal Ascii Mandelbrot <Badge>2021</Badge>
      </Title>
      <P>
        The famous mandelbrot set but within the terminal, and rendered using 72 standard characters!
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://github.com/mabenmaple/mandelbrotTerminal">
            https://github.com/mandelbrotTerminal <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
            <span>C++</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/mandelbrot.png" alt="ascii terminal mandelbrot" />
    </Container>
  </Layout>
)

export default Work 
