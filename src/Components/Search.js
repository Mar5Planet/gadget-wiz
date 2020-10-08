import React from 'react'

class Search extends React.Component {
    render() {
    return (
    <form>
        <h1> Search</h1>
        <input value={this.props.searchValue} placeholder="search for dog" onChange= {this.props.searchHandler} />
    </form>
)
    }
}

export default Search