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

            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section delay={0.1}>
                    <WorkGridItem id="osutrainer" title="osu-trainer" thumbnail={thumbOsuTrainer}>
                        A program that allows you to modify the difficulty of a beatmap very quickly and easily.
                    </WorkGridItem>
                </Section>

                <Section delay={0.1}>
                    <WorkGridItem id="electronMarkdownEditor" title="markdown-editor" thumbnail={thumbMarkdownEditor}>
                      Experimental markdown editor made with Electron, ReactJS, Vite Boilerplate, CodeMirror, and Remark. 
                    </WorkGridItem>
                </Section>

                <Section delay={0.2}>
                    <WorkGridItem id="mandelbrotTerminal" title="mandelbrot-terminal" thumbnail={thumbTerminalMandelbrot}>
                      Ascii terminal mandelbrot written in C++ utilising a bitwise approach.
                    </WorkGridItem>
                </Section>

                <Section delay={0.2}>
                    <WorkGridItem id="discordBot" title="discord-bot" thumbnail={thumbDiscordBot}>
                      Experimental discord bot written using DiscordJS node.js module.
                    </WorkGridItem>
                </Section>

                <Section delay={0.3}>
                    <WorkGridItem id="pythonTyping" title="python-typing" thumbnail={thumbPythonTyping}>
                      Very scuffed python school project from ~3 years ago using PyGame and lazy hardcoding.
                    </WorkGridItem>
                </Section>

                <Section delay={0.3}>
                    <WorkGridItem id="helloWorldHard" title="hard-helloworld" thumbnail={thumbHelloWorldHard}>
                      Hardware approach to writing out "Hello World" in C to learn bit function.
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    )
}

export default Works
