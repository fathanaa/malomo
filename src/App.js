import NavBar from './Components/NavBar/NavBar.js'
import Showcase from './Components/Showcase/Showcase.js'
import WeKnow from './Components/WeKnow/WeKnow.js'
import './App.css';
import Slideshow from './Components/Slideshow/Slideshow.js';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Showcase />
      <WeKnow />
      <Slideshow />
    </div>
  );
}

export default App;
