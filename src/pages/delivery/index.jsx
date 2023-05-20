import React, { useRef, useState } from "react";
import Products from "@/components/products";
import s from "./index.module.scss";

const Delivery = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
      audioRef.current.onended = () => {
        setIsPlaying(false);
      };
    }
  };

  return (
    <>
      <div className="grid grid-cols-4 mt-8">
        <h2 className="text-3xl font-extrabold mt-2">Доставка по місту</h2>
        <div className="col-span-3">
          <img src="/Bike.png" width={600} alt="devil on a motorbike" />
          <button onClick={playAudio} className={`${s.btn} ${isPlaying ? s.active : ''}`}>
            Click me and Rock!!!
          </button>
          <audio
            ref={audioRef}
            src="/ACDC.mp3"
            preload="auto"
            controls={false}
          />
        </div>
      </div>
    </>
  );
};

export default Delivery;
