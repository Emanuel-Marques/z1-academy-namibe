import Image from 'next/image';
import z1Logo from '../../../../public/z1-logo.png';
import styles from './logo.module.css';

export default function Logo(){
    return(
        <div className={ styles['logo-img'] }>
            <Image
              src={ z1Logo }
              alt='Z1 Academy Namibe Logo'
              width={ 90 }
              height={ 90 }
            />
        </div>
    );
}