import fetchFromApi from "../fetchFromApi";

export default async leagueId => {

    const data = await fetchFromApi(`https://api-football-v1.p.rapidapi.com/v2/fixtures/league/${leagueId}?timezone="Asia/Yerevan"`);

    // console.log(data)

    const leagueRounds = {};
    for (let i = 1; i <= /* getRoundsAvailableForLeague(leaguId) */ 38; i++) {
        const round = data.api.fixtures.filter(fix => +fix.round.match(/\d+/)[0] === i).map(fix => [fix.fixture_id, fix]);
        round[0] && (leagueRounds[i] = Object.fromEntries(round));
    }

    return leagueRounds;
}
