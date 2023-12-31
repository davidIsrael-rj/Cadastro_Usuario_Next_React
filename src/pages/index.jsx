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
            <Navegador texto="Navegação #01" destino="/navegacao" cor="#FF7F50"/>
            <Navegador texto="Navegação #02" destino="/cliente/sp-2/123" cor="blue"/>
            <Navegador texto="Componente com Estado" destino="/estado" cor="Purple"/>
            <Navegador texto="Integração com API" destino="/integracao_1" cor="#7B68EE"/>
            <Navegador texto="Conteúdo Estático" destino="/estatico" cor="PowderBlue"/>
        </div>
    )
}