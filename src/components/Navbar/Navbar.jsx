import style from './Navbar.module.css';
import { Icon } from '@iconify/react';

export function Navbar(){
    return(
        <div className={style.boxa}>
            <div className={style.polo}>
                <label className={style.text}>Test</label>
                <div className={style.buttonContainer}>
                    <a href = '#'>women</a>
                    <a href = '#'>sad</a>
                    <a href = '#'>ghd</a>
                    <a href = '#'>ret4</a>
                </div>
                <div className={style.buttonContainer}>
                    <button><Icon icon="mdi:heart-outline"/></button>
                    <button>asd</button>
                    <button>asd</button>
                </div>
            </div>
        </div>
    )
}