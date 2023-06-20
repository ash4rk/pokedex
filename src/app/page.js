"use client"
import { Button, Container, Text } from '@/app/chakra';
import Navbar from './components/Navbar';
import Search from './components/Search';
import PokemonCard from './components/PokemonCard';
import PokemonInfiniteScroll from './components/PokemonInfiniteScroll';
import { useState } from 'react';

export default function Home() {
  const [pokemonData, setPokemonData] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <Container maxW='container.lg'>
      <Navbar />
      <Text fontSize={80} textAlign={'center'} my={4}>
        Search pokemons
      </Text>
      <Search setPokemonData={(res) => setPokemonData(res)} setLoading={setLoading} />

      {pokemonData && <PokemonCard pokemonData={pokemonData} />}

      <PokemonInfiniteScroll/>
    </Container>
  )
}
