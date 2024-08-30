import React, { useState } from 'react';
import style from './Navbar.module.css';
import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";
import { Login } from '../Login/Login';
export function Navbar() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

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
                            <button className={style.buttons} onClick={openModal}>
                                <Icon icon="ph:user" style={{ fontSize: '40px' }} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.lineWithShadow}></div>
            <Login isOpen={isModalOpen} onClose={closeModal} />
        </>
    );
}
