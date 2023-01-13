import '../App.css';
import axios from 'axios';
import { useState, useRef } from 'react';

function Form(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const form = useRef();


    function enviar(e){
        e.preventDefault();
        const url = 'http://localhost/apis/enviar.php'
        const fData = new FormData();
        fData.append('name', name)
        fData.append('email', email)
        fData.append('message', message)

        axios.post(url, fData)
        .then(response=> console.log(response.data))
        .catch(error=> console.log(error));
    }
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
                        <form ref={form} onSubmit={e=>enviar(e)}>
                            <input 
                            type="text" 
                            name='nome' 
                            required 
                            placeholder='Nome'
                            value={name}
                            onChange={event => setName(event.target.value)}    
                            />
                            <input 
                            type="email" 
                            name='email' 
                            required 
                            placeholder='Email'
                            value={email}
                            onChange={event => setEmail(event.target.value)}    
                            />
                            <textarea 
                            name="message" 
                            id="message" 
                            required 
                            cols="30" 
                            rows="10" 
                            placeholder='Message'
                            value={message}
                            onChange={event => setMessage(event.target.value)} 
                            ></textarea>
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