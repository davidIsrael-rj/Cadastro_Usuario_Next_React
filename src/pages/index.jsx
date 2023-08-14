import Link from 'next/link'
import Navegador from '../components/Navegador'

export default function Inicio() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            height: '100vh'
        }}>
            <Navegador texto="Estiloso" destino="/estiloso" cor="#FF00FF"/>
            <Navegador texto="Exemplo" destino="/exemplo" cor="#00FA9A"/>
            <Navegador texto="JSX" destino="/jsx" cor="crimson"/>
        </div>
    )
}