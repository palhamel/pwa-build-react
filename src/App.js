import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        "https://orangevalleycaa.org/api/videos"
      ).then((response) => response.json());
      setData(result);
    };
    fetchData();
  }, []);
  // console.log(data)
  return (
    <div className="App">
      <header>
        <div>
          <h1>Some Videos</h1>
          <h4>all fetched via api</h4>
        </div>
      </header>
      {data.map(videoinfo => (
        <div key={videoinfo.id}>
          <h2>{videoinfo.name}</h2>
          <video height={200} controls src={videoinfo.video_url} />
        </div>
      ))}
    </div>
  );
}

export default App;
