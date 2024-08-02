const getMovies = (movieName) => {
  return new Promise((resolve) => {
    fetch(`https://www.omdbapi.com/?apikey=7035c60c&s=${movieName}`)
      .then((res) => res.json())
      .then((res) => resolve(res));
  });
};

const titles = ["frozen", "avengers", "avatar"];

// forEach는 배열의 순서대로 출력되지않음
// Promise를 기다리지 않는다 (mdn출처).

// titles.forEach(async (title) => {
//   const movies = await getMovies(title);
//   console.log(title, movies);
// });

// 대안 1 for of
// const start = async () => {
//   for (const title of titles) {
//     const movies = await getMovies(title);
//     console.log(title, movies);
//   }
// };
// start();

// 대안 2 Promise all
const start2 = async () => {
  // const moviePromises = ;
  const movies = await Promise.all(titles.map(getMovies)).then(
    (data) => data.Search
  );
  console.log(movies);
};
start2();
