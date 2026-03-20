export function Acomodacao() {
    return (
        <div>
            <h2>Acomodação</h2>
            <p>Informações sobre a acomodação.</p>
        </div>
    )
}

export function Botao() {
    return (
        <button>Botão</button>
    )
}

export function Cabecalho(props: { titulo: string }) {
    return (
        <div className="bg-blue-700">
            <h1>{props.titulo}</h1>
            <p>acomodacoa | exp </p>
        </div>
    )
}