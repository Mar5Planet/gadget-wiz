import React, { Component } from "react";
import { apiResponse } from '../api';
import DogCard from '../Components/DogCard'
import Form from '../Components/form'
import Search from '../Components/Search'

class DogList extends Component {
  state = {
    api: apiResponse,
    filterApi: apiResponse,
    searchValue: ''
  }

  submitHandler = (obj) => {
    let newArray = [...this.state.api, obj]
    this.setState({api: newArray})

  }

  searchHandler = (e) => {
    this.setState({searchValue: e.target.value})
  }

  filteredDogs = () => {
    return this.state.filterApi.filter(dog => dog.name.toLowerCase().includes(this.state.searchValue.toLowerCase()))
  }

  renderDogs= () => {
    return this.filteredDogs().map(el => <DogCard key={el.id} dog={el} />)
  }


  render() {
    console.log(this.state.api)
    return <div className="list">
         <Form submitHandler={this.submitHandler}/>
         <Search searchValue={this.state.searchValue} searchHandler={this.searchHandler}/>
         {this.renderDogs()}
    </div>;
  }
}

export default DogList;
