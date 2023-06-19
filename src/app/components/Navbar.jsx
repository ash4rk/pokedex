import { Flex, Box, Button, Text, Center } from '@/app/chakra'
import { Image } from '@/app/chakra-next-js'

const Navbar = () => {
    return (
        <Flex justifyContent={'space-between'} py={6} alignItems={'center'}>
            <Box position={'relative'} aspectRatio={3 / 2} minHeight={20}>
                <Text fontWeight={'bold'} fontSize={40} textAlign={'center'} my={7}>
                    Pokedex
                </Text>
            </Box>

            <Box>
                <Button size='md' colorScheme='red'>
                    History
                </Button>
            </Box>

        </Flex>
    )
}

export default Navbar