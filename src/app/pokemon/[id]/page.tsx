import { ReactNode } from "react";
import Image from "next/image";

interface Pokemon {
  name: string;
  imageUrl: string;
  description: string;
  stats: { [key: string]: number };
}

async function getData(id: string): Promise<Pokemon> {
  const response = await fetch(`https://pokeapi.deno.dev/pokemon/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch data for ID: ${id}`);
  }
  return response.json();
}

export default async function DetailPokemon({
  params,
}: {
  params: { id: string };
}): Promise<ReactNode> {
  try {
    const pokemon: Pokemon = await getData(params.id);

    return (
      <section className="flex h-screen items-center justify-center bg-gray-200 py-8">
        <div className="m-8 w-full max-w-md rounded bg-white px-4 py-4 shadow-lg">
          <div className="text-center">
            <Image
              src={pokemon.imageUrl}
              alt={pokemon.name}
              width={800}
              height={800}
              className="img w-full rounded-lg"
            />
            <hr />
            <div className="px-2 py-2">
              <h1 className="mb-2 text-4xl font-bold text-gray-700">
                {pokemon.name}
              </h1>
              <hr />
              <p className="text-justify text-base text-gray-700">
                {pokemon.description}
              </p>
              <hr />
              <h2 className="text-3xl font-semibold">Energy:</h2>
              <ul>
                {Object.entries(pokemon.stats).map(([stat, value]) => (
                  <li key={stat}>
                    <strong>{stat}:</strong> {value}
                  </li>
                ))}
              </ul>
            </div>
            <hr />
          </div>
        </div>
      </section>
    );
  } catch (error: any) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div>
          <h1 className="text-6xl font-bold">Error</h1>
          <p>{error.message}</p>
        </div>
      </div>
    );
  }
}
