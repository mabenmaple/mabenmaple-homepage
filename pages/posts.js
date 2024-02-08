import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { PostGridItem } from '../components/grid-item'
import workinprogress from '../public/images/posts/tuckermoscow.png'

const Posts = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Blog Posts
      </Heading>

      <SimpleGrid columns={[1,1,2]} gap={6}>
        <Section>
          <PostGridItem id="testblog" title="Tucker Carlson, Social Media Radicalisation, and the Bigger Picture" thumbnail={workinprogress}>
          </PostGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Posts
