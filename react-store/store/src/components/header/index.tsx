import '../../index.css';
import './style.css';
import dgames from '../../assets/img/dgames.png';
function Header(){
    return (
        <>
            <header className="header__gameStore">
                <div>
                    <img src={dgames} alt="" className='logo' />
                </div>
                <div>
                    <ul>
                        <li>Playstation</li>
                        <li>Xbox</li>
                        <li>Nintendo</li>
                        <li>Sobre</li>
                        <li>Contato</li>
                    </ul>
                </div>
            </header>
        
        </>
    );

}

export default Header;