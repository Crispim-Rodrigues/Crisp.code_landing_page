import '../App.css';
import asana from '../images/asana.png';

function Person(){
    return(
        <section className='person_main'>
            <div className="person_boxes">
                <div className="person_text">
                    <h1>Desenvolvido por pessoa e para pessoa</h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis, 
                    risus ut tempus condimentum, urna est volutpat augue, a placerat ligula magna tincidunt sapien. 
                    Ut tempus pulvinar ante, at euismod orci commodo suscipit. Nunc ut viverra dui. Ut efficitur cursus diam a volutpat. 
                    Sed sagittis pharetra dolor, 
                    ac mollis sapien condimentum vitae. Ut in interdum tortor. 
                    </p>
                </div>
                <div className="person_box"><div></div><div></div><div></div><img src={asana} alt=''/></div>
            </div>
        </section>
    )
}

export default Person