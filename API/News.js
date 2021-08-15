/** @format */

const API_TOKEN = "2474fba8daed4dbfa7136f82eb4d6491";

export function getNews() {
  fetch(
    "https://google-news1.p.rapidapi.com/top-headlines?country=US&lang=en&limit=50&media=true",
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": API_TOKEN,
        "x-rapidapi-host": "google-news1.p.rapidapi.com",
      },
    }
  )
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.error(err);
    });
}
