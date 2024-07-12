import React from 'react';
import ExitButton from "../components/ExitButton";
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import {User} from "../store/slices/usersSlice";
import '../styles/pages/_staff-info.scss'
import BackButton from "../components/BackButton";


const StaffInfo: React.FC = () => {
    const [data, setData] = React.useState<User>()
    const {id} = useParams()

    React.useEffect(() => {
        async function fetchStaff() {
            try {
                const {data} = await axios.get('http://localhost:9001/users/' + id)
                setData(data)
            } catch (error) {
                alert('Ошибка при получении данных сотрудника')
            }
        }
        fetchStaff()
    }, [])

    if (!data) {
        return <div
            style={{display: "flex", justifyContent: "center", marginTop: "40px", fontSize: "40px"}}>Загрузка...</div>
    }
    return (
        <>
            <div className='header-staff'>
                <div className='header-big-back'>
                    <BackButton/>
                </div>
                 <div className='header-small-back'>
                     <Link to='/home'>
                     <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M22.8375 27.0013C22.6881 27.0018 22.5405 26.9688 22.4055 26.9048C22.2705 26.8407 22.1516 26.7473 22.0575 26.6313L17.2275 20.6313C17.0804 20.4523 17 20.2279 17 19.9963C17 19.7646 17.0804 19.5402 17.2275 19.3613L22.2275 13.3613C22.3972 13.157 22.6411 13.0286 22.9056 13.0042C23.17 12.9799 23.4333 13.0615 23.6375 13.2313C23.8417 13.401 23.9701 13.6449 23.9945 13.9093C24.0189 14.1738 23.9372 14.437 23.7675 14.6413L19.2975 20.0013L23.6175 25.3613C23.7398 25.508 23.8174 25.6868 23.8413 25.8763C23.8652 26.0659 23.8343 26.2583 23.7522 26.4308C23.6702 26.6034 23.5404 26.7488 23.3783 26.8499C23.2162 26.9509 23.0285 27.0035 22.8375 27.0013Z" fill="#F8F8F8"/>
                     </svg>
                     </Link>
                 </div>
                <div className='header-container'>
                    <div className='header-staff__staff-info'>
                        <div className='header-staff__staff-img'>
                            <img src={data.avatar} alt="staff"/>
                        </div>
                        <div className='header-staff__info'>
                            <div className='header-staff__name'>
                                <h2>{`${data.first_name}  ${data.last_name}`}</h2>
                            </div>
                            <span className='header-staff__logo'>{data.logo}</span>
                        </div>
                    </div>
                </div>
                <div className='header-big-exit'>
                    <ExitButton/>
                </div>
                <div className='header-small-exit'>
                    <Link to='/'>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.79 13.29C8.18 13.68 8.81 13.68 9.2 13.29L12.79 9.7C12.8827 9.60749 12.9563 9.4976 13.0064 9.37662C13.0566 9.25565 13.0824 9.12597 13.0824 8.995C13.0824 8.86403 13.0566 8.73435 13.0064 8.61338C12.9563 8.4924 12.8827 8.38251 12.79 8.29L9.2 4.7C9.01302 4.51302 8.75943 4.40798 8.495 4.40798C8.23057 4.40798 7.97698 4.51302 7.79 4.7C7.60302 4.88698 7.49798 5.14057 7.49798 5.405C7.49798 5.66943 7.60302 5.92302 7.79 6.11L9.67 8H1C0.45 8 0 8.45 0 9C0 9.55 0.45 10 1 10H9.67L7.79 11.88C7.4 12.27 7.41 12.91 7.79 13.29ZM16 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V5C0 5.55 0.45 6 1 6C1.55 6 2 5.55 2 5V3C2 2.45 2.45 2 3 2H15C15.55 2 16 2.45 16 3V15C16 15.55 15.55 16 15 16H3C2.45 16 2 15.55 2 15V13C2 12.45 1.55 12 1 12C0.45 12 0 12.45 0 13V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0Z" fill="#F8F8F8"/>
                        </svg>
                    </Link>
                </div>

            </div>
            <div className='desc-block'>
                <div className='desc-container'>
                <p>{data.desc}</p>
                <div className='desc-block__info'>
                    <div style={{display: "flex", alignItems: "center", marginBottom: "24px"}}>
                        <svg className='svg' width="24" height="24" viewBox="0 0 24 24" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10.554 6.24003L7.17099 2.33503C6.78099 1.88503 6.06599 1.88703 5.61299 2.34103L2.83099 5.12803C2.00299 5.95703 1.76599 7.18803 2.24499 8.17503C5.10661 14.1 9.88503 18.8851 15.806 21.755C16.792 22.234 18.022 21.997 18.85 21.168L21.658 18.355C22.113 17.9 22.114 17.181 21.66 16.791L17.74 13.426C17.33 13.074 16.693 13.12 16.282 13.532L14.918 14.898C14.8482 14.9712 14.7562 15.0195 14.6563 15.0354C14.5564 15.0513 14.4541 15.0339 14.365 14.986C12.1354 13.7021 10.286 11.8503 9.00499 9.61903C8.95702 9.52978 8.93964 9.42726 8.95554 9.32719C8.97144 9.22711 9.01972 9.13502 9.09299 9.06503L10.453 7.70403C10.865 7.29003 10.91 6.65003 10.554 6.23903V6.24003Z"
                                stroke="#512689" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>

                        <span className='desc-block__number'>{data.number}</span>
                    </div>
                    <div style={{display: "flex", alignItems: "center", marginBottom: "24px"}}>
                        <svg className='svg' width="24" height="24" viewBox="0 0 24 24" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M21 4.5H3C2.60218 4.5 2.22064 4.65804 1.93934 4.93934C1.65804 5.22064 1.5 5.60218 1.5 6V18C1.5 18.3978 1.65804 18.7794 1.93934 19.0607C2.22064 19.342 2.60218 19.5 3 19.5H21C21.3978 19.5 21.7794 19.342 22.0607 19.0607C22.342 18.7794 22.5 18.3978 22.5 18V6C22.5 5.60218 22.342 5.22064 22.0607 4.93934C21.7794 4.65804 21.3978 4.5 21 4.5ZM19.35 6L12 11.085L4.65 6H19.35ZM3 18V6.6825L11.5725 12.615C11.698 12.7021 11.8472 12.7488 12 12.7488C12.1528 12.7488 12.302 12.7021 12.4275 12.615L21 6.6825V18H3Z"
                                fill="#512689"/>
                        </svg>
                        <span className='desc-block__email'>{data.email}</span>
                    </div>
                </div>
                </div>
            </div>
        </>
    );
};

export default StaffInfo;