import faker from "https://cdnjs.cloudflare.com/ajax/libs/Faker/3.1.0/faker.min.js";

const getMovies = async () => (await fetch('http://localhost:3000/movies')).json().movies;

const generateTickets = async () => {
  const movies = await getMovies();
  const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H','I','J'];
  const usedSeats = new Set();

  return Array.from({ length: 150 }, () => {
    const movie = faker.random.arrayElement(movies);
    let seat;
    do {
      seat = `${faker.random.arrayElement(rows)}${faker.random.number({ min: 1, max: 10 })}`;
    } while (usedSeats.has(seat));
    usedSeats.add(seat);

    return {
      movieId: movie.id,
      sessionId: faker.random.number({ min: 1, max: 150 }),
      seat,
      price: faker.random.number({ min: 1, max: 60 }),
      status: "AVAILABLE"
    };
  });
};
