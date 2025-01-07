const { getCityDistance } = require("../utils/cityDistanceCalculator");
const { calculateShippingFee } = require("../utils/distanceCalculator");

const checkShippingFee = async (req, res) => {
  const { name, weight, senderCity, receiverCity } = req.body;

  try {
    // Validasi inputt
    if (!name || !weight || !senderCity || !receiverCity) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Ambil jarak antar kota dari database
    const distance = await getCityDistance(senderCity, receiverCity);

    // Hitung ongkir
    const shippingFee = calculateShippingFee(distance, weight);

    res.status(200).json({
      name,
      weight,
      senderCity,
      receiverCity,
      shippingFee,
    });
  } catch (error) {
    console.error("Error checking shipping fee:", error);
    res.status(500).json({ error: "Unable to calculate shipping fee" });
  }
};

module.exports = { checkShippingFee };
