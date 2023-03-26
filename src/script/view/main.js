import '../../components/ClubList.js'
import '../../components/SearchBar.js'
import DataSource from '../data/data-source.js'

const main = () => {
  const searchElement = document.querySelector('search-bar')
  const clubListElement = document.querySelector('club-list')

  const onButtonSearchClicked = async () => {
    try {
      const results = await DataSource.searchClub(searchElement.value)
      renderResult(results)
    } catch (error) {
      fallbackResult(error)
    }
  }

  const renderResult = (results) => {
    clubListElement.clubs = results
  }

  const fallbackResult = (message) => {
    clubListElement.renderError(message)
  }

  searchElement.clickEvent = onButtonSearchClicked
}

export default main
