import React from 'react';

import {toggleLike, User} from '../store/slices/usersSlice'
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {RootState} from "../store";

import '../styles/components/_staff-item.scss'

interface UserCardProps {
    user: User;
}
const StaffItem: React.FC<UserCardProps> = ({user}) => {

    const dispatch = useDispatch();
    const likedPosts = useSelector((state: RootState) => state.users.likedPosts);

    const isLiked = likedPosts.includes(user.id);

    const handleLikeClick = () => {
        dispatch(toggleLike(user.id));
    };


    return (
        <div className='wrapper-item'>
            <Link  to={`/home/${user.id}`}>
            <div className='item'>
                <div className='item__img'>
                    <img  src={user.avatar} alt="avatar"/>
                </div>
                <h2 className='item__name'>{`${user.first_name} ${user.last_name}`}</h2>
            </div>
            </Link>
            <div className='button-item' onClick={handleLikeClick}>
                {isLiked ? (
                    <img className='button-item__like' src="/Like-full.svg" alt="like-full"/>
                ) : (
                    <img className='button-item__unlike'  src="/Like.svg" alt="like"/>
                )
                }
            </div>


        </div>
    );
};

export default StaffItem;