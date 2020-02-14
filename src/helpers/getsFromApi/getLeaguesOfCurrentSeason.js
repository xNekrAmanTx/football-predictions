import fetchFromApi from "../fetchFromApi";

export default async function getLeaguesOfCurrentSeason() {
    let countryNames = ['England', 'Italy', 'Spain', 'Germany', 'France'];
    let leagueNames = ['Premier League', 'Serie A', 'Primera Division', 'Bundesliga 1', 'Ligue 1'];
    let data = await fetchFromApi(`https://api-football-v1.p.rapidapi.com/v2/leagues/current/`)

    return Object.fromEntries(data.api.leagues.filter(league =>
        countryNames.includes(league.country) && leagueNames.includes(league.name)
    ).map(league => {
        let { coverage, ...resLeague } = league;
        return [league.league_id, resLeague]
    }))
}
