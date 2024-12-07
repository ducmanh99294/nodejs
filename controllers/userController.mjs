import User from "../models/user.mjs";

class userController {
  static async getAllUsers(req, res) {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async login(req, res) {
    let { email, password } = req.body;
    let user = await User.findOne({ email });
    if (user) {
      let checkpass = user.password == password;
      if (checkpass) {
        let payload = { name: user.name, email: user.email };
        var token = jwt.sign(payload, "demoDA");
        res
          .status(200)
          .json({ message: "Login thanh cong!!!", acessToken: token });
      } else {
        res.status(404).json({ message: "Login khong thanh cong!!!" });
      }
    } else {
      res.status(404).json({ message: "Login khong thanh cong!!!" });
    }
  }
}
export default userController