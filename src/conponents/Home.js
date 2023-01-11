import '../App.css';
import logo from '../images/logo.png';

const Home = ()=>{
    return(
        <div className="home_main">
            <header>
                <div className="home_sidebar">
                    <div className="w50"><p className='logo'><span>{'<'}</span>Danki<span>.</span>Code<span>{'>'}</span></p></div>
                    <div className="w50">
                        <ul>
                            <li><a href="/#">home</a></li>
                            <li><a href="/#">serviço</a></li>
                            <li><a href="/#">sobre</a></li>
                            <li><a href="/#">contato</a></li>
                        </ul>
                    </div>
                </div>
                <div className="home_text">
                    <div className="text_box">
                        <h1>Sistemas próprios<br/>para empresas autênticas</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eleifend commodo ipsum, vitae malesuada nisi convallis eget.</p>
                    </div>
                </div>   
            </header>
        </div>
    );
};

export default Home