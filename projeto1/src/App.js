import './App.css';
import HelloWorld from './components/HelloWorld';
import Phrase from './components/Phrase';
import SayMyName from './components/SayMyName';
import Person from './components/Person';
import List from './components/List';

function App() {
  const name = 'Daniel Bispo';
  const url = 'https://placehold.co/150';
  
  function sum(a,b){
    return a+b;
  }

  return (
    <div className="App">
      <Phrase />
      <SayMyName name={name} />
      <Person 
      name = "Daniel" 
      age="20" 
      profession="Web Developer" 
      img={url} />

      <List />
    </div>
  );
}

export default App;


