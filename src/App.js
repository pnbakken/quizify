import logo from './logo.svg';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import './components/scss-root/_app.scss';

function App() {
  const questions = [
    {
      text: 'What does an apple have?',
      answers: ['good sense of humour', 'deep sense of regret', 'feet', 'mesmerizing blue eyes'],
      correctAnswerIndex: 2,
    },
    {
      text: 'How does a question go?',
      answers: ['fast', '"aaaooooo"', 'ravage me, you filthy beast', 'definitely'],
      correctAnswerIndex: 2,
    },
    {
      text: 'What does an apple have?',
      answers: ['good sense of humour', 'deep sense of regret', 'feet', 'mesmerizing blue eyes'],
      correctAnswerIndex: 2,
    },
    {
      text: 'How does a question go?',
      answers: ['fast', '"aaaooooo"', 'ravage me, you filthy beast', 'definitely'],
      correctAnswerIndex: 3,
    },
    {
      text: 'What does an apple have?',
      answers: ['good sense of humour', 'deep sense of regret', 'feet', 'mesmerizing blue eyes'],
      correctAnswerIndex: 2,
    },
    {
      text: 'How does a question go?',
      answers: ['fast', '"aaaooooo"', 'ravage me, you filthy beast', 'definitely'],
      correctAnswerIndex: 3,
    },
    {
      text: 'What does an apple have?',
      answers: ['good sense of humour', 'deep sense of regret', 'feet', 'mesmerizing blue eyes'],
      correctAnswerIndex: 2,
    },
    {
      text: 'How does a question go?',
      answers: ['fast', '"aaaooooo"', 'ravage me, you filthy beast', 'definitely'],
      correctAnswerIndex: 3,
    },
    {
      text: 'What does an apple have?',
      answers: ['good sense of humour', 'deep sense of regret', 'feet', 'mesmerizing blue eyes'],
      correctAnswerIndex: 2,
    },
    {
      text: 'How does a question go?',
      answers: ['fast', '"aaaooooo"', 'ravage me, you filthy beast', 'definitely'],
      correctAnswerIndex: 3,
    },
   
  ]
  return (
    <div className="App">
      <Header />
      <Main questionSet={questions}/>
      <Footer />
    </div>
  );
}

export default App;
