import Logo from '../Logo';
import styles from './footer.module.css';
import { barlowThin, barlowBold } from '@/app/lib/utils';


export default function Footer(){
    return(
        <footer>
            <div className={ styles['footer'] }>
                <div>
                    <Logo />
                </div>
                <div >
                    <h3 className={`${barlowBold.className}`}>Moçâmedes, Namibe</h3>
                    <p className={`${barlowThin.className}`}>Saidy Minhas</p>
                    <p className={`${barlowThin.className}`}>Por trás da escola 1 de Junho</p>
                </div>
                <div>
                    <h3 className={`${barlowBold.className}`}>Funcionamento</h3>
                    <p className={`${barlowThin.className}`}>Segunda a sexta 5h - 6h e 18h - 21h</p>
                    <p className={`${barlowThin.className}`}>Sábado 6h - 8h</p>
                </div>
                <div>
                    <h3 className={`${barlowBold.className}`}>Contactos</h3>
                    <p className={`${barlowThin.className}`}><a target='_blank' href="https://www.instagram.com/z1academynamibe/">@z1academynamibe</a></p>
                    <p className={`${barlowThin.className}`}>(+244) 924 146 244</p>
                </div>
            </div>
            <div className={ styles['copyright'] }>
                <p className={`${barlowThin.className}`}>
                    2024 Z1 Academy Namibe - &copy; Todos os direitos reservados. Powered By: 
                    <a  target="_blank" href="https://www.youtube.com/@dctechangola1781">
                        DC Tech Angola
                    </a>
                </p>
            </div>
        </footer>
    );
}