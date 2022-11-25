import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Discord-bot">
    <Container>
      <Title>
        Discord Bot <Badge>2021</Badge>
      </Title>
      <P>
        Discord bot that allows for the playing of songs, kicking, banning, general chat commands, etc.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://github.com/mabenmaple/bot-project">
            https://github.com/mabenmaple/bot-project <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
            <span>Javascript</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/discordBot.png" alt="discord bot" />
    </Container>
  </Layout>
)

export default Work 
