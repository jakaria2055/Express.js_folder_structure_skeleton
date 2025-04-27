

import express from "express";
import * as UserController from "../controller/UserController.js";
const router = express.Router();

//USer Route
router.post("/create-user",  UserController.createUserController);
router.get("/read-user", UserController.readUserController);
router.put("/update-user", UserController.updateUserController);
router.delete("/delete-user", UserController.deleteUserControll);
router.get("/all-users", UserController.getAllUserControl);
router.get("/user/:id", UserController.getUserByIdControll);
router.post("/login", UserController.userLoginControll);
router.post("/logout", UserController.userLogoutControll);
router.put("/change-password", UserController.changePasswordControll);
router.put("/update-profile", UserController.userUpdateControll);
router.put("/make-admin/:id", UserController.makeAdminControll);
router.put("/remove-admin/:id", UserController.removeAdminControll);
router.get("/search", UserController.searchUserControll);
router.get("/filter", UserController.filterUserControll);
router.patch("/block-user/:id", UserController.blockUserControll);
router.patch("/unblock-user/:id", UserController.unblockUserControll);
router.post("/verify-email", UserController.verifyEmailControll);
router.post("/verification-resend", UserController.resendVerificationControll);
router.post("/upload-profile-picture", UserController.uploadProfilePicture);
router.delete("/delete-account", UserController.deleteAccountControll);


export default router;
