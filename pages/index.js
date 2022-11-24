import NextLink from 'next/link'
import { 
    Container, 
    Box,
    Heading,
    Image, 
    Link,
    Button,
    useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'

const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
                I&apos;m Nick, also known as mabenmaple, programmer and web developer from Australia. </Box>

            
            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Nicolas Louw
                    </Heading>
                    <p>Student</p>
                </Box>

                <Box
                    flexShrink={0}
                    mt={{ base: 4, md: 0 }}
                    ml={{ md: 6 }}
                    align="center"
                >
                    <Image
                        borderColor="whiteAlpha.800"
                        borderWidth={2}
                        borderStyle="solid"
                        maxWidth="100px"
                        display="inline-block"
                        borderRadius="full"
                        src="/images/nick.png"
                        alt="Profile Image"
                    />
                </Box>
            </Box>

            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Work
                </Heading>

                <Paragraph>I am a student who does stuff for fun, from web-dev, game-dev and computing
                which involved learning Python, C and it&apos;s subsidiaries, Assembly, pretty much
                anything that has some form of documentation. Over a couple years I&apos;ve contributed to
                numerous projects, the most well-known/famous being{' '}
                    <NextLink href="/works/osu-trainer">
                        <Link>osu-trainer</Link>
                    </NextLink>
                .
                </Paragraph>

                <Box align="center" my={4}>
                    <NextLink href="/works">
                        <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                        Stuff I&apos;ve done
                        </Button>
                    </NextLink>
                </Box>
            </Section>

            <Section delay={0.2}>
                <Heading as="h3" variant="section-title" >
                    Bio
                </Heading>
            </Section>

            <BioSection>
                <BioYear>2005</BioYear>
                Born
            </BioSection>

            <BioSection>
                <BioYear>2012</BioYear>
                Learned Java to mod OG MineCraft
            </BioSection>

            <BioSection>
                <BioYear>2022</BioYear>
                 Graduated :)
            </BioSection>

            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    Interests
                </Heading>
                <Paragraph>
                    Machine Learning, Keyboards, Gaming, Basketball 
                </Paragraph>
            </Section>
        </Container>
    )
}

export default Page
