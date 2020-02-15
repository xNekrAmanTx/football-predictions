import React from 'react';
import { useParams } from 'react-router-dom';
import LeagueNavTab from './leagueNavTab';
import LeagueTablesContainer from '../../containers/leagueTablesContainer';


export default function MainPage(props) {
    const { id } = useParams();

    const isValidId = Object.keys(props.leagues).includes(id);

    return (
        <section>
            <LeagueNavTab {...props} />

            {isValidId ? <LeagueTablesContainer {...props} leagueId = {id} /> : <h1 style={{ textAlign: 'center' }}>There is no such league id</h1>}

        </section>
    )
}
