import { Acomodacao, Botao, Cabecalho } from "@/components/interface";

export default function Principal() {
    return (
        <div>
            <Cabecalho></Cabecalho>
            <Acomodacao />
            <Acomodacao />
            <Acomodacao />
            <Botao></Botao>
        </div>
    )
}