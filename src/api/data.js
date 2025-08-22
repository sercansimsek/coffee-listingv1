const BASE_URL =
  'https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json';


  export const getData = async () => {
    const response = await fetch(BASE_URL);

    return response.json();
  }