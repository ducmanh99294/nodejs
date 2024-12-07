import userController from "../controllers/userController.mjs";
import express from "express";
const userRouter = express.Router();

function checklogin(req,res, next) {
    let token = req.headers.authorization;
  try {
    var decoded = jwt.verify(token, "ontap");
    next();
  } catch (err) {
    res.status(404).json({ message: "Ban can phai login de su dung!!!" });
  }
}


userRouter.get("/",checklogin, userController.getAllUsers);

export default userRouter