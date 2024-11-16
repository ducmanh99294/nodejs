import express from "express"
import BookingController from "../controllers/booking_controller.mjs"
const bookingRouter = express.Router();
bookingRouter.get("/", BookingController.index);
bookingRouter.get("/new", BookingController.new);
bookingRouter.get("/create", BookingController.create);
bookingRouter.delete("/delete/:id", BookingController.delete);
bookingRouter.get("/edit", BookingController.edit);
bookingRouter.post("/edit/:id", BookingController.update);
export default bookingRouter