import {Container, Badge } from '@chakra-ui/react'
import { Title, PostImage } from '../../components/post'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Post = () => (
  <Layout title="Test Blog">
    <Container>
      <Title>
        Test Blog Post <Badge>24/11/22</Badge>
      </Title>
      <P>
        Hello! This is (technically) my first blog post on my site, but I&apos;m just
        using this as a test to make sure everything works and is nice lol.
      </P>
      
      <PostImage src="/images/contents/workinprogress.png" alt="MorganaStogie" />
    </Container>
  </Layout>
)

export default Post
