import {
    Container,
    Heading,
    SimpleGrid
} from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbOsuTrainer from '../public/images/works/osutrainer.png'

const Works = () => {
    return (
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>

            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section>
                    <WorkGridItem id="osutrainer" title="osu-trainer" thumbnail={thumbOsuTrainer}>
                        A program that allows you to modify the difficulty of a beatmap very quickly and easily.
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    )
}

export default Works
