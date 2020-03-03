import fetchFromApi from "../fetchFromApi";

export default async leagueId => {

    let data = await fetchFromApi(`https://api-football-v1.p.rapidapi.com/v2/leagueTable/${leagueId}`);

    console.log(data);

    return data.api.standings[0];
}