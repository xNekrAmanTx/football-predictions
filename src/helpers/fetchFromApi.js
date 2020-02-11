export default (api) => fetch(api, {
        method: 'Get',
        headers: {
            "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
            "x-rapidapi-key": "ce76c43b3fmshca7492106c4a5cfp1556a2jsndae07ed10938"
        },
    }).then(res => res.json())