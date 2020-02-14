import fetchFromApi from "../fetchFromApi";

export default async leagueId => {

    let data = await fetchFromApi(`https://api-football-v1.p.rapidapi.com/v2/fixtures/rounds/${leagueId}/current`);

    return +data.api.fixtures[0].match(/\d+/g);
}


