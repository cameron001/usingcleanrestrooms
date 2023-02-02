import './App.css';
import { Map, Marker } from "pigeon-maps";

function App() {
   return (
      <Map height={300} defaultCenter={[33.97337528063261, -117.32817063158994]}>
         <Marker width={50} anchor={[33.97337528063261, -117.32817063158994]}  />
      </Map>
   );
}

export default App;
