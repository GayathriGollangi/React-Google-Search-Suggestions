// Write your code here
import './index.css'
import {Component} from 'react'

class SuggestionItem extends Component {
  onClickUpdatedSearchInput = () => {
    const {searchInfo, updateSearchInput} = this.props
    const {suggestion} = searchInfo
    updateSearchInput(suggestion)
  }

  render() {
    const {searchInfo} = this.props
    const {suggestion} = searchInfo
    return (
      <li className="item-container" onClick={this.onClickUpdatedSearchInput}>
        <p className="text">{suggestion}</p>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
            alt="arrow"
            className="arrow"
          />
        </div>
      </li>
    )
  }
}

export default SuggestionItem
