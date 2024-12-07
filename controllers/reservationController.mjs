import reservations from "../models/reservations.mjs";

class reservationController {
  static async getAllreservation(req, res) {
    try {
      const reservation = await reservations.find();
      res.status(200).json(reservation);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async deleteReservation(req, res) {
    let id = req.params.id;
    try {
      let deletedReservation = await reservations.findByIdAndDelete(id)
      res.status(200).json({ message: "Reservation deleted successfully"})}
      catch (error) {
          res.status(500).json({ message: error.message });
      }
  }

  static async showReservation(req, res) {
    let id = req.params.id;
    try {
      let reservation = await reservations.findById(id)
      res.status(200).json(reservation)
    } catch (error) {
      res.status(500).json({ message: error.message})
    }
}

}
export default reservationController;