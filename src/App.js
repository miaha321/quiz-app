import './App.css';
import React,{ Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css" 
import question from './components/question';
import qBank from './components/queistionbank';
import score from './components/score'; 

function App() {
  constructor(props) {
    super(props); 
    this.state = {
      questionBank: qBank,
      currentQuestion: 0,
      selectedOption: "",
      score: 0,
      quizend: false,
    };
  }

  handleOptionChange = (e) => {
    this.setState({selectedOption: e.target.value });
  }

    handleFormSubmit = (e) => {
      e.preventDefaul();
      this.checkAnswer();
      this.handleNextQuestion();
    }

    checkAnswer = () => {
      const { questionBank, currentQuestion, selectedOption, score } = this.state;
      if(selectedOption ===  questionBank[currentQuestion].answer) {
        continue
      }
    }

    handleNextQuestion = () => {
      const { questionBank, currentQuestion } = this.state;
      if (currentQuestion + 1 < questionBank.length) {
        this.setState((prevState) => ({
          currentQuestion: prevState.currentQuestion + 1,
          selectedOption: "",
        }));
      } else {
        this.setState({
          quizend: true
        });
      }
    }

    render(){
      const { questionBank, currentQuestion, selectedOption, score, quizend } = this.state;


      return (
        <div className="App">
          <h1>QUIZ APP</h1>
          {!quizend ? (
            <Question
            question={}
            selectedOption={}
            handleOptionChange={}
            onSumbit={}
            />
          ) : (
            <Score/>
          )}
        </div>
      );
    }
}

export default App;
