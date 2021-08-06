import "./styles.css";
import useCourses from "../../hooks/useCourses";
import Lottie from "react-lottie";
import animationData from "../../assets/animations/13689-gameboy-color.json";

const animationOptions = {
  loop: true,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function GamePage() {
  const courses = useCourses();

  return (
    <div className="game-container">
      <div className="game-section">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Lottie options={animationOptions} width={300} height={300} />
          <h1>Vamos jogar?</h1>
        </div>
      </div>
    </div>
  );
}

export default GamePage;
