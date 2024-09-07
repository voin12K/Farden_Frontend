import style from './Addcloth.module.css';

export function Addcloth(){
    return(
        <div className={style.wrapper}>
            <div>
                <div className={style.pad}>
                    <div className={style.otstup}>
                        <div className={style.miniphoto}></div>
                        <div className={style.miniphoto}></div>
                        <div className={style.miniphoto}></div>
                        <div className={style.miniphoto}></div>
                    </div>
                    <div className={style.photo}></div>
                    <div className={style.linia}>
                        <div className={style.megdu}>
                            <div>
                                <label>Product name: </label>
                                <input type="text" />
                            </div>
                            <div>
                                <label>Price: </label>
                                <input type="text" />
                            </div>
                            <div>
                                <label>Discount: </label>
                                <input type="text" />
                            </div>
                            <div>
                                <label>Price wit discount: </label>
                                <input type="text" />
                            </div>
                            <div>
                                <label>Color: </label>
                                <input className={style.color} type="color" />
                            </div>
                            <div>
                                <label>Size: </label>
                                <input type="checkbox" />
                            </div>
                            <div>
                                <label>Quantity in stock: </label>
                                <input type="number" />
                            </div>
                        </div>
                        <div>
                            <label>Material and care</label>
                            <div className={style.dale}> 
                                <input type="text" />
                            </div>
                        </div>
                        <div>
                            <label>Details about the product</label>
                            <div className={style.dale}> 
                                <input type="text" />
                            </div>
                        </div>
                        <div>
                            <label>Description</label>
                            <div className={style.dale}> 
                                <input type="text" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}