import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';

export default function App() {

 
  const useStyles = makeStyles((theme) => ({
  app: {
    backgroundColor: "#fffff",
    width: "450px",
    minHeight: "200px",
    height: "minContent",
    borderRadius: "15px",
    padding: "20px",
    boxShadow: "10px 10px 42px 0px rgba(0, 0, 0, 0.75)",
    display: "flex",
    justifyContent: "spaceEvenly",
  },
  
  scoreSection: {
    display: "flex",
    fontSize: "24px",
    alignItems: "center",
  },
  
  /* QUESTION/TIMER/LEFT SECTION */
  questionSection :{
    width: "100%",
    position: "relative",
  },
  
  questionCount: {
    marginBottom: "20px",
  },
  
  questionCount:{
    fontSize: "28px",
  },
  
  questionText :{
    marginBottom: "12px",
  },
  
  timerText: {
    background: "rgb(230, 153, 12)",
    padding: "15px",
    marginTop: "20px",
    marginRight: "20px",
    border: "5px solid rgb(255, 189, 67)",
    borderRadius: "15px",
    textAlign: "center"
  },
  
  /* ANSWERS/RIGHT SECTION */
  answerSection :{
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "spaceBetween"
  },
  
  button :{
    width: "100%",
    fontSize: "16px",
    color: "#ffffff",
    backgroundColor: "#252d4a",
    borderRadius: "15px",
    display: "flex",
    padding: "5px",
    justifyContent: "flex-start",
    alignItems: "center",
    border: "5px solid #234668",
    cursor: "pointer"
    },
  
  correct: {
    backgroundColor: "#2f922f",
  },
  
}));

  const questions = [
    {
      questionText: 'What is the capital of France?',
      answerOptions: [
        { answerText: 'New York', isCorrect: false },
        { answerText: 'London', isCorrect: false },
        { answerText: 'Paris', isCorrect: true },
        { answerText: 'Dublin', isCorrect: false },
      ],
    },
    {
      questionText: 'Who is CEO of Tesla?',
      answerOptions: [
        { answerText: 'Jeff Bezos', isCorrect: false },
        { answerText: 'Elon Musk', isCorrect: true },
        { answerText: 'Bill Gates', isCorrect: false },
        { answerText: 'Tony Stark', isCorrect: false },
      ],
    },
    {
      questionText: 'The iPhone was created by which company?',
      answerOptions: [
        { answerText: 'Apple', isCorrect: true },
        { answerText: 'Intel', isCorrect: false },
        { answerText: 'Amazon', isCorrect: false },
        { answerText: 'Microsoft', isCorrect: false },
      ],
    },
    {
      questionText: 'How many Harry Potter books are there?',
      answerOptions: [
        { answerText: '1', isCorrect: false },
        { answerText: '4', isCorrect: false },
        { answerText: '6', isCorrect: false },
        { answerText: '7', isCorrect: true },
      ],
    },
  ];
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  const classes = useStyles();

  return (
    <div className={classes.app}>
      {showScore ? (
        <div className={classes.scoreSection}>
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className={classes.questionSection}>
            <div className={classes.questionCount}>
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className={classes.questionText}>{questions[currentQuestion].questionText}</div>
          </div>
          <div className='answer-section'>
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}