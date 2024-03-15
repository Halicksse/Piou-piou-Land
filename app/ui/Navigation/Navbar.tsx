import Link from 'next/link'

export default function NavBar() {
    return (
        <div className="text-yellow-300">
            <Link href="/">Maison de Piou</Link>
            <Link href="/boutique">Piou Boutique</Link>
            <Link href="/profil">Piou Profil</Link>
        </div>
        
    )
}