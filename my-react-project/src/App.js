import './App.css';
//import yuh from './images/lordColeQuad.png';


// function App() {
//   return (
//     <div className="App">
//       <h1>Yo</h1>
//     </div>
//   );
// }

// export default App;


import { Map, Marker } from "pigeon-maps";

export default function App() {
   return (
      <Map height={300} defaultCenter={[33.97337528063261, -117.32817063158994]}>
         <Marker width={50} anchor={[33.97337528063261, -117.32817063158994]}  />
      </Map>
   );
}