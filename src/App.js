import React, { useState, useEffect } from "react";
import "./App.css";
import { Grid } from "@material-ui/core";
import SearchBar from "./components/SearchBar";
import VideoDetail from "./components/VideoDetail";
import Youtube from "./api/Youtube";
import VideoList from "./components/VideoList";

function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const onVideoSelect = video => {
    setSelectedVideo(video);
  };
  const handleSubmit = async searchTerm => {
    const response = await Youtube.get("search", {
      params: {
        part: "snippet",
        q: searchTerm,
        maxResults: 20,
        key: "AIzaSyAFDUKCcmOSixP1dn-jleIXXW01x_eDhuI"
      }
    });
    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
  };

  useEffect(() => {
    handleSubmit("blues guitar");
  }, []);

  return (
    <Grid justify="center" container spacing={10}>
      <Grid item xs={12}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <SearchBar onFormSubmit={handleSubmit} />
          </Grid>
          <Grid item xs={8}>
            <VideoDetail videos={selectedVideo} />
          </Grid>
          <Grid item xs={4}>
            <VideoList videos={videos} onVideoSelect={onVideoSelect} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
