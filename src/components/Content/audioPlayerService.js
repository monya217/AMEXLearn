// src/services/audioPlayerService.js
import { useState, useRef } from "react";

export const useAudioPlayer = () => {
  const [current, setCurrent] = useState(null);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(new Audio());

  const playSong = (song) => {
    if (current && current.src === song.src) {
      audioRef.current.play();
      setPlaying(true);
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      audioRef.current = new Audio(song.src);
      audioRef.current.play();
      setCurrent(song);
      setPlaying(true);
    }
  };

  const pauseSong = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setPlaying(false);
    }
  };

  const togglePlayPause = (song) => {
    if (current && current.id === song.id) {
      if (playing) {
        pauseSong();
      } else {
        playSong(song);
      }
    } else {
      playSong(song);
    }
  };

  return {
    current,
    playing,
    playSong,
    pauseSong,
    togglePlayPause,
  };
};
