import "bootstrap/dist/css/bootstrap.min.css";
import BstButton from "react-bootstrap/Button";
import "./App.css";
import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";
import Header from "./components/Header";
import ReactPlayer from "react-player";
import Card from "./components/Card";

function App() {
  return (
    // React.createElement("div",...)
    <div className="ih">
      <Header />
      <div className="ih-main">
        <Card
          img={icon1}
          title="Declarative"
          content="React male it painless to create declarative UIs"
        />
        <Card
          img={icon2}
          title="Components"
          congtent="Build encapsulated components that manage their state"
        />
        <Card
          img={icon3}
          title="way"
          content="A set of immutable values are passed to the components"
        />
        <Card
          img={icon4}
          title="JSX"
          content="Statically typed, designed to run on modern browser"
        />
      </div>
      {/* React plpayer */}
      <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" />
      {/* Bootstrap */}
      <div>
        <BstButton>Bootstrap button</BstButton>
      </div>
    </div>
  );
}

export default App;
