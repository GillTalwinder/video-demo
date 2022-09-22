import { useEffect, useRef, useState } from 'react';
import { HOME_VIP_LAUNCH_MOBILE } from './asset';
import './App.css';

function App() {
  const videoRef = useRef();
  const sourceRef = useRef();
  const [videoUrl, setVideoUrl] = useState(HOME_VIP_LAUNCH_MOBILE);

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
      <video 
        ref={videoRef} 
        muted 
        loop={true} 
        playsInline
      >
        <source ref={sourceRef}></source>
      </video>
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
    </>
  );
}

export default App;
