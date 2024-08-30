import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';
import { fetchAuth, selectIsAuth } from '../redux/slices/auth';  // замените на ваш путь
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

    const onSubmit = async (values) => {
        try {
            const data = await dispatch(fetchAuth(values));
            console.log('Response data:', data);

            if (!data.payload) {
                alert('Failed to log in');
                return;
            }

            if ('token' in data.payload) {
                window.localStorage.setItem('token', data.payload.token);
                onClose();  // Закрываем модальное окно после успешной авторизации
            }
        } catch (error) {
            console.error('Error during login:', error);
            alert('An error occurred during login. Please try again.');
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
                        <form className={style.loginForm} onSubmit={handleSubmit(onSubmit)}>
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
                            <button type="submit" disabled={!isValid}>Login</button>
                        </form>
                    )}

                    {activeTab === "register" && (
                        <form className={style.registerForm}>
                            <label>Username:</label>
                            <input type="text" />
                            <label>Email:</label>
                            <input type="email" />
                            <label>Password:</label>
                            <input type="password" />
                            <button type="submit">Signup</button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};
