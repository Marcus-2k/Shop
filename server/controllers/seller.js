import UserModel from "../models/User.js";

export async function getByIdSeller(req, res) {
  console.log("Server getByIdSeller");

  try {
    const seller = await UserModel.findById(req.params.id, {
      avatar: 1,
      name: 1,
    });

    return res.status(200).json(seller);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
}
