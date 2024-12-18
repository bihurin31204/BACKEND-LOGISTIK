const prisma = require("../config/prisma");
const { calculateShippingFee } = require("../utils/distanceCalculator");
const { getCityDistance } = require("../utils/cityDistanceCalculator");


const createItem = async (req, res) => {
  const { name, weight, senderCity, receiverCity, address, senderId, receiverId } = req.body;
  const userId = req.user.id;

  try {
    // Ambil jarak antar kota dari database
    const distance = await getCityDistance(senderCity, receiverCity);

    // Hitung ongkir
    const shippingFee = calculateShippingFee(distance, weight);

    // Simpan item baru dengan status default "Diproses"
    const item = await prisma.item.create({
      data: {
        name,
        weight,
        senderCity,
        receiverCity,
        address,
        senderId,
        receiverId,
        distance,
        shippingFee,
        status: "Diproses",
        userId,
      },
    });

    // Jadwalkan pembaruan status
    setTimeout(async () => {
      await prisma.item.update({
        where: { id: item.id },
        data: { status: "Sedang Dikirim" },
      });
    }, 30000); // 30 detik

    setTimeout(async () => {
      await prisma.item.update({
        where: { id: item.id },
        data: { status: "Selesai" },
      });
    }, 60000); // 60 detik

    res.status(201).json({
      message: "Item created successfully",
      item,
    });
  } catch (error) {
    console.error("Error creating item:", error);
    res.status(500).json({ error: "Unable to create item" });
  }
};


const getAllItems = async (req, res) => {
  try {
    const items = await prisma.item.findMany({ where: { userId: req.user.id } });
    res.json(items);
  } catch (error) {
    console.error("Error fetching items:", error);
    res.status(500).json({ error: "Unable to fetch items" });
  }
};

module.exports = { createItem, getAllItems };
