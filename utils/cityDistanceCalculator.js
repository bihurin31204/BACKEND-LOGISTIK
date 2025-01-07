const prisma = require("../config/prisma");

const getCityDistance = async (origin, destination) => {
  // Coba cari jarak dari origin ke destination
  let cityDistance = await prisma.cityDistance.findFirst({
    where: { origin, destination },
  });

  // Jika tidak ditemukan, cari jarak dari destination ke origin
  if (!cityDistance) {
    cityDistance = await prisma.cityDistance.findFirst({
      where: { origin: destination, destination: origin },
    });
  }

  // Jika tetap tidak ditemukan, lempar error
  if (!cityDistance) {
    throw new Error(`Distance not found for ${origin} to ${destination}`);
  }

  return cityDistance.distance;
};

module.exports = { getCityDistance };
