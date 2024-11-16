import Booking from "../models/booking.mjs";
class BookingController {
  static async index(req, res) {
    let q = req.query.q;
    const re = new RegExp(q);
    let booking;
    if (q) {
      booking = await Booking.find({ $or: [{ customName: re }] });
    } else {
      booking = await Booking.find({});
    }

    // console.log(users);
    res.render("booking", { title: "Booking management", booking, q });
  }
  static async new(req, res) {
    res.render("bookingnew", { title: "Booking management" });
  }

  static async create(req, res) {
    // console.log(req.body);
    let {customName, date, time, role} = req.body;
    let booking = await Booking.create({ customName, date, time, role});
    console.log(user);
    if (booking) {
      res.redirect("/bookings");
    } else {
      res.render("bookingnew", { title: "Booking management" });
    }
  }

  static async delete(req, res) {
    // console.log(req.params.id);
    let id = req.params.id;
    let { deletedCount } = await Booking.deleteOne({ _id: id });
    if (deletedCount == 0) {
      console.log("Khong xoa duoc !!");
    } else {
      console.log("Da xoa duoc !!");
    }
    res.redirect("/booking");
  }
  static async edit(req, res) {
   let id = req.params.id;
   let booking = await Booking.findById(id)
   res.render("bookingedit", { title: "Booking management", booking})
}

static async update(req, res) {
  try {
      let id = req.params.id;
      const { name, email, age} = req.body;

      // Cập nhật người dùng
      await User.findByIdAndUpdate(id, { name, email, age });
      res.redirect("/users"); // Điều hướng về danh sách người dùng
  } catch (error) {
      console.error(error);
      res.status(500).send("Error updating user");
  }
}
}
export default BookingController;