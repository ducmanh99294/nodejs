import reservationController from "../controllers/reservationController.mjs";
import express from "express";

const reservationRouter = express.Router();

reservationRouter.get("/", reservationController.getAllreservation);
reservationRouter.post("/", reservationController.getAllreservation);
reservationRouter.delete("/:id", reservationController.getAllreservation);

export default reservationRouter