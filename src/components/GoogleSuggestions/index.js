// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

export default class GoogleSuggestions extends Component {
  state = {
    searchSuggestion: '',
  }

  onChangeInput = e => {
    this.setState({searchSuggestion: e.target.value})
  }

  updateSearchInput = suggestion => {
    this.setState({searchSuggestion: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchSuggestion} = this.state

    const filteredSuggestionList = suggestionsList.filter(eachItem =>
      eachItem.suggestion
        .toLowerCase()
        .includes(searchSuggestion.toLowerCase()),
    )
    return (
      <div className="container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            className="logo"
            alt="google logo"
          />
        </div>
        <div className="card-container">
          <div className="search-box">
            <div className="search-icon">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="icon"
              />
            </div>
            <div>
              <input
                type="search"
                placeholder="Search Google"
                className="search-input"
                value={searchSuggestion}
                onChange={this.onChangeInput}
              />
            </div>
          </div>
          <ul>
            {filteredSuggestionList.map(eachSuggestion => (
              <SuggestionItem
                key={eachSuggestion.id}
                searchInfo={eachSuggestion}
                updateSearchInput={this.updateSearchInput}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
