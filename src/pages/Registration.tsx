import React, {useState} from 'react';
import {useNavigate} from "react-router";
import '../styles/pages/_registration.scss'

interface UserInput {
    name: string;
    email: string;
    password: string;
    passwordConfirmation: string;
}

interface ErrorState {
    name?: string;
    email?: string;
    password?: string;
    passwordConfirmation?: string;
}

const Registration:React.FC = () => {


    const [userInput, setUserInput] = useState<UserInput>({
        name: '',
        email: '',
        password: '',
        passwordConfirmation: '',
    });

    const [isLoading, setIsLoading] = React.useState(false);
    const [errors, setErrors] = useState<ErrorState>({});
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserInput({ ...userInput, [name]: value });
    };

    const validateInput = () => {
        const newErrors: ErrorState = {};

        if (!userInput.name) {
            newErrors.name = 'Поле "Имя" не может быть пустым';
        }

        if (!userInput.email) {
            newErrors.email = 'Поле "Email" не может быть пустым';
        } else if (!/\S+@\S+\.\S+/.test(userInput.email)) {
            newErrors.email = 'Некорректный формат email';
        }

        if (!userInput.password) {
            newErrors.password = 'Поле "Пароль" не может быть пустым';
        }else if (userInput.password.length < 4) {
            newErrors.password = 'Пароль должен содержать не менее 4 символов';
        }

        if (!userInput.passwordConfirmation) {
            newErrors.passwordConfirmation = 'Поле "Подтверждение пароля" не может быть пустым';
        } else if (userInput.passwordConfirmation !== userInput.password) {
            newErrors.passwordConfirmation = 'Пароли не совпадают';
        }else if (userInput.passwordConfirmation.length < 4) {
            newErrors.passwordConfirmation = 'Пароль должен содержать не менее 4 символов';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async () => {
        if (validateInput()) {
            setIsLoading(true);
            // Имитация загрузки
            await new Promise((resolve) => setTimeout(resolve, 2000));
            setIsLoading(false);
            navigate('/home')
        }
    };

    const handlePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className='wrapper'>
            <div className='registration'>
                <h2 className='registration__logo'>Регистрация</h2>
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="registration__form-group">
                        <label htmlFor="name">Имя:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder='Артур'
                            value={userInput.name}
                            onChange={handleInputChange}
                            className={errors.name ? 'error' : ''}
                        />
                        {errors.name && <p className="error-message">{errors.name}</p>}
                    </div>
                    <div className="registration__form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder='example@mail.ru'
                            value={userInput.email}
                            onChange={handleInputChange}
                            className={errors.email ? 'error' : ''}
                        />
                        {errors.email && <p className="error-message">{errors.email}</p>}
                    </div>
                    <div className="registration__form-group">
                        <label htmlFor="password">Пароль:</label>
                        <div style={{position: "relative"}}>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                name="password"
                                placeholder='******'
                                value={userInput.password}
                                onChange={handleInputChange}
                                className={errors.password ? 'error' : ''}
                            />
                            <span style={{display: "flex", justifyContent: "flex-end", alignItems: "center"}}
                                  className="password-visibility" onClick={handlePasswordVisibility}>
            {showPassword ?
                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M22 12C22 12 18.3636 19 12 19C5.63636 19 2 12 2 12C2 12 5.63636 5 12 5C14.8779 5 17.198 6.43162 18.8762 8M9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9"
                        stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                : <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M20 14.8335C21.3082 13.3317 22 12 22 12C22 12 18.3636 5 12 5C11.6588 5 11.3254 5.02013 11 5.05822C10.6578 5.09828 10.3244 5.15822 10 5.23552M12 9C12.3506 9 12.6872 9.06015 13 9.17071C13.8524 9.47199 14.528 10.1476 14.8293 11C14.9398 11.3128 15 11.6494 15 12M3 3L21 21M12 15C11.6494 15 11.3128 14.9398 11 14.8293C10.1476 14.528 9.47198 13.8524 9.1707 13C9.11386 12.8392 9.07034 12.6721 9.04147 12.5M4.14701 9C3.83877 9.34451 3.56234 9.68241 3.31864 10C2.45286 11.1282 2 12 2 12C2 12 5.63636 19 12 19C12.3412 19 12.6746 18.9799 13 18.9418"
                        stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            }
          </span>
                        </div>
                        {errors.password && <p className="error-message">{errors.password}</p>}
                    </div>
                    <div className="registration__form-group">
                        <label htmlFor="passwordConfirmation">Подтверждение пароля:</label>
                        <div style={{position: "relative"}}>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="passwordConfirmation"
                                name="passwordConfirmation"
                                placeholder='******'
                                value={userInput.passwordConfirmation}
                                onChange={handleInputChange}
                                className={errors.passwordConfirmation ? 'error' : ''}
                            />
                            <span className="password-visibility" onClick={handlePasswordVisibility}>
            {showPassword ?
                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M22 12C22 12 18.3636 19 12 19C5.63636 19 2 12 2 12C2 12 5.63636 5 12 5C14.8779 5 17.198 6.43162 18.8762 8M9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9"
                        stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                : <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M20 14.8335C21.3082 13.3317 22 12 22 12C22 12 18.3636 5 12 5C11.6588 5 11.3254 5.02013 11 5.05822C10.6578 5.09828 10.3244 5.15822 10 5.23552M12 9C12.3506 9 12.6872 9.06015 13 9.17071C13.8524 9.47199 14.528 10.1476 14.8293 11C14.9398 11.3128 15 11.6494 15 12M3 3L21 21M12 15C11.6494 15 11.3128 14.9398 11 14.8293C10.1476 14.528 9.47198 13.8524 9.1707 13C9.11386 12.8392 9.07034 12.6721 9.04147 12.5M4.14701 9C3.83877 9.34451 3.56234 9.68241 3.31864 10C2.45286 11.1282 2 12 2 12C2 12 5.63636 19 12 19C12.3412 19 12.6746 18.9799 13 18.9418"
                        stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            }
          </span>
                        </div>
                        {errors.passwordConfirmation && (
                            <p className="error-message">{errors.passwordConfirmation}</p>
                        )}
                    </div>
                    <div className='registration__button'>
                        <button type="submit" onClick={handleSubmit} disabled={isLoading}>
                            {isLoading ? 'Загрузка...👾' : 'Зарегистрироваться'}
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Registration;