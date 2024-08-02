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

titles.forEach(async (title) => {
  const movies = await getMovies(title);
  console.log(title, movies);
});

// 대안 1 for of
const start = async () => {
  for (const title of titles) {
    const movies = await getMovies(title);
    console.log(movies);
  }
};
start();

// 대안 2 Promise all
const start2 = async () => {
  // 각 제목에 대해 getMovies 함수를 호출하여 Promise 배열을 생성합니다.
  const movies = await Promise.all(titles.map(getMovies));

  movies.map((data) => {
    console.log(data);
  });
};

start2();
