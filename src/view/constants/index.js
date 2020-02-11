import { CL, EL, PL, SA, LL, BL, L1 } from '../images/leaguePics'
// import * as flags from '../images/countryFlags'

export const paths = {
    home: '/',
    main: '/leagues',

    signup: '/signup',
    rules: '/rules'
};

export const leaguesList = {
    // CL: {
    //     name: 'Champions League',
    //     country: 'Europe',
    //     logo: CL,
    //     icon: 'CL_icon',
    //     flag: 'EUFlag.image',
    //     id: 0,//'fetch()'
    // },
    // EL: {
    //     name: 'Europa League',
    //     country: 'Europe',
    //     logo: EL,
    //     icon: 'EL_icon',
    //     flag: 'EUFlag.image',
    //     id: 1,//'fetch()'
    // },
    PL: {
        name: 'English PL',
        country: 'England',
        logo: PL,
        icon: 'PL_icon',
        // logo : "https:\/\/media.api-football.com\/leagues\/2.png",
        // flag : "https:\/\/media.api-football.com\/flags\/gb.svg",
        flag: 'EnglandFlag.image',
        id: 2,//'fetch()'
    },
    SA: {
        name: 'Serie A',
        country: 'Italy',
        logo: SA,
        icon: 'SA_icon',
        flag: 'ItalyFlag.image',
        id: 3,//'fetch()'
    },
    LL: {
        name: 'La Liga',
        country: 'Spain',
        logo: LL,
        icon: 'LL_icon',
        flag: 'SpainFlag.image',
        id: 4,//'fetch()'
    },
    BL: {
        name: 'BundesLiga',
        country: 'Germany',
        logo: BL,
        icon: 'BL_icon',
        flag: 'GermanyFlag.image',
        id: 5,//'fetch()'
    },
    L1: {
        name: 'Ligue 1',
        country: 'France',
        logo: L1,
        icon: 'L1_icon',
        flag: 'FranceFlag.image',
        id: 6,//'fetch()'
    },
};
