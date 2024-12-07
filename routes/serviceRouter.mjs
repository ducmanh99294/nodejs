import servicesController from "../controllers/servicesController.mjs";
import express from "express";

const serviceRouter = express.Router();

serviceRouter.get("/", servicesController.getAllUsers);

export default serviceRouter