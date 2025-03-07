import faker from "https://cdnjs.cloudflare.com/ajax/libs/Faker/3.1.0/faker.min.js";

 export const generateMovies = () => {
    const movies = [];
    for (let i = 0; i < 1; i++) {
      movies.push({
        title: faker.lorem.words(4),
        description: faker.lorem.paragraph(),
        launchdate: faker.date.past(3).toISOString(), // Formato ISO 8601 para data
        showtimes: [
            faker.date.between('2025-01-01', '2025-03-10'),
            faker.date.between('2025-01-01', '2025-03-10'),
            faker.date.between('2025-01-01', '2025-03-10')
        ],
      });
    }
    return { movies };
  };