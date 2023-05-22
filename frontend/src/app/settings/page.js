"use client"

import { setLoadAudio, setLoadVideo } from "@/redux/features/settings/settingsSlice";
// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Settings() {
  const dispatch = useDispatch();

  const loadAudio = useSelector((state) => state.settings.loadAudio);
  const loadVideo = useSelector((state) => state.settings.loadVideo);

  function handleLoadVideo(event) {
    dispatch(setLoadVideo({loadVideo: event.target.checked}));
  }

  function handleLoadAudio(event) {
    dispatch(setLoadAudio({loadAudio: event.target.checked}));
  }

  return (
    <div>
      <div className="form-control p-2 w-full lg:w-1/2 my-4 bg-neutral shadow-lg lg:rounded-lg mx-auto">
        <label className="label cursor-pointer">
          <span className="label-text">Load Audio</span> 
          <input type="checkbox" className="toggle" onChange={handleLoadAudio} checked={loadAudio} />
        </label>
      </div>
      <div className="form-control p-2 w-full lg:w-1/2 my-4 bg-neutral shadow-lg lg:rounded-lg mx-auto">
        <label className="label cursor-pointer">
          <span className="label-text">Load video</span> 
          <input type="checkbox" className="toggle" onChange={handleLoadVideo} checked={loadVideo} />
        </label>
      </div>
    </div>
  )
}

export default Settings