import React from 'react';
import ColorPicker from './components/ColorPicker';
import './App.css';

const App = () => {
  const colors = ['red', 'green', 'blue', 'yellow', 'pink','aqua','orange','purple','lightpink','darkgreen',];

  return (

    <div class="outer">
          <h1 class="text">Color Picker</h1>
         
        <div class="inner">
          
            <ColorPicker colors={colors} />
        </div>
    </div>
      

  );
};

export default App;
