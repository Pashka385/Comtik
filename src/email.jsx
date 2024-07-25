import { useState } from 'react';
import styles from './css/email.module.css';
import Title from './Title';
import emailjs from 'emailjs-com';

export default function Email() {
    const [formState, setFormState] = useState({
        FIO: '',
        EMAIL: '',
        INPUT: '',
        TEXT: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormState(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const templateParams = {
            from_name: formState.FIO,
            from_email: formState.EMAIL,
            phone_number: formState.INPUT,
            problem_description: formState.TEXT
        };

        console.log('Sending email with params:', templateParams); // Отладка

        emailjs.send(
            'service_gxqc2gl',        // Убедитесь, что это правильный ID вашего сервиса
            'template_j8dd2og',       // Убедитесь, что это правильный ID вашего шаблона
            templateParams,
            'RvcineNLKDdb_oXyF'       // Убедитесь, что это правильный ваш ключ
        )
        .then(response => {
            console.log('Email sent successfully:', response); // Отладка
        })
        .catch(error => {
            console.error('Error sending email:', error); // Отладка
        });

        setFormState({
            FIO: '',
            EMAIL: '',
            INPUT: '',
            TEXT: ''
        });
    };

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <Title>
                    <i className="fa-solid fa-envelope"></i>Связаться<i className="fa-solid fa-envelope"></i>
                </Title>
            </div>
            <div className={styles.box}>
                <form onSubmit={handleSubmit}>
                    <input
                        required
                        name="FIO"
                        value={formState.FIO}
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Ваше ФИО:"
                    />
                    <input
                        required
                        name="EMAIL"
                        value={formState.EMAIL}
                        onChange={handleInputChange}
                        type="email"
                        placeholder="Ваша электронная почта:"
                    />
                    <input
                        required
                        name="INPUT"
                        value={formState.INPUT}
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Номер телефона:"
                    />
                    <input
                        name="TEXT"
                        value={formState.TEXT}
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Опишите вашу проблему:"
                    />
                    <button type="submit">Отправить</button>
                </form>
            </div>
        </div>
    );
}
