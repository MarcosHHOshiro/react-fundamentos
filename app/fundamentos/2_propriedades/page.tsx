import { Acomodacao, Cabecalho } from "@/components/interface";

export default function Page() {
    return (
        <div>
            <Cabecalho titulo="Propriedades em React" />
            <hr />
            <Acomodacao />
        </div>
    )
}