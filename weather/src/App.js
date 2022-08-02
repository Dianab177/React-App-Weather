import './App.css';
import Search from "./Search";
import Degrees from "./Degrees";
import TodayForecast from "./TodayForecast";
import Date from "./Date";
import Description from "./Description";
import Forecast from "./Forecast";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="border-style">
          <Search />
          <h1>Bergondo</h1>
          <Degrees />
          <TodayForecast />
          <Date />
          <Description />
          <Forecast />

        </div>
      </div>
    </div>
  );
}

export default App;
