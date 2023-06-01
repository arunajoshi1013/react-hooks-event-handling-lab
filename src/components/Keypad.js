// Code Keypad Component Here
import React from 'react'; 

function handleInputChange()
{
    console.log('Entering password...');
  };

function Keypad (){
    return (
        <div>
            <input type="password" onChange={handleInputChange} />
      <button>Submit</button>
            </div>
    )
}

export default Keypad;