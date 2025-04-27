

//Make Admin
export const makeAdminService = (req, res) =>{
    try {
        const {id} = req.params;
        const {username} = req.body;
        const user = {id, username}

        console.log(`Set ${username} , ID: ${id} as an Admin.`);
        return {status:"success", message:"User made Admin Successfully.", data:username}
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Internal Server Error!'});
    }
}

//Remove Admin
export const removeAdminService = (req, res) =>{
    try {
        const {id} = req.params;
        const {username} = req.body;
        const user = {id, username}

        console.log(`Remove ${username} , ID: ${id} from Admin.`);
        return {status:"success", message:"Admin role remove Successfully.", data:username}
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Internal Server Error!'});
    }
}


//Search User
export const searchUserService = (req, res) =>{
    try {
        let reqBody = req.body;
        console.log(reqBody);
        return {status:"success", message:"User Search Completed Successfully.", data:reqBody};
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Internal Server Error!'});
    }
}

//Filter User
export const filterUserService = (req, res) =>{
    try {
        let reqBody = req.body;
        console.log(reqBody);
        return {status:"success", message:"User Filtered Completed Successfully.", data:reqBody};
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Internal Server Error!'});
    }
}

//Block User
export const blockUserService = (req, res) =>{
    try {
        const {id} = req.params;
        const {username} = req.body;
        const user = {id, username}

        console.log(`Blocked ${username} , ID: ${id} from user list.`);
        return {status:"success", message:"User Blocked Successfully.", data:username}
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Internal Server Error!'});
    }
}

//Unblock User
export const unblockUserService = (req, res) =>{
    try {
        const {id} = req.params;
        const {username} = req.body;
        const user = {id, username}

        console.log(`Unblocked ${username} , ID: ${id} from user list.`);
        return {status:"success", message:"User unblocked Successfully.", data:username}
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Internal Server Error!'});
    }
}

//Delete Account Service
export const deleteAccountService = (req, res) =>{
    try {
        let reqBody = req.body;
        console.log(reqBody);
        return {status:"success", message:"Account Deleted Successfully.", data:reqBody};
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Internal Server Error!'});
    }
}