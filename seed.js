const prisma = require("./config/prisma");

async function main() {
  const distances = [
    // Jakarta
    { origin: "Jakarta", destination: "Bandung", distance: 150 },
    { origin: "Jakarta", destination: "Surabaya", distance: 800 },
    { origin: "Jakarta", destination: "Semarang", distance: 450 },
    { origin: "Jakarta", destination: "Yogyakarta", distance: 500 },
    { origin: "Jakarta", destination: "Malang", distance: 850 },
    { origin: "Jakarta", destination: "Medan", distance: 1400 },
    { origin: "Jakarta", destination: "Denpasar", distance: 1200 },
    { origin: "Jakarta", destination: "Makassar", distance: 1600 },
    { origin: "Jakarta", destination: "Balikpapan", distance: 1300 },
    { origin: "Jakarta", destination: "Jakarta", distance: 0 },

    // Bandung
    { origin: "Bandung", destination: "Jakarta", distance: 150 },
    { origin: "Bandung", destination: "Surabaya", distance: 950 },
    { origin: "Bandung", destination: "Semarang", distance: 450 },
    { origin: "Bandung", destination: "Yogyakarta", distance: 500 },
    { origin: "Bandung", destination: "Malang", distance: 900 },
    { origin: "Bandung", destination: "Medan", distance: 1550 },
    { origin: "Bandung", destination: "Denpasar", distance: 1350 },
    { origin: "Bandung", destination: "Makassar", distance: 1750 },
    { origin: "Bandung", destination: "Balikpapan", distance: 1450 },
    { origin: "Bandung", destination: "Bandung", distance: 0 },

    // Surabaya
    { origin: "Surabaya", destination: "Jakarta", distance: 800 },
    { origin: "Surabaya", destination: "Bandung", distance: 950 },
    { origin: "Surabaya", destination: "Semarang", distance: 350 },
    { origin: "Surabaya", destination: "Yogyakarta", distance: 330 },
    { origin: "Surabaya", destination: "Malang", distance: 90 },
    { origin: "Surabaya", destination: "Medan", distance: 1850 },
    { origin: "Surabaya", destination: "Denpasar", distance: 400 },
    { origin: "Surabaya", destination: "Makassar", distance: 1500 },
    { origin: "Surabaya", destination: "Balikpapan", distance: 1200 },
    { origin: "Surabaya", destination: "Surabaya", distance: 0 },

    // Semarang
    { origin: "Semarang", destination: "Jakarta", distance: 450 },
    { origin: "Semarang", destination: "Bandung", distance: 450 },
    { origin: "Semarang", destination: "Surabaya", distance: 350 },
    { origin: "Semarang", destination: "Yogyakarta", distance: 120 },
    { origin: "Semarang", destination: "Malang", distance: 440 },
    { origin: "Semarang", destination: "Medan", distance: 1650 },
    { origin: "Semarang", destination: "Denpasar", distance: 700 },
    { origin: "Semarang", destination: "Makassar", distance: 1500 },
    { origin: "Semarang", destination: "Balikpapan", distance: 1100 },
    { origin: "Semarang", destination: "Semarang", distance: 0 },

    // Yogyakarta
    { origin: "Yogyakarta", destination: "Jakarta", distance: 500 },
    { origin: "Yogyakarta", destination: "Bandung", distance: 500 },
    { origin: "Yogyakarta", destination: "Surabaya", distance: 330 },
    { origin: "Yogyakarta", destination: "Semarang", distance: 120 },
    { origin: "Yogyakarta", destination: "Malang", distance: 360 },
    { origin: "Yogyakarta", destination: "Medan", distance: 1700 },
    { origin: "Yogyakarta", destination: "Denpasar", distance: 750 },
    { origin: "Yogyakarta", destination: "Makassar", distance: 1550 },
    { origin: "Yogyakarta", destination: "Balikpapan", distance: 1150 },
    { origin: "Yogyakarta", destination: "Yogyakarta", distance: 0 },

    // Malang
    { origin: "Malang", destination: "Jakarta", distance: 850 },
    { origin: "Malang", destination: "Bandung", distance: 900 },
    { origin: "Malang", destination: "Surabaya", distance: 90 },
    { origin: "Malang", destination: "Semarang", distance: 440 },
    { origin: "Malang", destination: "Yogyakarta", distance: 360 },
    { origin: "Malang", destination: "Medan", distance: 1900 },
    { origin: "Malang", destination: "Denpasar", distance: 400 },
    { origin: "Malang", destination: "Makassar", distance: 1600 },
    { origin: "Malang", destination: "Balikpapan", distance: 1300 },
    { origin: "Malang", destination: "Malang", distance: 0 },

    // Medan
    { origin: "Medan", destination: "Jakarta", distance: 1400 },
    { origin: "Medan", destination: "Bandung", distance: 1550 },
    { origin: "Medan", destination: "Surabaya", distance: 1850 },
    { origin: "Medan", destination: "Semarang", distance: 1650 },
    { origin: "Medan", destination: "Yogyakarta", distance: 1700 },
    { origin: "Medan", destination: "Malang", distance: 1900 },
    { origin: "Medan", destination: "Denpasar", distance: 2000 },
    { origin: "Medan", destination: "Makassar", distance: 2400 },
    { origin: "Medan", destination: "Balikpapan", distance: 2200 },
    { origin: "Medan", destination: "Medan", distance: 0 },

    // Denpasar
    { origin: "Denpasar", destination: "Jakarta", distance: 1200 },
    { origin: "Denpasar", destination: "Bandung", distance: 1350 },
    { origin: "Denpasar", destination: "Surabaya", distance: 400 },
    { origin: "Denpasar", destination: "Semarang", distance: 700 },
    { origin: "Denpasar", destination: "Yogyakarta", distance: 750 },
    { origin: "Denpasar", destination: "Malang", distance: 400 },
    { origin: "Denpasar", destination: "Medan", distance: 2000 },
    { origin: "Denpasar", destination: "Makassar", distance: 800 },
    { origin: "Denpasar", destination: "Balikpapan", distance: 1000 },
    { origin: "Denpasar", destination: "Denpasar", distance: 0 },

    // Makassar
    { origin: "Makassar", destination: "Jakarta", distance: 1600 },
    { origin: "Makassar", destination: "Bandung", distance: 1750 },
    { origin: "Makassar", destination: "Surabaya", distance: 1500 },
    { origin: "Makassar", destination: "Semarang", distance: 1500 },
    { origin: "Makassar", destination: "Yogyakarta", distance: 1550 },
    { origin: "Makassar", destination: "Malang", distance: 1600 },
    { origin: "Makassar", destination: "Medan", distance: 2400 },
    { origin: "Makassar", destination: "Denpasar", distance: 800 },
    { origin: "Makassar", destination: "Balikpapan", distance: 900 },
    { origin: "Makassar", destination: "Makassar", distance: 0 },

    // Balikpapan
    { origin: "Balikpapan", destination: "Jakarta", distance: 1300 },
    { origin: "Balikpapan", destination: "Bandung", distance: 1450 },
    { origin: "Balikpapan", destination: "Surabaya", distance: 1200 },
    { origin: "Balikpapan", destination: "Semarang", distance: 1100 },
    { origin: "Balikpapan", destination: "Yogyakarta", distance: 1150 },
    { origin: "Balikpapan", destination: "Malang", distance: 1300 },
    { origin: "Balikpapan", destination: "Medan", distance: 2200 },
    { origin: "Balikpapan", destination: "Denpasar", distance: 1000 },
    { origin: "Balikpapan", destination: "Makassar", distance: 900 },
    { origin: "Balikpapan", destination: "Balikpapan", distance: 0 },
  ];

  for (const distance of distances) {
    await prisma.cityDistance.create({
      data: distance,
    });
  }

  console.log("Seed data inserted successfully!");
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
