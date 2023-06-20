import React, { useState, useEffect } from 'react';
import { Box, Button, VStack, Wrap, WrapItem } from '@chakra-ui/react';
import { Flex } from '@/app/chakra';

const API_ENDPOINT = 'https://pokeapi.co/api/v2/pokemon/';

const PokemonInfiniteScroll = () => {
    const [resourceData, setResourceData] = useState([]);
    const [nextPage, setNextPage] = useState(null);

    const fetchResources = async () => {
        try {
            const response = await fetch(API_ENDPOINT);
            const data = await response.json();
            setResourceData(data.results);
            setNextPage(data.next);
        } catch (error) {
            console.error('Error fetching resources:', error);
        }
    };

    const fetchNextPage = async () => {
        if (nextPage) {
            try {
                const response = await fetch(nextPage);
                const data = await response.json();
                setResourceData(prevData => [...prevData, ...data.results]);
                setNextPage(data.next);
            } catch (error) {
                console.error('Error fetching next page:', error);
            }
        }
    };

    useEffect(() => {
        fetchResources();
    }, []);

    return (
        <Box my={5}>
            <Wrap spacing={4}>
                {resourceData.map((resource, index) => (
                    <WrapItem key={index}>
                        <Box p={4} borderWidth={1} borderColor="gray.200" borderRadius="md" mb={4}>
                            <VStack spacing={2}>
                                {/* Render your resource data here */}
                                <Box>{resource.name}</Box>
                                {/* Additional resource details */}
                            </VStack>
                        </Box>
                    </WrapItem>
                ))}
            </Wrap>

            {nextPage && (
                <Button onClick={fetchNextPage} mt={4} size="sm">
                    Load More
                </Button>
            )}
        </Box>
    );
};

export default PokemonInfiniteScroll;