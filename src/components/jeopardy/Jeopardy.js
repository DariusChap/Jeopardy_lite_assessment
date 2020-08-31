import React, { Component } from 'react';
//import our service
import JeopardyService from "../jeopardyService";
class Jeopardy extends Component {
  //set our initial state and set up our service as this.client on this component
  constructor(props){
    super(props);
    this.client = new JeopardyService();
    this.state = {
      data: {},
      score: 0,
    }
  }

  handleAnswerChange = (event) => {
    if(this.state.data.answer === true) {
      return (this.state.score + this.state.data.value)
    }else {
      return (this.state.score - this.state.data.value)
    }
  }

  //get a new random question from the API and add it to the data object in state
  getNewQuestion() {
    return this.client.getQuestion().then(result => {
      this.setState({
        data: result.data[0]
      })
    })
  }
  //when the component mounts, get a the first question
  componentDidMount() {
    this.getNewQuestion();
  }
  //display the results on the screen
  render() {
      if(this.state.data.category === undefined) {
          return (
              <div>
                  <h1>Loading...</h1>
              </div>
          )
        }
        
    
    return (
      <div>
        <strong>Answer: </strong> <form onSubmit={this.clickHandler}>
            <input type='text' value={this.state.answer} onChange={this.handleAnswerChange} placeholder='Your Answer' /> <br/>
            <p></p><button onClick={this.handleAnswerChange}>Submit Answer</button><p/><br/>
            
            </form> <br/>
        
        <strong>User Score: </strong> {(this.state.score)} <br/>

        <strong>Category: </strong> {(this.state.data.category.title)} <br/>

        <strong>Question: </strong> {(this.state.data.question)} <br/>

        <strong>Point Value: </strong> {(this.state.data.value)} <br/>
      </div>
      
    );
  }
}
export default Jeopardy;