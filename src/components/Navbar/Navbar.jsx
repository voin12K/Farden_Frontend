import style from './Navbar.module.css';
import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";

export function Navbar() {
    return (
        <>
            <div className={style.wrapper}>
                <div className={style.boxa}>
                    <div className={style.polo}>
                        <label className={style.text}>FARDEN</label>
                        <div className={style.buttonContainer}>
                            <Link to="#" className={style.hreff}>Women</Link>
                            <Link to="#" className={style.hreff}>Men</Link>
                            <Link to="#" className={style.hreff}>Girls</Link>
                            <Link to="#" className={style.hreff}>Boys</Link>
                            <Link to="#" className={style.hreff}>Accessories</Link>
                            <Link to="#" className={style.hreff}>Sale</Link>
                        </div>
                        <div className={style.buttonContainer}>
                            <button className={style.buttons}>
                                <Icon icon="mdi:heart-outline" style={{ fontSize: '40px' }} />
                            </button>
                            <button className={style.buttons}>
                                <Icon icon="iconamoon:shopping-bag-light"  style={{ fontSize: '40px' }} />
                                
                            </button>
                            <button className={style.buttons}>
                                <Icon icon="ph:user" style={{ fontSize: '40px' }} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.lineWithShadow}></div>
        </>
    );
}
