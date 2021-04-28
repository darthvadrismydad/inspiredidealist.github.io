import './App.css';
import { AboutMe } from './components/AboutMe';
import { SocialLinks } from './components/SocialLinks';
import { UnderConstruction } from './components/UnderConstruction';

export function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SocialLinks />
        <AboutMe />
      </header>
    </div>
  );
}