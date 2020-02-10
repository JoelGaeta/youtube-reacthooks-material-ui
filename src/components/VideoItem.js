import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";

const VideoItem = ({ videos, onVideoSelect }) => {
  return (
    <Grid item xs={12}>
      <Paper
        style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        onClick={() => onVideoSelect(videos)}
      >
        <img
          style={{ marginRight: "20px" }}
          alt="thumbnail"
          src={videos.snippet.thumbnails.medium.url}
        />
        <Typography variant="subtitle1">
          <b>{videos.snippet.title}</b>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default VideoItem;
