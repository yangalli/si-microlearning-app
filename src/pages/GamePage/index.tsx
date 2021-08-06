import "./styles.css";
import Lottie from "react-lottie";
import animationData from "../../assets/animations/13689-gameboy-color.json";
import useSound from "use-sound";

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
        <div className="game-content">
          <Lottie options={animationOptions} width={300} height={300} />
          <h1>Vamos jogar?</h1>
        </div>
      </div>
      <button onClick={() => play()}>Boop!</button>
    </div>
  );
}

export default GamePage;
