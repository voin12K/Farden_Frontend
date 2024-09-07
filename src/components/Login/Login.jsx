import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Link, Navigate } from 'react-router-dom';
import { fetchAuth, fetchRegister, selectIsAuth } from '../redux/slices/auth';
import style from './Login.module.css';

export const Login = ({ isOpen, onClose }) => {
    const [activeTab, setActiveTab] = useState("login");
    const dispatch = useDispatch();
    const isAuth = useSelector(selectIsAuth);

    const { register, handleSubmit, setError, formState: { errors, isValid } } = useForm({
        defaultValues: {
            email: 'test@example.com',
            password: 'makspidoras',
        },
        mode: 'onChange',
    });

    const { register: registerSignup, handleSubmit: handleSubmitSignup, setError: setErrorSignup, formState: { errors: errorsSignup, isValid: isValidSignup } } = useForm({
        defaultValues: {
            name: 'test',
            email: 'test@gmail.com',
            password: '12345678',
        },
        mode: 'onChange',
    });

    const onSubmitLogin = async (values) => {
        try {
            // Выполняем запрос для аутентификации
            const data = await dispatch(fetchAuth(values));
            console.log('Response data:', data);
    
            // Проверяем наличие данных в payload
            if (!data.payload || !data.payload.token) {
                alert('Failed to log in');
                return;
            }
    
            // Сохраняем токен в localStorage или sessionStorage
            window.localStorage.setItem('token', data.payload.token);
    
            // Закрываем окно или выполняем другие действия после успешного логина
            onClose();
        } catch (error) {
            console.error('Error during login:', error);
            alert('An error occurred during login. Please try again.');
        }
    };
    

    const onSubmitSignup = async (values) => {
        try {
            const data = await dispatch(fetchRegister(values));
            console.log('Response data:', data);

            if (!data.payload) {
                alert('Failed to register');
                return;
            }

            if ('token' in data.payload) {
                window.localStorage.setItem('token', data.payload.token);
                onClose();
            } else {
                alert('No token provided');
            }
        } catch (error) {
            if (error.response && error.response.data && error.response.data.code === 11000) {
                setErrorSignup('email', {
                    type: 'manual',
                    message: 'Email already in use',
                });
            } else {
                console.error('Error during registration:', error);
                alert('An error occurred during registration. Please try again.');
            }
        }
    };

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const handleOverlayClick = (event) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    if (!isOpen) return null;

    if (isAuth) {
        return <Navigate to='/' />;
    }

    return (
        <div className={style.modalOverlay} onClick={handleOverlayClick}>
            <div className={style.modalContent} onClick={(e) => e.stopPropagation()}>
                <button className={style.closeButton} onClick={onClose}>×</button>
                <div className={style.tabs}>
                    <button
                        className={activeTab === "login" ? style.active : ""}
                        onClick={() => handleTabChange("login")}
                    >
                        Login
                    </button>
                    <button
                        className={activeTab === "register" ? style.active : ""}
                        onClick={() => handleTabChange("register")}
                    >
                        Signup
                    </button>
                </div>
                <div className={style.mesto}>
                    {activeTab === "login" && (
                        <form className={style.loginForm} onSubmit={handleSubmit(onSubmitLogin)}>
                            <label>Email:</label>
                            <input
                                type="email"
                                {...register('email', { required: 'Email is required' })}
                            />
                            {errors.email && <p>{errors.email.message}</p>}
                            <label>Password:</label>
                            <input
                                type="password"
                                {...register('password', { required: 'Password is required' })}
                            />
                            {errors.password && <p>{errors.password.message}</p>}
                            <Link to="#" className={style.fogot}>Forgot password?</Link>
                            <button type="submit" disabled={!isValid}>Login</button>
                        </form>
                    )}

                    {activeTab === "register" && (
                        <form className={style.registerForm} onSubmit={handleSubmitSignup(onSubmitSignup)}>
                            <label>Username:</label>
                            <input
                                type="text"
                                {...registerSignup('name', { required: 'Username is required' })}
                            />
                            {errorsSignup.name && <p>{errorsSignup.name.message}</p>}
                            <label>Email:</label>
                            <input
                                type="email"
                                {...registerSignup('email', { required: 'Email is required' })}
                            />
                            {errorsSignup.email && <p>{errorsSignup.email.message}</p>}
                            <label>Password:</label>
                            <input
                                type="password"
                                {...registerSignup('password', { required: 'Password is required' })}
                            />
                            {errorsSignup.password && <p>{errorsSignup.password.message}</p>}
                            <button type="submit" disabled={!isValidSignup}>Signup</button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};
