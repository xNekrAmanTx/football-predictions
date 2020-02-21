import fetchFromApi from "../fetchFromApi";
import getRoundsCount from "../databaseSetsGets/getRoundsCount";

export default async leagueId => {

    const data = await fetchFromApi(`https://api-football-v1.p.rapidapi.com/v2/fixtures/league/${leagueId}?timezone=Asia/Yerevan`);

    const roundsCount = await getRoundsCount(leagueId);

    const leagueRounds = {};
    for (let i = 1; i <= roundsCount; i++) {
        const round = data.api.fixtures.filter(fix => +fix.round.match(/\d+/)[0] === i).map(fix => [fix.fixture_id, fix]);
        round[0] && (leagueRounds[i] = Object.fromEntries(round));
    }

    return leagueRounds;
}
