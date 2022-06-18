import logo from './logo.svg';
import './App.css';
import FolderBrowser from './folder/FolderBrowser'
import PlaybackController from './playback/PlaybackController'
import Playlist from './playlist/Playlist'

const App = () => {
  return (
    <div className="App">
        <FolderBrowser />
    </div>
  );
}

export default App;
