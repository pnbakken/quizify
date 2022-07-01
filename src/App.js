import logo from './logo.svg';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import './components/scss-root/_app.scss';
import { useEffect, useState } from 'react';

function App() {
  const [player, setPlayer] = useState(null);


  const [loading, setLoading] = useState(false);
  const [remoteQuestions, setRemoteQuestions] = useState([]);


  useEffect( () => {
    const loadQuestions = async () => {
      setLoading(true);
      const response = await fetch("https://opentdb.com/api.php?amount=10");
      const questions = await response.json();
      console.log(questions);
      setRemoteQuestions(questions.results);
      setLoading(false);
    }
    loadQuestions();
  }, []);

  return (
    <div className="App">
      <Header />
      
      {loading? "Please wait" : <Main questionSet={remoteQuestions}/>}
      <Footer />
    </div>
  );
}

export default App;
