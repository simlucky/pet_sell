import request from '../utils/request.js';

export const postLogin = async data => {
    const params = {
        url: '/users/login',
        method: 'post',
        data,
    }
    const result = await request(params);
    return result;
};

export const postRegister = async data => {
    const params = {
        url: '/users/register',
        method: 'post',
        data,
    }
    const result = await request(params);
    return result;
};