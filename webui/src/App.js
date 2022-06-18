import logo from './logo.svg';
import './App.css';
import FolderBrowser from './folder/FolderBrowser'
import PlaybackController from './playback/PlaybackController'
import Playlist from './playlist/Playlist'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <FolderBrowser />
        <PlaybackController />
        <Playlist />
      </header>
    </div>
  );
}

export default App;
