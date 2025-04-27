
//CREATE ROUTE
export const createUserService = (req, res)=>{
    try {
        let reqBody = req.body;

        return {status:"success", message:"User Created Successfully.", data:reqBody};
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Internal Server Error!'});
    }
}

//READ ROUTE
export const readUserService = (req, res)=>{
    try {
        let reqBody = req.body;
        console.log(reqBody);
        return {status:"success", message:"User Read Successfully.", data:reqBody};
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Internal Server Error!'});
    }
}

//Update Route
export const updateUserService = (req, res) =>{
    try {
        let reqBody = req.body;
        console.log("Updated Data is: ",reqBody);
        return {status:"success", message:"User Update Successfully.", data:reqBody};
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Internal Server Error!'});
    }
}

//Delete Route
export const deleteUserService = (req, res) =>{
    try {
        let reqBody = req.body;
        console.log(`Deleted ${reqBody} Information.`);
        return {status:"success", message:"User Delete Successfully.", data:reqBody};
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Internal Server Error!'});
    }
}

//Get All User
export const getAllUserService = (req, res) =>{
    try {
        let reqBody = req.body;
        return {status:"success", message:"All User Fetched Successfully.", data:reqBody};
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Internal Server Error!'});
    }
}

//Get User by ID
export const getUserByIdService = (req, res) =>{
    try {
        const {id} = req.params;
        console.log(`Searching user ID is: ${id}`);
      
        return {status:"success", message:"User Fetched By ID."}
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Internal Server Error!'});
    }
}

//User Login
export const userLoginService = (req, res) =>{
    try {
        const {username} = req.body;
        const user = {id: 1, username}
        console.log(`Login into ${username} 's Account`);
        return {status:"success", message:"User Login Successfull.", data:username}
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Internal Server Error!'});
    }
}

//User Logout
export const userLogoutService = (req, res) =>{
    try {
        const {username} = req.body;
        const user = {id: 1, username}
        console.log(`Logout from ${username} 's Account`);
        return {status:"success", message:"User Logout Successfull.", data:username}
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Internal Server Error!'});
    }
}

//Change Password
export const changePasswordService = (req, res) =>{
    try {
        const {username,password} = req.body;
        const user = {id: 1, username, password}
        console.log(`Password Changed  ${username} 's Account`);
        return {status:"success", message:"Password Changes  Successfull.", data:username}
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Internal Server Error!'});
    }
}

//Update User
export const userUpdateService = (req, res) =>{
    try {
        const {username,password} = req.body;
        const user = {id: 1, username, password}
        console.log(`User Information of ${username} 's Account Updated`);
        return {status:"success", message:"User Profile Updated Successfull.", data:username}
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Internal Server Error!'});
    }
}

