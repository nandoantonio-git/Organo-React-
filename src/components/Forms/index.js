import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Forms.css"

const Forms = (props) => {
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    const onSave = (event) => {
        event.preventDefault();
        props.aoColaboradorCadastrado(
            {
                nome,
                cargo,
                imagem,
                time
            }
        )
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className="formulario">
            <form onSubmit={onSave}>
                <h1>Preencha os dados para criar o card do colaborador:</h1>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite o seu nome"
                    valor={nome}
                    aoAlterar={valor => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite o seu cargo"
                    valor={cargo}
                    aoAlterar={valor => setCargo(valor)}
                />
                <CampoTexto
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterar={valor => setImagem(valor)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Time"
                    itens={props.times} 
                    valor={time}
                    aoAlterar={valor=>setTime(valor)}
                    />
                <Botao texto="Criar Card" />
            </form>

        </section>
    );
}

export default Forms