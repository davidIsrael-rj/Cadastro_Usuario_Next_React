import Link from 'next/link'

export default function Inicio(){
    return (
        <div>
            <h1>Fundamentos de Next.js & React</h1>
            <h2>Vamos estudar esse framework</h2>
            <Link href="/estiloso">
                Estiloso
                </Link>
                <br />
            <Link href="/exemplo">
                Exemplo
            </Link>
        </div>
    )
}