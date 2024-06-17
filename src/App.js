import './styles/App.css';
import Hero from './Components/Hero/Hero';
import Countdown from './Components/Countdown/Countdown';
import Summary from './Components/Summary/Summary';

function App() {
  return (
    <div className='div-wrapper'>
      <Hero />
      <Countdown />
      <Summary />
    </div>
  );
}

export default App;
