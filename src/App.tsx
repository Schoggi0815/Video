import React from 'react';
import './App.css';

function App() {
  // youtube embed
  const videoId = 'WLKUEO8OU9E';
  const url = `https://www.youtube.com/embed/${videoId}`;
  return (
    <div className="App">
      <header className="App-header">
        <h1>3D-Print</h1>
        <div className="video-container">
          <iframe
            title="youtube video"
            width="560"
            height="315"
            src={url}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </header>
    </div>
  );
}

export default App;
