import React, { Component } from 'react';

class Form extends Component {
    state = {
        name: '',
        img: '',
        breed: '',
    }

    handleChange = (e) => {
        // if (e.target.name === "name") {
        //     this.setState({
        //         name: e.target.value
        //     })
        // }
        // else if (e.target.name === "img") {
        //     this.setState({
        //         img: e.target.value
        //     })
        //  }
        // else if (e.target.name === "breed"){
        //     this.setState({
        //         breed: e.target.value
        //     })
        //  }

        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        return (
            <form onSubmit={(e) => {
                this.props.submitHandler({name: this.state.name, img: this.state.img, breed: this.state.breed})
                e.preventDefault()
                this.setState({name:"", img:"", breed:""})
                }}>
                    <h1>Create Form</h1>
                <div>
                    <label>Name</label>
                    <input type='text' name='name' value={this.state.name} onChange={this.handleChange}/>
                    <label>Image URL</label>
                    <input type='text' name='img' value={this.state.img} onChange={this.handleChange}/>
                    <label>Breed</label>
                    <input type='text' name='breed' value={this.state.breed} onChange={this.handleChange}/>
                    <input type='submit' />
                </div>
            </form>
        )
    }
}

export default Form 