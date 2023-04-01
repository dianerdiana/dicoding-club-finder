import clubs from './clubs.js';

class DataSource {
  static searchClub(keyword) {
    return fetch(`https://sports-api.dicoding.dev/teams/search?t=${keyword}`)
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.teams) {
          const teams = responseJson.teams.map((team) => {
            const t = {
              id: team.idTeam,
              name: team.strTeam,
              fanArt: team.strTeamBadge,
              description: team.strDescriptionEN
            };

            return t;
          });
          return Promise.resolve(teams);
        } else {
          return Promise.reject(`${keyword} is not found`);
        }
      });
  }
}

export default DataSource;
