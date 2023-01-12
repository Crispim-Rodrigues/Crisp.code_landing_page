import { useState, useEffect, useRef } from 'react';
import '../App.css';
import { motion } from 'framer-motion';
import perfil from '../images/perfil.jpg';

function Coments(){
    const carousel = useRef();
    const [width, setWidth] = useState(0);

    useEffect(()=> {
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    },[])



    const items = [];
    for (let i = 0; i < 3; i++) {
        items.push(
        <motion.div key={i} className='single_carrosel'
            
        >
            <h2>Crispim Rodrigues<img src={perfil} alt="" /><p>Full-Stack Developer</p></h2> 
            <p>
            Proin sagittis, risus ut tempus condimentum, urna est volutpat augue, 
            a placerat ligula magna tincidunt sapien.
            Ut tempus pulvinar ante, at euismod orci.
            </p>
        </motion.div>
        );
    }

    return(
        <section className='coments_main'>
                <div className="w50">
                    <div className="back_left"> 
                        <h2>Nosso time</h2>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis, 
                        risus ut tempus condimentum, urna est volutpat augue, a placerat ligula magna tincidunt sapien. 
                        Ut tempus pulvinar ante, 
                        at euismod orci commodo suscipit.
                        </p>
                    </div>    
                </div>
                <div className="w50">
                    <div className='back_right'>
                        <motion.div 
                        className='carrosel' 
                        whileTap={{ cursor: 'grabbing'}}
                        ref={carousel}
                        >
                            <motion.div
                            className='Inner'
                            drag="x"
                            dragConstraints={{ right: 0, left: -width}}
                            >
                             {items} 
                            </motion.div>     
                        </motion.div>
                    </div>    
                </div>
        </section>
    )
}

export default Coments