import NextLink from 'next/link'
import { Box, Heading, Container, Text, Divider, Button} from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'

const NoFound = () => {
    return  (
        <Container>
            <Heading as="h1">Not Found HAUIHdihuwauhfauih</Heading>
            <Text>Either I&apos;ve been to lazy to implement it yet or it leads to nowhere.</Text>
            
            <AnimatePresence>
                <Box my={6} align="center">
                    <NextLink href="/">
                        <Button colorScheme="teal">Home</Button> 
                    </NextLink>
                </Box>
            </AnimatePresence>
        </Container>
    )
}

export default NoFound
