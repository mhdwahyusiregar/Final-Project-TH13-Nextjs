import Link from "next/link";

function Navbar() {
  return (
    <header className="bg-blue-500 text-primary-foreground ">
      <div className="container flex items-center justify-between py-3">
        <h1 className="text-3xl font-bold hover:cursor-pointer">
          {" "}
          <Link href="/">Pokemon GO</Link>
        </h1>
        <nav>
          <ul className="flex gap-10 ">
            <li className="rounded-md px-5 py-3 hover:cursor-pointer hover:bg-secondary/20">
              <Link href="/">Home</Link>
            </li>
            <li className="rounded-md px-5 py-3 hover:cursor-pointer hover:bg-secondary/20">
              {" "}
              <Link href="/pokemon">List Pokemon</Link>
            </li>
            <li className="rounded-md px-5 py-3 hover:cursor-pointer hover:bg-secondary/20">
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/mwahyusrg/"
              >
                Contact me
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
