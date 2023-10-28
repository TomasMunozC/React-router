import "../assets/css/style.css"

const Contacto = () => {
    return (
        <div className="contacto">
            <h1>Cuentanos, ¿en que podemos ayudarte?</h1>
            <form className="formulario">
                <label for="mail">Correo Electronico</label>
                <input type="mail" id="mail"></input>
                <label for="desc">Descripcion</label>
                <input type="text" id="desc" size="20"></input>
            </form>
            <button>Enviar</button>
        </div>
    )
}


export default Contacto;