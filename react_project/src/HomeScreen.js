import React, { useState, } from "react";
import { Map, Marker } from "pigeon-maps";
import { TouchableOpacity, Text } from "react-native";
import styleSheet from './styles.js';
import { View } from 'react-native';


export function HomeScreen({navigation}) {
  const [center, setCenter] = useState([33.97337528063261, -117.32817063158994]);
  const [zoom, setZoom] = useState(16);
  const [description, setDescription] = React.useState("");

  // Hides 'Home' navigation tab on top of screen
  React.useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);

  const handleMarkerClick = (markerCoordinates) => {
    setCenter(markerCoordinates);
    setZoom(18);
  };

  const handleMouseOver = (description) => {
   setDescription(description);
   };

  const handleMouseOut = () => {
  setDescription("");
  }

  return (
    <div>
      <h1 className="Bathroom">UCR Restrooms Map</h1>
      <Map height={'100vh'} width={'100vw'} center={center} zoom={zoom} style={{ height: '100vh', width: '100vw' }}>
          {description && (
              <div style={styleSheet.descriptionStyle}>{description}</div>
          )}
        
        <Marker // SRC
            width={50}
            anchor={[33.97887246284416, -117.32811758572333]}
            color={'hsl(90, 100%, 40%)'}
            posit
            onClick={() => navigation.navigate('Reviews', {name: 'SRC'})}
            onMouseOver={() => handleMouseOver(
              <>
              <pre>
                ~ SRC Ratings ~<hr/><br/>
                Cleanliness:   4/5 <br/>
                Accessibility: 5/5
              </pre>
              </>
            )}

          onMouseOut={handleMouseOut}
        />

        <Marker  // MRB
          width={50}
          anchor={[33.9769801275596, -117.3279795828765]}
          color={'hsl(90, 100%, 40%)'}
          onClick={() => navigation.navigate('Reviews', {name: 'MRB'})}
          onMouseOver={() => handleMouseOver(
            <>
            <pre>
              ~ MRB Ratings ~<hr/><br/>
              Cleanliness:   4/5 <br/>
              Accessibility: 4/5
            </pre>
            </>
          )}
        
          onMouseOut={handleMouseOut}
        />

        <Marker
          width={50}  // MSE
          anchor={[33.97625669718612, -117.32811758508944]}
          color={'hsl(60, 100%, 47%)'}
          onClick={() => navigation.navigate('Reviews', {name: 'MSE'})}
          onMouseOver={() => handleMouseOver(
            <>
            <pre>
              ~ MSE Ratings ~<hr/><br/>
              Cleanliness:   3/5 <br/>
              Accessibility: 4/5
            </pre>
            </>
          )}
        
          onMouseOut={handleMouseOut}
        />

        <Marker
          width={50}  // UNLH
          anchor={[33.97567222541074, -117.32837880542417]}
          color={'hsl(90, 100%, 40%)'}
          onClick={() => navigation.navigate('Reviews', {name: 'UNLH'})}
          onMouseOver={() => handleMouseOver(
            <>
            <pre>
              ~ UNLH Ratings ~<hr/><br/>
              Cleanliness:   4/5 <br/>
              Accessibility: 4/5
            </pre>
            </>
          )}
        
          onMouseOut={handleMouseOut}
        />

        <Marker
          width={50}  // Skye Hall
          anchor={[33.975388161625816, -117.32889138706348]}
          color={'hsl(90, 100%, 40%)'}
          onClick={() => navigation.navigate('Reviews', {name: 'Skye Hall'})}
          onMouseOver={() => handleMouseOver(
            <>
            <pre>
              ~ Skye Hall Ratings ~<hr/><br/>
              Cleanliness:   4/5 <br/>
              Accessibility: 4/5
            </pre>
            </>
          )}
        
          onMouseOut={handleMouseOut}
        />

        <Marker
          width={50}  // Career Center
          anchor={[33.97519606261705, -117.3281890520419]}
          color={'hsl(90, 100%, 40%)'}
          onClick={() => navigation.navigate('Reviews', {name: 'SRC'})}
          onMouseOver={() => handleMouseOver(
            <>
            <pre>
              ~ Career Center Ratings ~<hr/><br/>
              Cleanliness:   4/5 <br/>
              Accessibility: 4/5
            </pre>
            </>
          )}
        
          onMouseOut={handleMouseOut}
        />

        <Marker
          width={50}  // Athletics and Dance
          anchor={[33.97476485644793, -117.32983029956057]}
          color={'hsl(60, 100%, 47%)'}
          onClick={() => navigation.navigate('Reviews', {name: 'Athletics and Dance'})}
          onMouseOver={() => handleMouseOver(
            <>
            <pre>
              ~ Athletics and Dance Ratings ~<hr/><br/>
              Cleanliness:   4/5 <br/>
              Accessibility: 4/5
            </pre>
            </>
          )}
        
          onMouseOut={handleMouseOut}
        />

        <Marker
          width={50}  // CHASS Interdisciplinary
          anchor={[33.9749242598777, -117.33035027491286]}
          color={'hsl(60, 100%, 47%)'}
          onClick={() => navigation.navigate('Reviews', {name: 'CHASS Interdisciplinary'})}
          onMouseOver={() => handleMouseOver(
            <>
            <pre>
              ~ CHASS Interdisciplinary Ratings ~<hr/><br/>
              Cleanliness:   4/5 <br/>
              Accessibility: 4/5
            </pre>
            </>
          )}
        
          onMouseOut={handleMouseOut}
        />

        <Marker
          width={50}  // Arts
          anchor={[33.97497739319835, -117.3317869832598]}
          color={'hsl(60, 100%, 47%)'}
          onClick={() => navigation.navigate('Reviews', {name: 'Arts'})}
          onMouseOver={() => handleMouseOver(
            <>
            <pre>
              ~ Arts Ratings ~<hr/><br/>
              Cleanliness:   4/5 <br/>
              Accessibility: 4/5
            </pre>
            </>
          )}
        
          onMouseOut={handleMouseOut}
        />

        <Marker
          width={50}  // Hinderaker Hall
          anchor={[33.97355501588781, -117.331594764]}
          color={'hsl(60, 100%, 47%)'}
          onClick={() => navigation.navigate('Reviews', {name: 'Hinderaker Hall'})}
          onMouseOver={() => handleMouseOver(
            <>
            <pre>
              ~ Hinderaker Hall Ratings ~<hr/><br/>
              Cleanliness:   3/5 <br/>
              Accessibility: 4/5
            </pre>
            </>
          )}
        
          onMouseOut={handleMouseOut}
        />

        <Marker
          width={50}  // Humanities and Social Sciences
          anchor={[33.97281370839114, -117.3312074906149]}
          color={'hsl(60, 100%, 47%)'}
          onClick={() => navigation.navigate('Reviews', {name: 'Humanities and Social Sciences'})}
          onMouseOver={() => handleMouseOver(
            <>
            <pre>
              ~ Humanities and Social Sciences Ratings ~<hr/><br/>
              Cleanliness:   3/5 <br/>
              Accessibility: 4/5
            </pre>
            </>
          )}
        
          onMouseOut={handleMouseOut}
        />

        <Marker
          width={50}  // The Barn
          anchor={[33.97226912406662, -117.33046169641133]}
          color={'hsl(90, 100%, 40%)'}
          onClick={() => navigation.navigate('Reviews', {name: 'The Barn'})}
          onMouseOver={() => handleMouseOver(
            <>
            <pre>
              ~ The Barn Ratings ~<hr/><br/>
              Cleanliness:   4/5 <br/>
              Accessibility: 4/5
            </pre>
            </>
          )}
        
          onMouseOut={handleMouseOut}
        />
        
        <Marker
          width={50}  // Sproul Hall
          anchor={[33.972885518627145, -117.32974350134279]}
          color={'hsl(60, 100%, 47%)'}
          onClick={() => navigation.navigate('Reviews', {name: 'Sproul Hall'})}
          onMouseOver={() => handleMouseOver(
            <>
            <pre>
              ~ Sproul Hall Ratings ~<hr/><br/>
              Cleanliness:   3/5 <br/>
              Accessibility: 4/5
            </pre>
            </>
          )}
        
          onMouseOut={handleMouseOut}
        />

        <Marker
          width={50}  // Watkins Hall
          anchor={[33.972610250603005, -117.32902976523543]}
          color={'hsl(60, 100%, 47%)'}
          onClick={() => navigation.navigate('Reviews', {name: 'Watkins'})}
          onMouseOver={() => handleMouseOver(
            <>
            <pre>
              ~ Watkins Ratings ~<hr/><br/>
              Cleanliness:   3/5 <br/>
              Accessibility: 4/5
            </pre>
            </>
          )}
        
          onMouseOut={handleMouseOut}
        />

        <Marker
          width={50}  // Rivera Library
          anchor={[33.972656498845275, -117.32756473108327]}
          color={'hsl(8, 100%, 50%)'}
          onClick={() => navigation.navigate('Reviews', {name: 'Rivera Library'})}
          onMouseOver={() => handleMouseOver(
            <>
            <pre>
              ~ Rivera Library Ratings ~<hr/><br/>
              Cleanliness:   2/5 <br/>
              Accessibility: 4/5
            </pre>
            </>
          )}
        
          onMouseOut={handleMouseOut}
        />

        <Marker
          width={50}  // Humanities
          anchor={[33.97298324117317, -117.33081216288222]}
          color={'hsl(60, 100%, 47%)'}
          onClick={() => navigation.navigate('Reviews', {name: 'Humanities'})}
          onMouseOver={() => handleMouseOver(
            <>
            <pre>
              ~ Humanities Ratings ~<hr/><br/>
              Cleanliness:   3/5 <br/>
              Accessibility: 4/5
            </pre>
            </>
          )}
        
          onMouseOut={handleMouseOut}
        />

        <Marker
          width={50}  // Olmsted Hall
          anchor={[33.97127605583216, -117.32806283818857]}
          color={'hsl(60, 100%, 47%)'}
          onClick={() => navigation.navigate('Reviews', {name: 'Olmsted Hall'})}
          onMouseOver={() => handleMouseOver(
            <>
            <pre>
              ~ Olmsted Hall Ratings ~<hr/><br/>
              Cleanliness:   3/5 <br/>
              Accessibility: 4/5
            </pre>
            </>
          )}
        
          onMouseOut={handleMouseOut}
        />

        <Marker
          width={50}  // Psychology
          anchor={[33.970660531679904, -117.32759248199203]}
          color={'hsl(60, 100%, 47%)'}
          onClick={() => navigation.navigate('Reviews', {name: 'Psychology'})}
          onMouseOver={() => handleMouseOver(
            <>
            <pre>
              ~ Psychology Ratings ~<hr/><br/>
              Cleanliness:   3/5 <br/>
              Accessibility: 4/5
            </pre>
            </>
          )}
        
          onMouseOut={handleMouseOut}
        />

        <Marker
          width={50}  // Chapman Hall
          anchor={[33.970256209760755, -117.32630157254835]}
          color={'hsl(60, 100%, 47%)'}
          onClick={() => navigation.navigate('Reviews', {name: 'Chapman Hall'})}
          onMouseOver={() => handleMouseOver(
            <>
            <pre>
              ~ Chapman Hall Ratings ~<hr/><br/>
              Cleanliness:   3/5 <br/>
              Accessibility: 4/5
            </pre>
            </>
          )}
        
          onMouseOut={handleMouseOut}
        />

        <Marker
          width={50}  // Anderson Hall
          anchor={[33.969873437650385, -117.3259158691591]}
          color={'hsl(60, 100%, 47%)'}
          onClick={() => navigation.navigate('Reviews', {name: 'Anderson Hall'})}
          onMouseOver={() => handleMouseOver(
            <>
            <pre>
              ~ Anderson Hall Ratings ~<hr/><br/>
              Cleanliness:   3/5 <br/>
              Accessibility: 4/5
            </pre>
            </>
          )}
        
          onMouseOut={handleMouseOut}
        />

        <Marker
          width={50}  // Entomology Museum
          anchor={[33.97007470718678, -117.32555183349648]}
          color={'hsl(60, 100%, 47%)'}
          onClick={() => navigation.navigate('Reviews', {name: 'Entomology Museum'})}
          onMouseOver={() => handleMouseOver(
            <>
            <pre>
              ~ Entomology Museum Ratings ~<hr/><br/>
              Cleanliness:   4/5 <br/>
              Accessibility: 4/5
            </pre>
            </>
          )}
        
          onMouseOut={handleMouseOut}
        />

        <Marker
          width={50}  // SOM Research
          anchor={[33.97056881915526, -117.32553421638364]}
          color={'hsl(60, 100%, 47%)'}
          onClick={() => navigation.navigate('Reviews', {name: 'SOM Research'})}
          onMouseOver={() => handleMouseOver(
            <>
            <pre>
              ~ SOM Research Ratings ~<hr/><br/>
              Cleanliness:   3/5 <br/>
              Accessibility: 4/5
            </pre>
            </>
          )}
        
          onMouseOut={handleMouseOut}
        />

        <Marker
          width={50}  // East L&Q
          anchor={[33.97045630804011, -117.32476261841252]}
          color={'hsl(60, 100%, 47%)'}
          onClick={() => navigation.navigate('Reviews', {name: 'East L&Q'})}
          onMouseOver={() => handleMouseOver(
            <>
            <pre>
              ~ East L&Q Ratings ~<hr/><br/>
              Cleanliness:   3/5 <br/>
              Accessibility: 4/5
            </pre>
            </>
          )}
        
          onMouseOut={handleMouseOut}
        />

        <Marker
          width={50}  // Entomology
          anchor={[33.97071414521058, -117.32634538295305]}
          color={'hsl(60, 100%, 47%)'}
          onClick={() => navigation.navigate('Reviews', {name: 'Entomology'})}
          onMouseOver={() => handleMouseOver(
            <>
            <pre>
              ~ Entomology Ratings ~<hr/><br/>
              Cleanliness:   3/5 <br/>
              Accessibility: 4/5
            </pre>
            </>
          )}
        
          onMouseOut={handleMouseOut}
        />

        <Marker
          width={50}  // Genomics
          anchor={[33.97153453105675, -117.32619276008063]}
          color={'hsl(60, 100%, 47%)'}
          onClick={() => navigation.navigate('Reviews', {name: 'Genomics'})}
          onMouseOver={() => handleMouseOver(
            <>
            <pre>
              ~ Genomics Ratings ~<hr/><br/>
              Cleanliness:   4/5 <br/>
              Accessibility: 4/5
            </pre>
            </>
          )}
        
          onMouseOut={handleMouseOut}
        />

        <Marker
          width={50}  // Boyden Laboratory
          anchor={[33.97111261923376, -117.32554834946234]}
          color={'hsl(60, 100%, 47%)'}
          onClick={() => navigation.navigate('Reviews', {name: 'Boyden Laboratory'})}
          onMouseOver={() => handleMouseOver(
            <>
            <pre>
              ~ Boyden Laboratory Ratings ~<hr/><br/>
              Cleanliness:   4/5 <br/>
              Accessibility: 4/5
            </pre>
            </>
          )}
        
          onMouseOut={handleMouseOut}
        />

        <Marker
          width={50}  // Campbell Hall
          anchor={[33.97168923106722, -117.3253957224082]}
          color={'hsl(60, 100%, 47%)'}
          onClick={() => navigation.navigate('Reviews', {name: 'Campbell Hall'})}
          onMouseOver={() => handleMouseOver(
            <>
            <pre>
              ~ Campbell Hall Ratings ~<hr/><br/>
              Cleanliness:   3/5 <br/>
              Accessibility: 4/5
            </pre>
            </>
          )}
        
          onMouseOut={handleMouseOut}
        />

        <Marker
          width={50}  // University Office 
          anchor={[33.971731422650215, -117.32498307534557]}
          color={'hsl(90, 100%, 40%)'}
          onClick={() => navigation.navigate('Reviews', {name: 'University Office'})}

          onMouseOver={() => handleMouseOver(
            <>
            <pre>
              ~ University Office Ratings ~<hr/><br/>
              Cleanliness:   4/5 <br/>
              Accessibility: 4/5
            </pre>
            </>
          )}
        
          onMouseOut={handleMouseOut}
        />

        <Marker
          width={50}  // Fawcett Laboratory
          anchor={[33.97152984290477, -117.32423408859408]}
          color={'hsl(60, 100%, 47%)'}
          onClick={() => navigation.navigate('Reviews', {name: 'Fawcett Laboratory'})}
       
          onMouseOver={() => handleMouseOver(
            <>
            <pre>
              ~ Fawcett Laboratory Ratings ~<hr/><br/>
              Cleanliness:   4/5 <br/>
              Accessibility: 4/5
            </pre>
            </>
          )}
        
          onMouseOut={handleMouseOut}
       />

        <Marker
          width={50}  // Orbach Library
          anchor={[33.974548794609056, -117.32445454526781]}
          color={'hsl(8, 100%, 50%)'}
          onClick={() => navigation.navigate('Reviews', {name: 'Orbach Library'})}
          onMouseOver={() => handleMouseOver(
            <>
            <pre>
              ~ Orbach Library Ratings ~<hr/><br/>
              Cleanliness:   3/5 <br/>
              Accessibility: 4/5
            </pre>
            </>
          )}
        
          onMouseOut={handleMouseOut}
        />

        <Marker
          width={50}  // Chemical Sciences
          anchor={[33.974464415345345, -117.32306114714689]}
          color={'hsl(60, 100%, 47%)'}
          onClick={() => navigation.navigate('Reviews', {name: 'Chemical Sciences'})}
          onMouseOver={() => handleMouseOver(
            <>
            <pre>
              ~ Chemical Sciences Ratings ~<hr/><br/>
              Cleanliness:   4/5 <br/>
              Accessibility: 4/5
            </pre>
            </>
          )}
        
          onMouseOut={handleMouseOut}
        />

        <Marker
          width={50}  // School of Medicine Education Building
          anchor={[33.97380812993979, -117.32398536872923]}
          color={'hsl(90, 100%, 40%)'}
          onClick={() => navigation.navigate('Reviews', {name: 'School of Medicine Education Building'})}
          onMouseOver={() => handleMouseOver(
            <>
            <pre>
              ~ School of Medicine Education Ratings ~<hr/><br/>
              Cleanliness:   4/5 <br/>
              Accessibility: 4/5
            </pre>
            </>
          )}
        
          onMouseOut={handleMouseOut}
        />

        <Marker
          width={50}  // Physics
          anchor={[33.97457692065917, -117.32540985627634]}
          color={'hsl(60, 100%, 47%)'}
          onClick={() => navigation.navigate('Reviews', {name: 'Physics'})}
          onMouseOver={() => handleMouseOver(
            <>
            <pre>
              ~ Physics Ratings ~<hr/><br/>
              Cleanliness:   3/5 <br/>
              Accessibility: 4/5
            </pre>
            </>
          )}
        
          onMouseOut={handleMouseOut}
        />

        <Marker
          width={50}  // Pierce Hall
          anchor={[33.97423471599278, -117.3272102511631]}
          color={'hsl(60, 100%, 47%)'}
          onClick={() => navigation.navigate('Reviews', {name: 'Pierce Hall'})}
          onMouseOver={() => handleMouseOver(
            <>
            <pre>
              ~ Pierce Hall Ratings ~<hr/><br/>
              Cleanliness:   3/5 <br/>
              Accessibility: 4/5
            </pre>
            </>
          )}
        
          onMouseOut={handleMouseOut}
        />

        <Marker
          width={50}  // Geology
          anchor={[33.97443628872918, -117.3262238495412]}
          color={'hsl(60, 100%, 47%)'}
          onClick={() => navigation.navigate('Reviews', {name: 'Geology'})}
          onMouseOver={() => handleMouseOver(
            <>
            <pre>
              ~ Geology Ratings ~<hr/><br/>
              Cleanliness:   3/5 <br/>
              Accessibility: 4/5
            </pre>
            </>
          )}
        
          onMouseOut={handleMouseOut}
        />

        <Marker
          width={50}  // Science Labs 1
          anchor={[33.97391126236491, -117.32617862686456]}
          color={'hsl(60, 100%, 47%)'}
          onClick={() => navigation.navigate('Reviews', {name: 'Science Labs 1'})}
          onMouseOver={() => handleMouseOver(
            <>
            <pre>
              ~ Science Labs 1 Ratings ~<hr/><br/>
              Cleanliness:   3/5 <br/>
              Accessibility: 4/5
            </pre>
            </>
          )}
        
          onMouseOut={handleMouseOut}
        />

        <Marker
          width={50}  // Winston Chung Hall
          anchor={[33.9754510947876, -117.32582341661066]}
          color={'hsl(90, 100%, 40%)'}
          onClick={() => navigation.navigate('Reviews', {name: 'Winston Chung Hall'})}
          onMouseOver={() => handleMouseOver(
            <>
            <pre>
              ~ Winston Chung Hall Ratings ~<hr/><br/>
              Cleanliness:   4/5 <br/>
              Accessibility: 4/5
            </pre>
            </>
          )}
        
          onMouseOut={handleMouseOut}
        />

        <Marker
          width={50}  // Bourns Hall
          anchor={[33.975460373627, -117.32692749538892]}
          color={'hsl(90, 100%, 40%)'}
          onClick={() => navigation.navigate('Reviews', {name: 'Bourns Hall'})}
          onMouseOver={() => handleMouseOver(
            <>
            <pre>
              ~ Bourns Hall Ratings ~<hr/><br/>
              Cleanliness:   4/5 <br/>
              Accessibility: 4/5
            </pre>
            </>
          )}
        
          onMouseOut={handleMouseOut}
        />

        <Marker
          width={50}  // HUB
          anchor={[33.974311512641826, -117.32874186187665]}
          color={'hsl(90, 100%, 40%)'}
          onClick={() => navigation.navigate('Reviews', {name: 'HUB'})}
          onMouseOver={() => handleMouseOver(
            <>
            <pre>
              ~ HUB Ratings ~<hr/><br/>
              Cleanliness:   4/5 <br/>
              Accessibility: 4/5
            </pre>
            </>
          )}
        
          onMouseOut={handleMouseOut}
        />

        <Marker
          width={50}  // Student Services
          anchor={[33.97419607342888, -117.32978318922721]}
          color={'hsl(90, 100%, 40%)'}
          onClick={() => navigation.navigate('Reviews', {name: 'Student Services'})}
          
          onMouseOver={() => handleMouseOver(
            <>
            <pre>
              ~ Student Services Ratings ~<hr/><br/>
              Cleanliness:   4/5 <br/>
              Accessibility: 4/5
            </pre>
            </>
          )}
        
          onMouseOut={handleMouseOut}
        />

        <Marker
          width={50}  // Costo Hall
          anchor={[33.97423118941484, -117.3292268814447]}
          color={'hsl(60, 100%, 47%)'}
          onClick={() => navigation.navigate('Reviews', {name: 'Costo Hall'})}
          onMouseOver={() => handleMouseOver(
            <>
            <pre>
              ~ Costo Hall Ratings ~<hr/><br/>
              Cleanliness:   3/5 <br/>
              Accessibility: 4/5
            </pre>
            </>
          )}
        
          onMouseOut={handleMouseOut}
        />

        <Marker
          width={50}  // Spieth Hall
          anchor={[33.972837215205715, -117.3265542910039]}
          color={'hsl(60, 100%, 47%)'}
          onClick={() => navigation.navigate('Reviews', {name: 'Spieth Hall'})}
          onMouseOver={() => handleMouseOver(
            <>
            <pre>
              ~ Spieth Hall Ratings ~<hr/><br/>
              Cleanliness:   3/5 <br/>
              Accessibility: 4/5
            </pre>
            </>
          )}
        
          onMouseOut={handleMouseOut}
        />

        <Marker
          width={50}  // Batchelor Hall
          anchor={[33.972593329627976, -117.3251002359208]}
          color={'hsl(60, 100%, 47%)'}
          onClick={() => navigation.navigate('Reviews', {name: 'Batchelor Hall'})}
          onMouseOver={() => handleMouseOver(
            <>
            <pre>
              ~ Batchelor Hall Ratings ~<hr/><br/>
              Cleanliness:   3/5 <br/>
              Accessibility: 4/5
            </pre>
            </>
          )}
        
          onMouseOut={handleMouseOut}
        />

        <Marker
          width={50}  // Life Sciences
          anchor={[33.97228402373831, -117.32658721794732]}
          color={'hsl(60, 100%, 47%)'}
          onClick={() => navigation.navigate('Reviews', {name: 'Life Sciences'})}
          onMouseOver={() => handleMouseOver(
            <>
            <pre>
              ~ Life Sciences Ratings ~<hr/><br/>
              Cleanliness:   3/5 <br/>
              Accessibility: 4/5
            </pre>
            </>
          )}
        
          onMouseOut={handleMouseOut}
        />

        <Marker
          width={50}  // Biological Sciences
          anchor={[33.972265388862475, -117.32608175581554]}
          color={'hsl(60, 100%, 47%)'}
          onClick={() => navigation.navigate('Reviews', {name: 'Biological Sciences'})}
          onMouseOver={() => handleMouseOver(
            <>
            <pre>
              ~ Biological Sciences Ratings ~<hr/><br/>
              Cleanliness:   4/5 <br/>
              Accessibility: 4/5
            </pre>
            </>
          )}
        
          onMouseOut={handleMouseOut}
        />

        <Marker
          width={50}  // Webber Hall
          anchor={[33.97353442674561, -117.32536279367079]}
          color={'hsl(60, 100%, 47%)'}
          onClick={() => navigation.navigate('Reviews', {name: 'Webber Hall'})}
          onMouseOver={() => handleMouseOver(
            <>
            <pre>
              ~ Webber Hall Ratings ~<hr/><br/>
              Cleanliness:   3/5 <br/>
              Accessibility: 4/5
            </pre>
            </>
          )}
        
          onMouseOut={handleMouseOut}
        />

        <Marker
          width={50}  // Student Success Center
          anchor={[33.97420914473526, -117.3305187519793]}
          color={'hsl(90, 100%, 40%)'}
          onClick={() => navigation.navigate('Reviews', {name: 'SSC'})}
          onMouseOver={() => handleMouseOver(
            <>
            <pre>
              ~ SSC Ratings ~<hr/><br/>
              Cleanliness: 4/5 <br/>
              Neatness:    4/5
            </pre>
            </>
          )}
          
          onMouseOut={handleMouseOut}
         />
        <Marker
          width={50}  // Boyce Hall
          anchor={[33.973504419864376, -117.32491567420728]}
          color={'hsl(60, 100%, 47%)'}
          onClick={() => navigation.navigate('Reviews', {name: 'Boyce Hall'})}
          onMouseOver={() => handleMouseOver(
            <>
            <pre>
              ~ Boyce Hall Ratings ~<hr/><br/>
              Cleanliness:   3/5 <br/>
              Accessibility: 4/5
            </pre>
            </>
          )}
        
          onMouseOut={handleMouseOut}
        />

        <TouchableOpacity 
          disabled={true}
          style={styleSheet.Legend}
          underlayColor='#3b83f7'>
          <Text style={styleSheet.LegendText}>
            <u>Legend:</u>{'\n'}{'\n'}
            <View style={{ backgroundColor: 'lightgreen', borderRadius: 3, width: 12, height: 12, marginRight: 5 }}>
              <Text style={{ color: 'white' }}> </Text>
            </View>
            Clean{'\n'}
            <View style={{ backgroundColor: 'yellow', borderRadius: 3, width: 12, height: 12, marginRight: 5 }}>
              <Text style={{ color: 'black' }}> </Text>
            </View>
            Moderate{'\n'}
            <View style={{ backgroundColor: 'red', borderRadius: 3, width: 12, height: 12, marginRight: 5 }}>
              <Text style={{ color: 'white' }}> </Text>
            </View>
            Unclean
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={styleSheet.AddReviewButton}
            underlayColor='#3b83f7'>
            <Text style={styleSheet.AddReviewText}>Add{"\n"}Review</Text>
        </TouchableOpacity>
      </Map>
    </div>      
  );
}

export default HomeScreen;