import '../App.css';


function Form(){
    return(
        <section className="form_main">
            <div className="center">
                <div className="w50">
                    <div className="form_box">
                        <h1>Entre em contato</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Aliquam scelerisque lobortis iaculis. 
                            In hac habitasse platea dictumst. Cras vitae purus metus. 
                        </p>
                        <form>
                            <input type="text" name='nome' placeholder='Nome'/>
                            <input type="email" name='email' placeholder='Email'/>
                            <textarea name="mensage" id="mensage" cols="30" rows="10" placeholder='Mensage'></textarea>
                            <input type="submit" value="Enviar" />
                        </form>
                    </div>
                </div>
                <div className="w50">
                    <div className="container">
                        <h1>Faça uma visita</h1>
                        <div className="map_box"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Form