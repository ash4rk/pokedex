import React from 'react'
import { Avatar, Flex, VStack, Text, Button, Badge, HStack, Box, Progress, Center, Grid } from '@/app/chakra'

const typeColors = {
    fire: 'red.500',
    bug: 'green.500',
    electric: 'yellow.500',
    grass: 'green.900',
    dark: 'black',
    flying: 'blue.200',
    fighting: 'orange.500',
    // Add more pokemon types and colors as needed
};

const PokemonCard = ({ pokemonData }) => {
    const avatarUrl = pokemonData.sprites.other['official-artwork'].front_default;

    return (
        <Flex my={16} border={"2px solid"} borderColor={typeColors[pokemonData.types[0].type.name] || 'black.800'} borderRadius={40} padding={8} align="center">
            <VStack gap={5}>
                <Avatar size={'3xl'} name={pokemonData.name} src={avatarUrl} />
                <Text fontSize={50}>
                    {pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1)}
                </Text>
            </VStack>

            <VStack ml={10} alignItems={'center'} >
                <Flex gap={4}>
                    <Badge fontSize={'0.9em'} colorScheme='blue'>
                        Height: {pokemonData.height}
                    </Badge>
                    <Badge fontSize={'0.9em'} colorScheme='green'>
                        Weight: {pokemonData.weight}
                    </Badge>
                </Flex>

                <Text fontSize={'6xl'} fontWeight={'bold'} color={'gray.500'}>
                    {pokemonData.order}
                </Text>

                <Text fontSize={'md'} fontWeight={'bold'}>
                    Base Stats
                </Text>


                <Box>
                    <Text as={'span'} fontSize={'md'} fontWeight={'bold'} color={'#afadaf'} mr={310}>
                        HP
                    </Text>
                    <Progress value={pokemonData.stats[0].base_stat} colorScheme={'red'} max={300} backgroundColor={'white'} />
                </Box>

                <Box>
                    <Text as={'span'} fontSize={'md'} fontWeight={'bold'} color={'#afadaf'} mr={300}>
                        ATK
                    </Text>
                    <Progress value={pokemonData.stats[1].base_stat} colorScheme={'orange'} max={300} backgroundColor={'white'} />
                </Box>

                <Box>
                    <Text as={'span'} fontSize={'md'} fontWeight={'bold'} color={'#afadaf'} mr={300}>
                        DEF
                    </Text>
                    <Progress value={pokemonData.stats[2].base_stat} colorScheme={'blue'} max={300} backgroundColor={'white'} />
                </Box>

                <Box>
                    <Text as={'span'} fontSize={'md'} fontWeight={'bold'} color={'#afadaf'} mr={300}>
                        SPD
                    </Text>
                    <Progress value={pokemonData.stats[5].base_stat} colorScheme={'gray'} max={300} backgroundColor={'white'} />
                </Box>

                <Box>
                    <Text as={'span'} fontSize={'md'} fontWeight={'bold'} color={'#afadaf'} mr={300}>
                        EXP
                    </Text>
                    <Progress value={pokemonData.base_experience} colorScheme={'green'} max={1000} backgroundColor={'white'} />
                </Box>

                <Flex gap={5} my={5}>
                    {pokemonData.types.map((type, index) => (

                        <Badge key={index} textAlign="center" color={'white'} fontSize="sm" bg={typeColors[type.type.name] || 'black.800'} p={4}>
                            {type.type.name}
                        </Badge>
                    ))}
                </Flex>
            </VStack>
        </Flex >
    );
};

export default PokemonCard;