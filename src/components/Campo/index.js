import "./Campo.css"

const Campo = ({ type = 'text', label, placeholder, valor, aoAlterar, obrigatorio = false }) => {
    const aoMudar = (event) => {
        aoAlterar(event.target.value);
    }

    return (
        <div className={`campo campo-${type}`}>
            <label>{label}</label>
            <input
                type={type}
                onChange={aoMudar}
                value={valor}
                required={obrigatorio}
                placeholder={`${placeholder}...`} />
        </div>
    );
}

export default Campo;


