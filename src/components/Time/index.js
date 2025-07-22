import Colaborador from "../Colaborador";
import "./Time.css"
import hexToRgba from "hex-to-rgba";

const Time = ({ time, colaboradores, aoDeletar, mudarCor, aoFavoritar }) => {


    return (
        (colaboradores.length > 0) ? <section className="time" style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(time.cor, '0.5') }}>
            <input onChange={event => mudarCor(event.target.value, time.id)} value={time.cor} type='color' className="input-cor" />
            <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
            <div className="colaboradores">
                {colaboradores.map((colaborador, indice) => {
                    return (
                        <Colaborador 
                        colaborador={colaborador} 
                        corDeFundo={time.cor} 
                        key={indice} 
                        aoDeletar={aoDeletar}
                        aoFavoritar={aoFavoritar}
                         />)
                })}
            </div>

        </section> : ""

    );
}

export default Time;