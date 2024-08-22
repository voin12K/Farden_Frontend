import style from './Search.module.css';

export function Search(){
    return(
        <div className={style.wrapper}>
            <div className={style.mesto}>
                <input className={style.pole} placeholder='Search...'/>
            </div>
        </div>
    );
}