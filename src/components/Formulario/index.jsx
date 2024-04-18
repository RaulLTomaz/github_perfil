import { useState, useEffect } from "react"

const Formulario = () => {
    const [materiaA, setMateriaA] = useState(0)
    const [materiaB, setMateriaB] = useState(0)
    const [materiaC, setMateriaC] = useState(0)
    const [nome, setNome] = useState("")

    useEffect(() => {
        console.log("O componente iniciou")

        return () => {
            console.log("O componente finalizou")
        }
    }, [])

    useEffect(() => {
        console.log("O estado nome mudou")
    }, [nome])

    useEffect(() => {
        console.log("materiaA mudou para: "+materiaA)
    }, [materiaA, materiaB, materiaC])

    const alteraNome = (evento) => {
        // setNome(evento.target.value)
        setNome(estadoAnterior => {
            return evento.target.value
        })
    }

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC
        const media = soma / 3

        if ( media >= 7) {
            return (
                <p>Ola {nome}, você foi Aprovado</p>
            )
        } else {
            return (
                <p>Ola {nome}, você não foi Aprovado</p>
            )
        }
    }

    return (
        <form>
            <ul>
            {[1,2,3,4,5].map(item => (
                <li key={item}>{item}</li>
            ))}
            </ul>

            <input type="text" placeholder="Seu nome" onChange={alteraNome} />
            <input type="number" placeholder="nota materia A" onChange={({target}) => setMateriaA(parseInt(target.value))} />
            <input type="number" placeholder="nota materia B" onChange={({target}) => setMateriaB(parseInt(target.value))} />
            <input type="number" placeholder="nota materia C" onChange={({target}) => setMateriaC(parseInt(target.value))} />
            {renderizaResultado()}
        </form>
    )
}

export default Formulario