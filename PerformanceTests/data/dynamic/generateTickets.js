import faker from "https://cdnjs.cloudflare.com/ajax/libs/Faker/3.1.0/faker.min.js";

export const generateTickets = () => ({
  movieId: faker.random.uuid(),  // Gera um UUID
  userId: faker.random.uuid(),
  seatNumber: faker.random.number({ min: 1, max: 60 }), 
  price: parseFloat(faker.finance.amount(0, 60, 2)), // Converte para número
  showtime: faker.date.between('2025-01-01', '2025-03-10')
});
