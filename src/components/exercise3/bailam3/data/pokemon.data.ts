export type PokemonData = {
  no: number;
  image: string;
  name: string;
  description: string;
};

const data: PokemonData[] = [
  {
    no: 1,
    image: 'https://img.pokemondb.net/artwork/bulbasaur.jpg',
    name: 'Bulbasaur',
    description: 'A strange seed was planted on its back at birth. The plant sprouts and grows with this POKéMON.',
  },
  {
    no: 4,
    image: 'https://img.pokemondb.net/artwork/avif/charmander.avif',
    name: 'Charmander',
    description: 'It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.',
  },
  {
    no: 7,
    image: 'https://img.pokemondb.net/artwork/avif/squirtle.avif',
    name: 'Squirtle',
    description: 'After birth, its back swells and hardens into a shell. It powerfully sprays foam from its mouth.',
  },
  {
    no: 25,
    image: 'https://img.pokemondb.net/artwork/avif/pikachu.avif',
    name: 'Pikachu',
    description: 'When several of these POKéMON gather, their electricity can build and cause lightning storms.',
  },
  {
    no: 52,
    image: 'https://img.pokemondb.net/artwork/avif/meowth.avif',
    name: 'Meowth',
    description: 'Adores round objects. It wanders the streets on a nightly basis to look for dropped loose change.',
  },
  {
    no: 54,
    image: 'https://img.pokemondb.net/artwork/avif/psyduck.avif',
    name: 'Psyduck',
    description: 'While lulling its enemies with its vacant look, this wily POKéMON will use psychokinetic powers.',
  }
];

export default data;