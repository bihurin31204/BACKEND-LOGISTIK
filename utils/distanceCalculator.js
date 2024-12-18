const calculateShippingFee = (distance, weight) => {
  const distanceRate = 1000; // Rp per kilometer
  const weightRate = 5000;  // Rp per kilogram
  return distance * distanceRate + weight * weightRate;
};

module.exports = { calculateShippingFee };
