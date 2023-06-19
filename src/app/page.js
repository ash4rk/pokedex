import { Button, Container, Text } from '@/app/chakra';
import Navbar from './components/Navbar';
import Search from './components/Search';

export default function Home() {
  return (
    <Container maxW='container.lg'> 
      <Navbar/>
      <Text fontSize={80} textAlign={'center'} my={4}>
        Search pokemons
      </Text>
      <Search/>
    </Container>
  )
}
