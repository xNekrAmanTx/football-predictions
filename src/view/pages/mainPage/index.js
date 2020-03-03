import React from 'react';
import { useParams } from 'react-router-dom';
import LeagueNavTab from './leagueNavTab';
import LeagueTablesContainer from '../../containers/leagueTablesContainer';

export default function MainPage(props) {
    let { id } = useParams();
    id = +id;

    const isValidId = ~props.leagues.findIndex(liga => liga.league_id === id);

    return (
        <section>
            <LeagueNavTab {...props} leagueId={id} />

            {isValidId ? <LeagueTablesContainer {...props} leagueId={id} /> : <h1 style={{ textAlign: 'center' }}>There is no such league id</h1>}

        </section>
    )
}
