"use client";
import { Button, Input, useToast} from "@/app/chakra";
import { useState } from "react";

const Search = ({ setPokemonData, setLoading }) => {
	const [query, setQuery] = useState("");
    const toast = useToast();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!query) return;
        setLoading(true);
        setPokemonData(null);
		try {
			const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);
			const data = await res.json();
            
            setPokemonData(data);
		} catch (error) {
			toast({
				title: "Error",
				description: error.message,
				status: "error",
				duration: 3000,
				isClosable: true,
			});
		} finally {
            setLoading(false);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<Input
				variant={"outline"}
				placeholder={"bulbasaur"}
				focusBorderColor='blue.500'
				value={query}
				onChange={(e) => setQuery(e.target.value)}
			/>
			<Button size='md' type='submit' colorScheme='red' mt={4} disabled={!query} opacity={!query ? 0.5 : 1}>
				Search
			</Button>
		</form>
	);
};

export default Search;