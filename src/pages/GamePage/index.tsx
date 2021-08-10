import "./styles.css";
import Lottie from "react-lottie";
import animationData from "../../assets/animations/13689-gameboy-color.json";
import useSound from "use-sound";
import ParticlesWhite from "../../components/ParticlesWhite";
import ReactAudioPlayer from "react-audio-player";
import sound from "./sound.mp3";

const animationOptions = {
  loop: true,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function GamePage() {
  const [play] = useSound(
    "https://assets.coderrocketfuel.com/pomodoro-times-up.mp3",
  );

  return (
    <div className="game-container">
      <div className="game-section">
        <ParticlesWhite />
        <div className="game-content">
          <Lottie options={animationOptions} width={300} height={300} />
          <h1>Vamos jogar?</h1>
        </div>
      </div>

      <div style={{ display: "none" }}>
        <ReactAudioPlayer src={sound} autoPlay controls />
      </div>

      <button onClick={() => play()}>Boop!</button>
    </div>
  );
}

export default GamePage;
