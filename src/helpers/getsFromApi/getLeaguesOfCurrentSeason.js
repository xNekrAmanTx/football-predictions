import fetchFromApi from "../fetchFromApi";

export default async function getLeaguesOfCurrentSeason() {
    const countryNames = ['England', 'Italy', 'Spain', 'Germany', 'France'];
    const leagueNames = ['Premier League', 'Serie A', 'Primera Division', 'Bundesliga 1', 'Ligue 1'];
    const data = await fetchFromApi(`https://api-football-v1.p.rapidapi.com/v2/leagues/current/`)

    return Object.fromEntries(data.api.leagues.filter(league =>
        countryNames.includes(league.country) && leagueNames.includes(league.name)
    ).map(league => {
        const { coverage, ...resLeague } = league;
        return [league.league_id, resLeague]
    }))
}
