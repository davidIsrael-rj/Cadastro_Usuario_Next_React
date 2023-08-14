import Layout from '../components/Layout'
export default function Jsx() {
    const titulo = <h1>JSX é um conceito Central</h1>

    function subtitulo(){
        return <h2>{"Muito legal".toUpperCase()}</h2>
    }
    return (
        <Layout titulo="Entendendo o JSX">
            {titulo}
            {subtitulo()}
            {Math.random()*60}
        </Layout>
    )
}