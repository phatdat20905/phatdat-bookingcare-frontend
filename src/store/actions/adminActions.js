import actionTypes from './actionTypes';
import { getAllCodeService, createNewUserService,
    getAllUsers, deleteUserService, editUserService,
    getTopDoctorHomeService,
    getAllDoctors, saveDetailDoctorService
 } from '../../services/userService';
import { toast } from 'react-toastify';

export const fetchGenderStart = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({type: actionTypes.FETCH_GENDER_START});
            let res = await getAllCodeService("GENDER");
            if(res && res.errCode === 0){
                dispatch(fetchGenderSuccess(res.data));
            } else {
                dispatch(fetchGenderFailed());
            }
        } catch (e) {
            dispatch(fetchGenderFailed());
            console.log("fetchGenderStart error",e);
        }
    }
};

export const fetchGenderSuccess = (genderData) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data: genderData
});

export const fetchGenderFailed = () => ({
    type: actionTypes.FETCH_GENDER_FAILDED,
});

export const fetchPositionStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService("POSITION");
            if(res && res.errCode === 0){
                dispatch(fetchPositionSuccess(res.data));
            } else {
                dispatch(fetchPositionFailed());
            }
        } catch (e) {
            dispatch(fetchPositionFailed());
            console.log("fetchPositionFailed error",e);
        }
    }
};


export const fetchPositionSuccess = (genderData) => ({
    type: actionTypes.FETCH_POSITION_SUCCESS,
    data: genderData
});

export const fetchPositionFailed = () => ({
    type: actionTypes.FETCH_POSITIONFAILDED,
});

export const fetchRoleStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService("ROLE");
            if(res && res.errCode === 0){
                dispatch(fetchRoleSuccess(res.data));
            } else {
                dispatch(fetchRoleFailed());
            }
        } catch (e) {
            dispatch(fetchRoleFailed());
            console.log("fetchRoleFailed error",e);
        }
    }
};

export const fetchRoleSuccess = (genderData) => ({
    type: actionTypes.FETCH_ROLE_SUCCESS,
    data: genderData
});

export const fetchRoleFailed = () => ({
    type: actionTypes.FETCH_ROLE_FAILDED,
});

export const createNewUser = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await createNewUserService(data);
            if(res && res.errCode === 0){
                toast.success("Create a new user successfully");
                dispatch(saveUserSuccess());
                dispatch(fetchAllUsersStart());
            } else {
                dispatch(saveUserFailed());
            }
        } catch (e) {
            dispatch(saveUserFailed());
            console.log("saveUserFailed error",e);
        }
    }
};

export const saveUserSuccess = () => ({
    type: actionTypes.CREATE_USER_SUCCESS,
});

export const saveUserFailed = () => ({
    type: actionTypes.CREATE_USER_FAILDED,
});

export const fetchAllUsersStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllUsers("ALL");
            if(res && res.errCode === 0){
                dispatch(fetchAllUsersSuccess(res.users.reverse()));
            } else {
                toast.error("Fetch all users error!")
                dispatch(fetchAllUsersFailed());
            }
        } catch (e) {
            toast.error("Fetch all users error!")
            dispatch(fetchAllUsersFailed());
            console.log("fetchAllUsersStart error",e);
        }
    }
}

export const fetchAllUsersSuccess = (data) => ({
    type: actionTypes.FETCH_ALL_USERS_SUCCESS,
    users: data
});

export const fetchAllUsersFailed = () => ({
    type: actionTypes.FETCH_ALL_USERS_FAILDED,
});

export const deleteAUser = (userId) => {
    return async (dispatch, getState) => {
        try {
            let res = await deleteUserService(userId);
            if(res && res.errCode === 0){
                toast.success("Delete user successfully");
                dispatch(deleteUserSuccess());
                dispatch(fetchAllUsersStart());
            } else {
                toast.error("Delete user error!")
                dispatch(deleteUserFailed());
            }
        } catch (e) {
            toast.error("Delete user error!")
            dispatch(deleteUserFailed());
            console.log("deleteUserStart error",e);
        }
    }
}

export const deleteUserSuccess = () => ({
    type: actionTypes.DELETE_USER_SUCCESS,
});

export const deleteUserFailed = () => ({
    type: actionTypes.DELETE_USER_FAILDED,
});

export const editAUser = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await editUserService(data);
            if(res && res.errCode === 0){
                toast.success("Update user successfully");
                dispatch(editUserSuccess());
                dispatch(fetchAllUsersStart());
            } else {
                toast.error("Update user error!")
                dispatch(editUserFailed());
            }
        } catch (e) {
            toast.error("Update user error!")
            dispatch(editUserFailed());
            console.log("editUserFailed error",e);
        }
    }
}

export const editUserSuccess = () => ({
    type: actionTypes.EDIT_USER_SUCCESS,
});

export const editUserFailed = () => ({
    type: actionTypes.EDIT_USER_FAILDED,
});

export const fetchTopDoctor = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getTopDoctorHomeService('');
            if(res && res.errCode === 0){
                dispatch({
                    type: actionTypes.FETCH_TOP_DOCTORS_SUCCESS,
                    dataDoctors: res.data
                })
            } else {
                toast.error("Fetch Infor Detail Doctor error!")
                dispatch({
                    type: actionTypes.FETCH_TOP_DOCTORS_FAILDED
                })
            }
        } catch (e) {
            toast.error("Fetch Infor Detail Doctor error!")
            console.log('FETCH_TOP_DOCTORS_FAILDED: ', e);
            dispatch({
                type: actionTypes.FETCH_TOP_DOCTORS_FAILDED
            })
        }
    }
}


export const fetchALlDoctors = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllDoctors();
            if(res && res.errCode === 0){
                dispatch({
                    type: actionTypes.FETCH_ALL_DOCTORS_SUCCESS,
                    dataDr: res.data
                })
            } else {
                toast.error("Save Infor Detail Doctor error!")
                dispatch({
                    type: actionTypes.FETCH_ALL_DOCTORS_FAILDED
                })
            }
        } catch (e) {
            toast.error("Save Infor Detail Doctor error!")
            console.log('FETCH_ALL_DOCTORS_FAILDED: ', e);
            dispatch({
                type: actionTypes.FETCH_ALL_DOCTORS_FAILDED
            })
        }
    }
}

export const saveDetailDoctor = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await saveDetailDoctorService(data);
            if(res && res.errCode === 0){
                toast.success("Save Infor Detail Doctor success!")
                dispatch({
                    type: actionTypes.SAVE_DETAIL_DOCTOR_SUCCESS,
                })
            } else {
                dispatch({
                    type: actionTypes.SAVE_DETAIL_DOCTOR_FAILDED
                })
            }
        } catch (e) {
            console.log('SAVE_DETAIL_DOCTOR_FAILDED: ', e);
            dispatch({
                type: actionTypes.SAVE_DETAIL_DOCTOR_FAILDED
            })
        }
    }
}

export const fetchAllScheduleTime = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService('TIME');
            if(res && res.errCode === 0){
                dispatch({
                    type: actionTypes.FETCH_ALLCODE_SCHEDULE_TIME_SUCCESS,
                    dataTime: res.data
                })
            } else {
                dispatch({
                    type: actionTypes.FETCH_ALLCODE_SCHEDULE_TIME_FAILDED
                })
            }
        } catch (e) {
            console.log('FETCH_ALLCODE_SCHEDULE_TIME_FAILDED: ', e);
            dispatch({
                type: actionTypes.FETCH_ALLCODE_SCHEDULE_TIME_FAILDED
            })
        }
    }
}

export const getAllRequiredDoctorInfor = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: actionTypes.FETCH_REQUIRED_DOCTOR_INFOR_START})
            
            let resPrice = await getAllCodeService("PRICE");
            let resPayment = await getAllCodeService("PAYMENT");
            let resProvince = await getAllCodeService("PROVINCE");

            if(resPrice && resPrice.errCode === 0 
                && resPayment && resPayment.errCode === 0 
                && resProvince && resProvince.errCode === 0) {
                    let data = {
                        resPrice: resPrice.data,
                        resPayment: resPayment.data,
                        resProvince: resProvince.data
                    }
                    dispatch(fetchRequiredDoctorInforSuccess(data));
                } else{
                    dispatch(fetchRequiredDoctorInforFailed());
                }
        } catch (e) {
            console.log('fetchRequiredDoctorInforFailed: ', e);
            dispatch(fetchRequiredDoctorInforFailed());
        }
    }
}

export const fetchRequiredDoctorInforSuccess = (allRequiredData) => ({
    type: actionTypes.FETCH_REQUIRED_DOCTOR_INFOR_SUCCESS,
    data: allRequiredData
});

export const fetchRequiredDoctorInforFailed = () => ({
    type: actionTypes.FETCH_REQUIRED_DOCTOR_INFOR_FAILED
});