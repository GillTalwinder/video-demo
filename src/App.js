import { useRef, useState } from 'react';
import './App.css';

const videos = [
  'http://techslides.com/demos/sample-videos/small.mp4',
]

function App() {
  const videoRef = useRef();
  const sourceRef = useRef();
  const [videoUrl, setVideoUrl] = useState(videos[0]);

  const handlePlay = () => {
    videoRef.current.muted = true;
    videoRef.current.pause();
    sourceRef.current.setAttribute('src', videoUrl);
    sourceRef.current.setAttribute('type', 'video/mp4');
    videoRef.current.load();
    videoRef.current.play();
    videoRef.current.muted = false;
  }

  return (
    <>
      <div className="App">

        <div className='input-wrapper'>
          <input 
            value={videoUrl}
            onChange={(e) => { setVideoUrl(e.target.value) }}
          />
          <button onClick={handlePlay}>Play</button>
        </div>

        <div>
          <p>Current video url:</p>
          <p>{videoUrl}</p>
        </div>
      </div>

      <video 
        ref={videoRef} 
        muted 
        loop={true} 
        playsInline
      >
        <source ref={sourceRef}></source>
      </video>
    </>
  );
}

export default App;
