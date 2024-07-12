import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

 export interface User {
    id: number;
    first_name: string;
    last_name: string;
    avatar: string;
    logo:string;
    desc: string;
    number: string;
    email: string;
}

export interface UsersState {
    users: User[];
    likedPosts: number[]
    status:  'loading' | 'succeeded' | 'error';

}

const initialState: UsersState = {
    users: [],
    likedPosts: JSON.parse(localStorage.getItem('likedPosts')) || [],
    status: 'loading',

};

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const {data} = await axios.get(`http://localhost:9001/users`);
    return data;
});

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        toggleLike: (state, action: PayloadAction<number>) => {
            const postId = action.payload;
            const index = state.likedPosts.indexOf(postId);

            if (index > -1) {
                state.likedPosts.splice(index, 1);
            } else {
                state.likedPosts.push(postId);
            }

            localStorage.setItem('likedPosts', JSON.stringify(state.likedPosts));
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.status = 'succeeded';
              state.users = action.payload
            })
            .addCase(fetchUsers.rejected, (state) => {
                state.status = 'error';
            });
    },
});

export const { toggleLike } = usersSlice.actions;

export default usersSlice.reducer;

