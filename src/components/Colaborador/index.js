import './Colaborador.css'
import { IoIosCloseCircle} from "react-icons/io";
import {TiHeart, TiHeartOutline } from "react-icons/ti";

const Colaborador = ({ colaborador, corDeFundo, corDestaque, aoDeletar, aoFavoritar }) => {
    function favoritar(id){
        aoFavoritar(colaborador.id);
    }
const propsfavorito={
    size:25,
    onClick: favoritar,
    color:'gray'
}

    return (<div className='colaborador'>
        <IoIosCloseCircle className='deletar'
            size={25}
            style={{ color: corDestaque }}
            onClick={()=>aoDeletar(colaborador.id)} />
        <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
            <img src={colaborador.imagem} alt={colaborador.nome} />
        </div>
        <div className='rodape'>
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
            <div className='favoritar'>
                {colaborador.favorito 
                ? <TiHeart {...propsfavorito} color='red'/>
                :<TiHeartOutline {...propsfavorito}/>}
            </div>
        </div>
    </div>
    );
}

export default Colaborador;

