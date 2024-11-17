import {
    Container,
    Heading,
    SimpleGrid
} from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbOsuTrainer from '../public/images/works/osutrainer.png'
import thumbMarkdownEditor from '../public/images/works/markdowneditor.png'
import thumbTerminalMandelbrot from '../public/images/works/mandelbrot.png'
import thumbDiscordBot from '../public/images/works/discordbot.png'
import thumbPythonTyping from '../public/images/works/typing.png'
import thumbHelloWorldHard from '../public/images/works/helloworld.png'

const Works = () => {
    return (
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>

        Nothing here yet! Maybe another time...

        </Container>
    )
}

export default Works
