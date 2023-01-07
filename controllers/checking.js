module.exports.checkingStatusServer = async function (req, res) {
  console.log("Server checkingStatusServer");

  try {
    return res.status(200).json({ message: "Server work" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};
