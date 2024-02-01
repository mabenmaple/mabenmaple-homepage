import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { PostGridItem } from '../components/grid-item'
import workinprogress from '../public/images/contents/workinprogress.png'

const Posts = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Blog Posts
      </Heading>

      <SimpleGrid columns={[1,1,2]} gap={6}>
        <Section>
          <PostGridItem id="testblog" title="Test Blog" thumbnail={workinprogress}>
            Test blog post before I start posting actual blogposts
          </PostGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Posts
