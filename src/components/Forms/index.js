import { useState } from "react";
import Botao from "../Botao";
import Campo from "../Campo";
import ListaSuspensa from "../ListaSuspensa";
import "./Forms.css"

const Forms = (props) => {
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');
    const [nomeTime, setNomeTime] = useState('');
    const [corTime, setCorTime] = useState('');

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
                <Campo
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite o seu nome"
                    valor={nome}
                    aoAlterar={valor => setNome(valor)}
                />
                <Campo
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite o seu cargo"
                    valor={cargo}
                    aoAlterar={valor => setCargo(valor)}
                />
                <Campo
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
            <form onSubmit={(event)=>{
                event.preventDefault()
                props.cadastrarTime({nome:nomeTime,cor:corTime})
            }}>
                <h1>Preencha os dados para criar um novo time:</h1>
                <Campo
                    obrigatorio
                    label="Nome"
                    placeholder="Digite o nome do time"
                    valor={nomeTime}
                    aoAlterar={valor => setNomeTime(valor)}
                />
                <Campo
                    obrigatorio
                    type='color'
                    label="Cor"
                    placeholder="Digite a cor do time"
                    valor={corTime}
                    aoAlterar={valor => setCorTime(valor)}
                />
               
                <Botao texto="Criar um novo time" />
            </form>

        </section>
    );
}

export default Forms