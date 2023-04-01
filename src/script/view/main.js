import '../../components/ClubList.js';
import '../../components/SearchBar.js';

const BASE_URL = 'https://sports-api.dicoding.dev';

const main = () => {
  const searchElement = document.querySelector('search-bar');
  const clubListElement = document.querySelector('club-list');

  const onButtonSearchClicked = async () => {
    try {
      const responseRaw = await fetch(
        `${BASE_URL}/teams/search?t=${searchElement.value}`
      );
      const results = await responseRaw.json();
      const teams = results.teams.map((team) => {
        const t = {
          id: team.idTeam,
          name: team.strTeam,
          fanArt: team.strTeamBadge,
          description: team.strDescriptionEN
        };

        return t;
      });
      renderResult(teams);
    } catch (error) {
      fallbackResult(error);
    }
  };

  const renderResult = (results) => {
    clubListElement.clubs = results;
  };

  const fallbackResult = (message) => {
    clubListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
