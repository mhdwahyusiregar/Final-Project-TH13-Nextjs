import Image from "next/image";
import Link from "next/link";

// Definisikan tipe data untuk Pokémon
interface Ability {
  name: string;
  effect: string;
  description: string;
}

interface Pokemon {
  id: number;
  name: string;
  genus: string;
  description: string;
  imageUrl: string;
  types: string[];
  abilities: Ability[];
  stats: {
    HP: number;
    Attack: number;
    Defense: number;
    SpecialAttack: number;
    SpecialDefense: number;
    Speed: number;
  };
  locations: string[];
  color: string;
}

// Fungsi untuk mengambil data Pokémon dari API
async function getData(): Promise<Pokemon[]> {
  const response = await fetch("https://pokeapi.deno.dev/pokemon?limit=20");
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
}

// Komponen utama untuk menampilkan daftar Pokémon
export default async function PokemonPage() {
  const pokemonList: Pokemon[] = await getData();

  return (
    <section id="list" className="mx-auto w-screen bg-gray-200 py-8">
      <div className="mb-8 text-center">
        <h1 className="my-2 w-full text-5xl font-bold text-gray-700">
          List Pokemon GO!
        </h1>
        <div className="mb-4">
          <div className="mx-auto h-1 w-1/4 rounded bg-blue-500 opacity-75"></div>
        </div>
        <p className="m-4 text-lg text-gray-600">
          Berikut adalah List Pokemon terkuat di Bumi :
        </p>
      </div>
      <div className="m-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {pokemonList.map((pokemon) => (
          <div
            className="m-2 rounded bg-white px-4 py-4 shadow-lg"
            key={pokemon.id}
          >
            <Link href={`/pokemon/${pokemon.id}`}>
              <Image
                src={pokemon.imageUrl}
                alt={pokemon.name}
                width={800}
                height={100}
                className="img w-full rounded-lg"
              />
              <div className="px-2 py-2 text-center ">
                <p className="mb-2 text-xl font-bold text-gray-700">
                  {pokemon.name}
                </p>
                <p className="h-20 text-justify text-base text-gray-700">
                  {pokemon.description}
                </p>
              </div>
              <hr />
              <div className="px-2 py-4 text-center">
                <button className="rounded-bl-lg rounded-tr-lg bg-blue-500 px-4 py-2 font-bold text-white shadow-md hover:bg-blue-700">
                  Detail
                </button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
