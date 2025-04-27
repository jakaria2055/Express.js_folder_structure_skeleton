

//Verification Email
export const verifyEmailService = (req, res) =>{
    try {
        let reqBody = req.body;
        console.log(reqBody);
        return {status:"success", message:"Email Verified Successfully.", data:reqBody};
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Internal Server Error!'});
    }
}

//Verification Email Resent
export const resendVerificationService = (req, res) =>{
    try {
        let reqBody = req.body;
        console.log(reqBody);
        return {status:"success", message:"Verification Email Resend Successfully.", data:reqBody};
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Internal Server Error!'});
    }
}