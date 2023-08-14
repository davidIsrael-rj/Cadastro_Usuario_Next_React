import Cabecalho from "../components/Cabecalho";
import Layout from "../components/Layout";


export default function Exemplo() {
    return (
        <Layout titulo="Usando Componentes">
            <h1>Exemplo</h1>
            <Cabecalho titulo="Next.js & React"/>
            <Cabecalho titulo="Aprender Next na prática"/>
           
        </Layout>
    )
}