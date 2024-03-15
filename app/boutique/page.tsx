import Image from "next/image";

export default function NavBar() {
    return (        <div className="bg-slate-900 text-yellow-300">
           <h2>BIENVENUE A LA BOUTIQUE DE PIOU PIOU LAND !!!!!!</h2>
           <Image 
           src="/porte.webp"
              width={150}
                height={400}
                alt="Picture of the entrance of the attraction parc"
                className="rounded-sm"
           />
           <div className="border border-yellow-400">
            <p>TICKETS GRANDS PIOU : 10 €</p>
            <p>TICKETS PETITS PIOU : 4 €</p>
            <p>TICKETS SENIORS PIOU : 6 €</p>
           </div>
           <div>
            <p className="border border-yellow-400">La piou peluche trop chou est en vente au parc : 24 € </p>
           <Image 
           src="/peluche.webp"
           width={150}
                height={400}
                alt="Picture of the entrance of the attraction parc"
                className="rounded-sm"/>
           </div>
        </div>
        
    )
}