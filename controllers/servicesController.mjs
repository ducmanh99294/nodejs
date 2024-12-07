import Services from "../models/services.mjs";

class servicesController {
  static async getAllUsers(req, res) {
    try {
      const service = await Services.find();
      res.status(200).json(service);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

}
export default servicesController