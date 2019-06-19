import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      adjective: "",
      noun: "",
      adverb: "",
      verb: "",
      adjective2: "",
      noun2: ""
    };
  }
  
  onInputChange = (event) => {
    console.log(event.target.name)
    const updatedState = {};

    const field = event.target.name;
    const value = event.target.value;

    updatedState[field] = value;
    this.setState(updatedState);
  }

  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{  }</h3>

        <form className="PlayerSubmissionForm__form" >

          <div className="PlayerSubmissionForm__poem-inputs">
            
            The
            <label>
              <input
              placeholder="Adjective"
              type="text" 
              value={this.state.adjective}
              onChange={this.onInputChange}
              name="adjective"/>
            </label>
            <label>
              <input
              placeholder="Noun"
              type="text" 
              value={this.state.noun}
              onChange={this.onInputChange}
              name="noun"/>
            </label>
            <label>
              <input
              placeholder="Adverb"
              type="text" 
              value={this.state.adverb}
              onChange={this.onInputChange}
              name="adverb"/>
            </label>
            <label>
              <input
              placeholder="Verb"
              type="text" 
              value={this.state.verb}
              onChange={this.onInputChange}
              name="verb"/>
            </label>
            the
            <label>
              <input
              placeholder="Adjective 2"
              type="text" 
              value={this.state.adjective2}
              onChange={this.onInputChange}
              name="adjective2"/>
            </label>
            <label>
              <input
              placeholder="Noun 2"
              type="text" 
              value={this.state.noun2}
              onChange={this.onInputChange}
              name="noun2"/>
            </label>
            .
          </div>

          <div className="PlayerSubmissionForm__submit">
            <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
          </div>
        </form>
      </div>
    );
  }
}

export default PlayerSubmissionForm;
