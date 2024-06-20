import './styles/App.css';
import Hero from './Components/Hero/Hero';
import Countdown from './Components/Countdown/Countdown';
import Summary from './Components/Summary/Summary';
import Characters from './Components/Characters/Characters';
import Monsters from './Components/Monsters/Monsters';

function App() {
  return (
    <div className='div-wrapper'>
      <Hero />
      <Countdown />
      <Summary />
      <Characters />
      <Monsters />
    </div>
  );
}

export default App;
