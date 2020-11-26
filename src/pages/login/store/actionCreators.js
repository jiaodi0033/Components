import axios from '../../../utils/request';

import * as actionTypes from './actionTypes';

export const loginAc = data =>{
    return dispatch =>{
        return axios.post('/api/login',data);
    }
};
export const syncStateInfoAc = data =>{
    return {
        type:actionTypes.SYNC_STATE_INFO,
        payload:data
    };
}