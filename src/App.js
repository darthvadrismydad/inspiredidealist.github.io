import './App.css';
import { SocialLinks } from './components/AboutMe';
import { UnderConstruction } from './components/UnderConstruction';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SocialLinks />
        <UnderConstruction></UnderConstruction>
      </header>
    </div>
  );
}

export default App;
