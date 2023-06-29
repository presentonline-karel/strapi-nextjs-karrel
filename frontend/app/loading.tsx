"use client";

import loading from "@/public/loading.json";
import { Player, Controls } from '@lottiefiles/react-lottie-player';

export default function Loading() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <Player
        autoplay
        loop
        src={loading}
        speed={2}
        className="w-24 h-24 / md:w-60 md:h-60"
      />
    </div>
  )
}