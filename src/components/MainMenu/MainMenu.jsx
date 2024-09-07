import style from './MainMenu.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectIsAuth } from '../redux/slices/auth';

export function MainMenu(){
    const isAuth = useSelector(selectIsAuth)
    const dispatch = useDispatch();

    const onClickLogout = () =>{
        if (window.confirm('Are you sure you wont to logout')){
            dispatch(logout())
            window.localStorage.removeItem('token')
        }
    };
  
    return (
        <div className={style.body}>
            {isAuth ?(
                    <>
                    <label style={{
                        color: 'black'
                    }}>You logined</label>
                    <button onClick={onClickLogout} style={{backgroundColor: 'rgb(202, 47, 47)'}} className={style.mainbutt}>Log Out</button>
                    </>
                ):(
                    <>
                    <label style={{
                        color: 'black'
                    }}>You not logined</label>
                     </>
                )}
        </div>
    );
  }