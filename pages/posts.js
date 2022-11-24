import { Container, Box, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/Section'
import { WorkGridItem } from '../components/grid-item'
import workinprogress from '../public/images/contents/workinprogress.png'

const Posts = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Blog Posts
      </Heading>

      <SimpleGrid columns={[1,1,2]} gap={6}>
        <Section>
          <WorkGridItem id="testblog" title="Test Blog" thumbnail={workinprogress}>
            Test blog post before I start posting actual blogposts
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Posts
