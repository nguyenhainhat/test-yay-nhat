import { PokemonData } from "../data/pokemon.data";
import { Button, Card, Group, Image, Text } from "@mantine/core";
import { useClipboard } from "@mantine/hooks";
import "./index.css";
export default function PokemonCard({ pokemon }: { pokemon: PokemonData }) {
  //Làm Bài Tại Đây
  const clipboard = useClipboard({ timeout: 500 });
  return (
    <div className="ex3">
      <Card shadow="sm" mx={"auto"} p="lg" radius="md" withBorder w={287}>
        <Card.Section component="a" href="https://mantine.dev/">
          <Image
            src={pokemon.image}
            width={285}
            height={300}
            alt="Norway"
            className="pokemon_img"
          />
        </Card.Section>

        <Group position="apart" mt="md" mb="xs">
          <Text weight={500}>{pokemon.name}</Text>
        </Group>

        <Text size="sm" color="dimmed" mb={16}>
          {pokemon.description}
        </Text>

        <Button
          radius={8}
          variant="light"
          fullWidth
          color={clipboard.copied ? "green" : "orange.2"}
          onClick={() => clipboard.copy("Hello, world!")}
        >
          {clipboard.copied ? "Copied" : "Copy Pokemon Description"}
        </Button>
      </Card>
    </div>
  );
}
