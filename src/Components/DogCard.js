import React from "react";

class DogCard extends React.Component {
  state = {
    clicked: true
  }


  clickHandler = () => {
    this.setState((prevState) => ({ clicked: !prevState.clicked }))
  }

  render() {
    return (
      <div className="card">
        <span className="content">
          <h2 >{this.props.dog.name}</h2>
          <img alt="" src={this.props.dog.img} />
        </span>
        <span className="bark" onClick={this.clickHandler}>
          <button>Bark</button>
        </span>
        {this.state.clicked ? <h2>Bark</h2> : null}
      </div>
    );
  }
}

export default DogCard;
