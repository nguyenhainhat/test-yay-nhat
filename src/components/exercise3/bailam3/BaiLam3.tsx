import { Grid } from "@mantine/core";
import PokemonCard from "./components/PokemonCard";
import pokemons from "./data/pokemon.data";

export default function BaiLam3() {
  return (
    <>
      <Grid mt="xl" gutter={50}>
        {pokemons.map((pokemon) => (
          <Grid.Col key={pokemon.no} span={12} md={6} lg={4}>
            <PokemonCard pokemon={pokemon} />
          </Grid.Col>
        ))}
      </Grid>
    </>
  );
}
