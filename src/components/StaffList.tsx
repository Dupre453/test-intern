import React from 'react';
import StaffItem from "./StaffItem";
import {fetchUsers} from "../store/slices/usersSlice";
import {useSelector} from "react-redux";
import Skeleton from "./Skeleton";
import {RootState, useAppDispatch} from "../store";

import '../styles/components/_staff-list.scss'


 const StaffList = () => {
    const dispatch = useAppDispatch();
    const { users, status} = useSelector((state: RootState) => state.users);


    React.useEffect(() => {

        dispatch(fetchUsers());
    }, [dispatch]);


    const skeletons = [...new Array(16)].map((_, index) => <Skeleton key={index}/>)

    return (
        <>
            {status === 'error' ? (
                <div className='error-staff'>
                    <h2>Произошла ошибка</h2>
                    <p>К сожалению, не удалось получить пользователей. Повторите попытку позже!</p>
                </div>
            ) : (
                <div className='container-staff'>
                <div className='wrapper-staff'>
                    {users.map((user) => (
                        status === 'loading' ? skeletons : <StaffItem key={user.id} user={user} />
                    ))}
                </div>
                </div>
            )}
        </>
    );
};

export default StaffList;