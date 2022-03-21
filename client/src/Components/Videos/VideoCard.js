import React from "react";

function VideoCard({ video, handleClick }) {
  return (
    <div className="col-xs-12 col-lg-9 mt-4" onClick={() => handleClick(video._id)} style={{cursor:'pointer'}}>
      <div className="card col-lg-12 h-100 d-flex flex-column justify-content-between card-background">
        <div className="card-body">
          <h5 className="card-title">{video.title}</h5>
          <hr />
          <p className="card-text">
            {video.desc}
          </p>
        </div>
        <div className="card-footer" style={{ border: "none" }}>
            Created by: {video.createdBy}
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
