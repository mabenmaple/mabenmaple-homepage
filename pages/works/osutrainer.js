import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Osu-trainer!">
    <Container>
      <Title>
        osu-trainer <Badge>2020-</Badge>
      </Title>
      <P>
          An osu application that helps to customize player experience by offering options for bpm control, ar control, od control, etc. on any
          osu! map.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://github.com/mabenmaple/osu-trainer">
            https://github.com/mabenmaple/osu-trainer <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
            <span>C#</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/osutrainer.png" alt="osu-trainer!" />
    </Container>
  </Layout>
)

export default Work 
