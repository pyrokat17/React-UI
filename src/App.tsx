import React from 'react';
import {Resize} from "./lib"
function App() {
  return (
    <div style={{height: "100vh", width: "100vw", backgroundColor: "grey"}}>
      <Resize color="red" startingWidth={250} startingHeight={500}>
        
        {/* <button>Submit</button> */}
      </Resize>
    </div>
  );
}

export default App;
