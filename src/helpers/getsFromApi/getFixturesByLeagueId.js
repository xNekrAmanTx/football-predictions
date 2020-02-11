import fetchFromApi from "../fetchFromApi";

export default async (leagueId) => {
    
    let data = await fetchFromApi(`https://api-football-v1.p.rapidapi.com/v2/fixtures/league/${leagueId}?timezone=Asia%252FYerevan`)

    function formatLeagueFixtures(data) {
        let leagueRounds = {};
        for (let i = 1; i <= /* getRoundsAvailableForLeague(leaguId) */ 38; i++) {
            let round = Object.fromEntries(data.api.fixtures.filter(fix => +fix.round.match(/\d+/)[0] === i).map(fix => [fix.fixture_id, fix]));
            leagueRounds[i] = round;
        }
        return leagueRounds;
    }
    
    return formatLeagueFixtures(data)
}
