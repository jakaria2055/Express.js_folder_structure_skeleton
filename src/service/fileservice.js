

//Profile Picture Upload
export const propicUploadService = (req, res) =>{
    try {
        let reqBody = req.body;
        console.log(reqBody);
        return {status:"success", message:"Profile Picture Uploaded Successfully.", data:reqBody};
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Internal Server Error!'});
    }
}