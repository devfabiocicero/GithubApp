
import React, { PropTypes } from 'react'
import style from './search.css'

const Search = ({ handleSearch, isDisabled }) => (
  <div className={style.search}>
    <input
      type='search'
      placeholder='Input the github username here'
      disabled={isDisabled}
      onKeyUp={handleSearch}
    />
  </div>
)

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired
}

export default Search
