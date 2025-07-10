import "./CampoTexto.css"

const CampoTexto = (props)=>  {
    const aoMudar = (event)=>{
       props.aoAlterar(event.target.value);
    }

    return ( 
        <div className="campo-texto">
            <label>{props.label}</label>
            <input onChange={aoMudar} value={props.valor} required={props.obrigatorio} placeholder={`${props.placeholder}...`}/>
        </div>
     );
}

export default CampoTexto;