import faker from "https://cdnjs.cloudflare.com/ajax/libs/Faker/3.1.0/faker.min.js";

 export const generatePutMovies = () => ({
  title: `PUT ${faker.lorem.words(4)}`,
  description: `PUT ${faker.lorem.paragraph()}`,
  launchdate: faker.date.past(3).toISOString(), // Formato ISO 8601 para data
  showtimes: [
      faker.date.between('2025-01-01', '2025-03-10'),
      faker.date.between('2025-01-01', '2025-03-10'),
      faker.date.between('2025-01-01', '2025-03-10')
  ],
 })
  