import Image from "next/image";
import Navbar from "./ui/Navigation/Navbar";
import Footer from "./ui/Navigation/Footer";
import Link from 'next/link'

export default function Home() {
  return (
    <main className="bg-slate-900 flex min-h-screen flex-col items-center justify-between p-24">
    <Navbar />
     <div className="text-yellow-300">
        <h1 >BIENVENUE A PIOU PIOU LAAAAND !!!!</h1>
        <div> 
          <Image
          src="/mascot.webp"
          width={200}
          height={500}

          alt="Mascot of the attraction parc"
          />
          </div>
          <div>
            <h2>SERVICE RESTAURATION SUPER COOL!</h2>
            <p>piou piou piou piou piou piou piou piou piou piou piou piou piou piou piou piou piou piou piou piou piou piou piou piou piou piou piou piou piou piou piou piou piou piou piou piou piou piou piou piou piou piou piou piou piou piou piou piou piou piou piou piou piou piou piou piou piou piou piou piou piou piou </p>
            <Image
          src="/resto1.webp"
          width={200}
          height={500}
          alt="Picture of the restaurant inside of the attraction parc"
          />
             <Image
          src="/resto1.webp"
          width={200}
          height={500}
          alt="Picture numero 2 of the restaurant inside of the attraction parc"
          />
          </div>
      </div>
      <Footer />
    </main>
  );
}
