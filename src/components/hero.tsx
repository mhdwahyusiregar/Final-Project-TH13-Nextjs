import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import PokemonPage from "@/app/pokemon/page";
import Link from "next/link";

function Hero() {
  return (
    <>
      <section className="container my-20 flex items-center justify-between text-blue-500">
        <div>
          <div className="mb-7 flex flex-col gap-2">
            <h2 className="text-7xl font-bold tracking-wide">I'm mwahyusrg</h2>
            <p className="text-2xl tracking-wide text-gray-900">
              fullstack web developer
            </p>
          </div>
          <Button className="bg-blue-500  font-bold">
            {" "}
            <Link target="_blank" href="https://www.linkedin.com/in/mwahyusrg/">
              Hire me
            </Link>
          </Button>
        </div>
        <div className="mb-7 flex flex-col gap-2">
          <Image src="/tanpa bg.png" alt="me" width={300} height={350} />
        </div>
      </section>
      <PokemonPage />
    </>
  );
}

export default Hero;
