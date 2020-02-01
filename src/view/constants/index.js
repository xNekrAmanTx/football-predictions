import { CL, EL, PL, SA, LL, BL, L1 } from '../images/leaguePics'
// import * as flags from '../images/countryFlags'

export const paths = {
    home: '/',
    main: '/leagues',
    signup: '/signup',
    rules: '/rules'
};

export const leaguesList = {
    CL: {
        name: 'Champions League',
        country: 'Europe',
        logo: CL,
        flag: 'EUFlag.image',
        id: 0,//'fetch()'

    },
    EL: {
        name: 'Europa League',
        country: 'Europe',
        logo: EL,
        flag: 'EUFlag.image',
        id: 1,//'fetch()'

    },
    PL: {
        name: 'English Premier League',
        country: 'England',
        logo: PL,
        flag: 'EnglandFlag.image',
        id: 2,//'fetch()'

    },
    SA: {
        name: 'Serie A',
        country: 'Italy',
        logo: SA,
        flag: 'ItalyFlag.image',
        id: 3,//'fetch()'

    },
    LL: {
        name: 'La Liga',
        country: 'Spain',
        logo: LL,
        flag: 'SpainFlag.image',
        id: 4,//'fetch()'

    },
    BL: {
        name: 'BundesLiga',
        country: 'Germany',
        logo: BL,
        flag: 'GermanyFlag.image',
        id: 5,//'fetch()'

    },
    L1: {
        name: 'Ligue 1',
        country: 'France',
        logo: L1,
        flag: 'FranceFlag.image',
        id: 6,//'fetch()'

    },
}
