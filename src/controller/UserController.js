import { blockUserService, deleteAccountService, filterUserService, makeAdminService, removeAdminService, searchUserService, unblockUserService } from "../service/AdminService.js";
import { resendVerificationService, verifyEmailService } from "../service/EmailService.js";
import { propicUploadService } from "../service/fileservice.js";
import {changePasswordService, createUserService, deleteUserService, getAllUserService, getUserByIdService, readUserService, updateUserService, userLoginService, userLogoutService, userUpdateService } from "../service/UserService.js"


//Create User
export const createUserController = async (req, res) =>{
    let result = createUserService(req, res);
    return res.status(200).json(result);
}

//Read User
export const readUserController = async (req, res) =>{
    let result = readUserService(req, res);
    return res.status(200).json(result);
}

//Update User
export const updateUserController = async (req, res) =>{
    let result = updateUserService(req, res);
    return res.status(200).json(result);
}

//Delete User
export const deleteUserControll = async (req, res) =>{
    let result = deleteUserService(req, res);
    return res.status(200).json(result);
}

//Gett All User
export const getAllUserControl = async (req, res) =>{
    let result = getAllUserService(req, res);
    return res.status(200).json(result);
}

//Get User By ID
export const getUserByIdControll = async (req, res) =>{
    let result = getUserByIdService(req, res);
    return res.status(200).json(result);
}

//Login User
export const userLoginControll = async (req, res) =>{
    let result = userLoginService(req, res);
    return res.status(200).json(result);
}

//Logout User
export const userLogoutControll = async (req, res) =>{
    let result = userLogoutService(req, res);
    return res.status(200).json(result);
}

//Change Password
export const changePasswordControll = async (req, res) =>{
    let result = changePasswordService(req, res);
    return res.status(200).json(result);
}

//User Profile Update
export const userUpdateControll = async (req, res) =>{
    let result = userUpdateService(req, res);
    return res.status(200).json(result);
}

//Make Admin
export const makeAdminControll = async (req, res) =>{
    let result = makeAdminService(req, res);
    return res.status(200).json(result);
}

//Remove Admin
export const removeAdminControll = async (req, res) =>{
    let result = removeAdminService(req, res);
    return res.status(200).json(result);
}

//Search USer
export const searchUserControll = async(req, res) =>{
    let result = searchUserService(req, res);

    return res.status(200).json(result);
}

//Filter User
export const filterUserControll = async(req, res) =>{
    let result = filterUserService(req, res);

    return res.status(200).json(result);
}

//Block User
export const blockUserControll = async (req, res) =>{
    let result = blockUserService(req, res);

    return res.status(200).json(result);
}

//UNBlock User
export const unblockUserControll = async (req, res) =>{
    let result = unblockUserService(req, res);

    return res.status(200).json(result);
}

//Verify Email
export const verifyEmailControll = async (req, res) =>{
    let result = verifyEmailService(req, res);

    return res.status(200).json(result);
}

//Resend Verify Email
export const resendVerificationControll = async (req, res) =>{
    let result = resendVerificationService(req, res);

    return res.status(200).json(result);
}

//Upload Profile Picture
export const uploadProfilePicture = async (req, res) =>{
    let result = propicUploadService(req, res);

    return res.status(200).json(result);
}

//Delete Account
export const deleteAccountControll = async (req, res) =>{
    let result = deleteAccountService(req, res);
    return res.status(200).json(result);
}



