import background from "../../data/dogdimage.jpg";
import "../../styles/App.css";

const BackgroundImage = () => {
  return (
    <div>
      <img src={background} alt="dogdimage" style={{ zIndex: 0, position: "absolute", top: "44px", width: "100%", height: "calc(100vh - 44px)" }} />
    </div>
  );
};

export default BackgroundImage;
