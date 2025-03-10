import faker from "https://cdnjs.cloudflare.com/ajax/libs/Faker/3.1.0/faker.min.js";

export const generateTickets = () => ({
  movieId: faker.random.uuid(),  // Gera um UUID
  userId: faker.random.uuid(),
  seatNumber: faker.random.number({ min: 1, max: 60 }), // Gera um número inteiro entre 1 e 60
  price: faker.finance.amount(0, 60, 2), // Gera um valor float com 2 casas decimais
  showtime: faker.date.future({ years: 0, days: 60 }),
});

