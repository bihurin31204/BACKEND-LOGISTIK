const prisma = require("../config/prisma");
const { calculateShippingFee } = require("../utils/distanceCalculator");

const createItem = async (userId, data) => {
  const { name, weight, distance, address } = data;
  const shippingFee = calculateShippingFee(distance);

  return await prisma.item.create({
    data: { name, weight, distance, shippingFee, address, userId },
  });
};

const getAllItems = async (userId) => {
  return await prisma.item.findMany({ where: { userId } });
};

module.exports = { createItem, getAllItems };
