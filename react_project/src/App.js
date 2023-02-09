import './App.css';

import React, { useState } from "react";
import { Map, Marker } from "pigeon-maps";

function App() {
  const [center, setCenter] = useState([33.97337528063261, -117.32817063158994]);
  const [zoom, setZoom] = useState(15);
  const [description, setDescription] = React.useState("");

  const handleMarkerClick = (markerCoordinates) => {
    setCenter(markerCoordinates);
    setZoom(18);
  };

  const handleMouseOver = (description) => {
   setDescription(description);
   };

   const handleMouseOut = () => {
   setDescription("");
   };

  return (
    <div>
      <h1 className="Bathroom">UCR Bathrooms on Campus</h1>
      <Map height={'100vh'} width={'100vw'} center={center} zoom={zoom} style={{ height: '100vh', width: '100vw' }}>
        <Marker // SRC
          width={50}
          anchor={[33.97887246284416, -117.32811758572333]}
          onClick={() => handleMarkerClick([33.97887246284416, -117.32811758572333])} 
          onMouseOver={() => handleMouseOver(
            <>
            <pre>
              ~ Bathroom Ratings ~<hr/><br/>
              Cleanliness: 5/5 <br/>
              Neatness:    4/5c
            </pre>
            </>
          )}
          
          onMouseOut={handleMouseOut}
          style={{backgroundColor: 'green'}}
         />
         {description && (
            <div style={{backgroundColor: 'lightskyblue', position: 'absolute', top: '10px', left: '10px'}}>{description}</div>
         )}
         
      
        <Marker  // MRB
          width={50}
          anchor={[33.9769801275596, -117.3279795828765]}
          onClick={() => handleMarkerClick([33.9769801275596, -117.3279795828765])} 
        />
        <Marker
          width={50}  // MSE
          anchor={[33.97625669718612, -117.32811758508944]}
          onClick={() => handleMarkerClick([33.97625669718612, -117.32811758508944])}
        />
        <Marker
          width={50}  // UNLH
          anchor={[33.97567222541074, -117.32837880542417]}
          onClick={() => handleMarkerClick([33.97567222541074, -117.32837880542417])}
        />
        <Marker
          width={50}  // Skye Hall
          anchor={[33.975388161625816, -117.32889138706348]}
          onClick={() => handleMarkerClick([33.975388161625816, -117.32889138706348])}
        />
        <Marker
          width={50}  // Career Center
          anchor={[33.97519606261705, -117.3281890520419]}
          onClick={() => handleMarkerClick([33.97519606261705, -117.3281890520419])}
        />
        <Marker
          width={50}  // Athletics and Dance
          anchor={[33.97476485644793, -117.32983029956057]}
          onClick={() => handleMarkerClick([33.97476485644793, -117.32983029956057])}
        />
        <Marker
          width={50}  // CHASS Interdisciplinary
          anchor={[33.9749242598777, -117.33035027491286]}
          onClick={() => handleMarkerClick([33.9749242598777, -117.33035027491286])}
        />
        <Marker
          width={50}  // Arts
          anchor={[33.97497739319835, -117.3317869832598]}
          onClick={() => handleMarkerClick([33.97497739319835, -117.3317869832598])}
        />
        <Marker
          width={50}  // Hinderaker Hall
          anchor={[33.97355501588781, -117.331594764]}
          onClick={() => handleMarkerClick([33.97355501588781, -117.331594764])}
        />
        <Marker
          width={50}  // Humanities and Social Sciences
          anchor={[33.97281370839114, -117.3312074906149]}
          onClick={() => handleMarkerClick([33.97281370839114, -117.3312074906149])}
        />
        <Marker
          width={50}  // The Barn
          anchor={[33.97226912406662, -117.33046169641133]}
          onClick={() => handleMarkerClick([33.97226912406662, -117.33046169641133])}
        />
        <Marker
          width={50}  // Sproul Hall
          anchor={[33.972885518627145, -117.32974350134279]}
          onClick={() => handleMarkerClick([33.972885518627145, -117.32974350134279])}
        />
        <Marker
          width={50}  // Watkins Hall
          anchor={[33.972610250603005, -117.32902976523543]}
          onClick={() => handleMarkerClick([33.972610250603005, -117.32902976523543])}
        />
        <Marker
          width={50}  // Rivera Library
          anchor={[33.972656498845275, -117.32756473108327]}
          onClick={() => handleMarkerClick([33.972656498845275, -117.32756473108327])}
        />
        <Marker
          width={50}  // Humanities
          anchor={[33.97298324117317, -117.33081216288222]}
          onClick={() => handleMarkerClick([33.97298324117317, -117.33081216288222])}
        />
        <Marker
          width={50}  // Olmsted Hall
          anchor={[33.97127605583216, -117.32806283818857]}
          onClick={() => handleMarkerClick([33.97127605583216, -117.32806283818857])}
        />
        <Marker
          width={50}  // Psychology
          anchor={[33.970660531679904, -117.32759248199203]}
          onClick={() => handleMarkerClick([33.970660531679904, -117.32759248199203])}
        />
        <Marker
          width={50}  // Chapman Hall
          anchor={[33.970256209760755, -117.32630157254835]}
          onClick={() => handleMarkerClick([33.970256209760755, -117.32630157254835])}
        />
        <Marker
          width={50}  // Anderson Hall
          anchor={[33.969873437650385, -117.3259158691591]}
          onClick={() => handleMarkerClick([33.969873437650385, -117.3259158691591])}
        />
        <Marker
          width={50}  // Entomology Museum
          anchor={[33.97007470718678, -117.32555183349648]}
          onClick={() => handleMarkerClick([33.97007470718678, -117.32555183349648])}
        />
        <Marker
          width={50}  // SOM Research
          anchor={[33.97056881915526, -117.32553421638364]}
          onClick={() => handleMarkerClick([33.97056881915526, -117.32553421638364])}
        />
        <Marker
          width={50}  // East L&Q
          anchor={[33.97045630804011, -117.32476261841252]}
          onClick={() => handleMarkerClick([33.97045630804011, -117.32476261841252])}
        />
        <Marker
          width={50}  // Entomology
          anchor={[33.97071414521058, -117.32634538295305]}
          onClick={() => handleMarkerClick([33.97071414521058, -117.32634538295305])}
        />
        <Marker
          width={50}  // Genomics
          anchor={[33.97153453105675, -117.32619276008063]}
          onClick={() => handleMarkerClick([33.97153453105675, -117.32619276008063])}
        />
        <Marker
          width={50}  // Boyden Laboratory
          anchor={[33.97111261923376, -117.32554834946234]}
          onClick={() => handleMarkerClick([33.97111261923376, -117.32554834946234])}
        />
        <Marker
          width={50}  // Campbell Hall
          anchor={[33.97168923106722, -117.3253957224082]}
          onClick={() => handleMarkerClick([33.97168923106722, -117.3253957224082])}
        />
        <Marker
          width={50}  // University Office Bldg
          anchor={[33.971731422650215, -117.32498307534557]}
          onClick={() => handleMarkerClick([33.971731422650215, -117.32498307534557])}
        />
        <Marker
          width={50}  // Fawcett Laboratory
          anchor={[33.97152984290477, -117.32423408859408]}
          onClick={() => handleMarkerClick([33.97152984290477, -117.32423408859408])}
        />


        <Marker
          width={50}  // Orbach Library
          anchor={[33.974548794609056, -117.32445454526781]}
          onClick={() => handleMarkerClick([33.974548794609056, -117.32445454526781])}
        />
        <Marker
          width={50}  // Chemical Sciences
          anchor={[33.974464415345345, -117.32306114714689]}
          onClick={() => handleMarkerClick([33.974464415345345, -117.32306114714689])}
        />
        <Marker
          width={50}  // School of Medicine Education Building
          anchor={[33.97380812993979, -117.32398536872923]}
          onClick={() => handleMarkerClick([33.97380812993979, -117.32398536872923])}
        />


        <Marker
          width={50}  // Physics
          anchor={[33.97457692065917, -117.32540985627634]}
          onClick={() => handleMarkerClick([33.97457692065917, -117.32540985627634])}
        />
        <Marker
          width={50}  // Pierce Hall
          anchor={[33.97423471599278, -117.3272102511631]}
          onClick={() => handleMarkerClick([33.97423471599278, -117.3272102511631])}
        />
        <Marker
          width={50}  // Geology
          anchor={[33.97443628872918, -117.3262238495412]}
          onClick={() => handleMarkerClick([33.97443628872918, -117.3262238495412])}
        />
        <Marker
          width={50}  // Science Labs 1
          anchor={[33.97391126236491, -117.32617862686456]}
          onClick={() => handleMarkerClick([33.97391126236491, -117.32617862686456])}
        />
        <Marker
          width={50}  // Winston Chung Hall
          anchor={[33.9754510947876, -117.32582341661066]}
          onClick={() => handleMarkerClick([33.9754510947876, -117.32582341661066])}
        />
        <Marker
          width={50}  // Bourns Hall
          anchor={[33.975460373627, -117.32692749538892]}
          onClick={() => handleMarkerClick([33.975460373627, -117.32692749538892])}
        />
        <Marker
          width={50}  // HUB
          anchor={[33.974311512641826, -117.32874186187665]}
          onClick={() => handleMarkerClick([33.974311512641826, -117.32874186187665])}
        />
        <Marker
          width={50}  // Student Services
          anchor={[33.97419607342888, -117.32978318922721]}
          onClick={() => handleMarkerClick([33.97419607342888, -117.32978318922721])}
        />
        <Marker
          width={50}  // Costo Hall
          anchor={[33.97423118941484, -117.3292268814447]}
          onClick={() => handleMarkerClick([33.97423118941484, -117.3292268814447])}
        />
        <Marker
          width={50}  // Spieth Hall
          anchor={[33.972837215205715, -117.3265542910039]}
          onClick={() => handleMarkerClick([33.972837215205715, -117.3265542910039])}
        />
        <Marker
          width={50}  // Batchelor Hall
          anchor={[33.972593329627976, -117.3251002359208]}
          onClick={() => handleMarkerClick([33.972593329627976, -117.3251002359208])}
        />
        <Marker
          width={50}  // Life Sciences
          anchor={[33.97228402373831, -117.32658721794732]}
          onClick={() => handleMarkerClick([33.97228402373831, -117.32658721794732])}
        />
        <Marker
          width={50}  // Biological Sciences
          anchor={[33.972265388862475, -117.32608175581554]}
          onClick={() => handleMarkerClick([33.972265388862475, -117.32608175581554])}
        />
        <Marker
          width={50}  // Webber Hall
          anchor={[33.97353442674561, -117.32536279367079]}
          onClick={() => handleMarkerClick([33.97353442674561, -117.32536279367079])}
        />
        <Marker
          width={50}  // Student Success Center
          anchor={[33.97420914473526, -117.3305187519793]}
          onClick={() => handleMarkerClick([33.97420914473526, -117.3305187519793])}
          onMouseOver={() => handleMouseOver(
            <>
            <pre>
              ~ Bathroom Ratings ~<hr/><br/>
              Cleanliness: 4/5 <br/>
              Neatness:    4/5
            </pre>
            </>
          )}
          
          onMouseOut={handleMouseOut}
          style={{backgroundColor: 'green'}}
         />
         {description && (
            <div style={{backgroundColor: 'lightskyblue', position: 'absolute', top: '10px', left: '10px'}}>{description}</div>
         )}

        <Marker
          width={50}  // Boyce Hall
          anchor={[33.973504419864376, -117.32491567420728]}
          onClick={() => handleMarkerClick([33.973504419864376, -117.32491567420728])}
        />
      </Map>
    </div>
  );
}
export default App;

