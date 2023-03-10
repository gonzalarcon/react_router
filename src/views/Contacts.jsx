export const Contact = () => {
    return (
        <>
            <div className="main">
                <h2>Cuéntanos, ¿en qué te podemos ayudar?</h2>
                <form className="contact-form">
                    <div className="form-group">
                        <h3>Correo:</h3>
                        <input type="email" id="email" name="email" required placeholder="Correo Electrónico"/>
                    </div>
                    <div className="form-group">
                        <h3 for="message">Descripción:</h3>
                        <textarea id="message" name="message" required placeholder="¿Qué necesitas?" style={{width: '500px', height: '116px'}}></textarea>
                    </div>
                </form>
                <button class="submit-button" type="submit">Enviar</button>
            </div>
        </>
    )
}