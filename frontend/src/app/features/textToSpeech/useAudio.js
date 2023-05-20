import { Howl } from "howler";

const useAudio = (url) => {
  const sound = new Howl({
    src: [url],
    html5: true,
    format: "audio/mpeg"
  })

  return sound;
}

export default useAudio;