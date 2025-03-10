import Image from "next/image";
import Link from "next/link";
import Navigation from "./Navigation";

const MainHeader = () => {
  return (
    <header className="flex border-b border-zinc-400 bg-white p-1 justify-between items-center">
      <div className="flex gap-3 items-center ml-2">
        <Link href="/">
          <Image
            className="rounded-full hover:bg-rose-200 duration-500"
            width={60}
            height={60}
            src="/images/leks-bakehouse-logo.png"
            alt="Logo"
          />
        </Link>
        <h2 className="font-pacifico text-2xl">Lek's Bakehouse</h2>
      </div>

      <Navigation />
    </header>
  );
};

export default MainHeader;
