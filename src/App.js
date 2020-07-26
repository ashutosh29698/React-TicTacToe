import React, {useState} from 'react';
import Icon from './components/Icon';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const itemArray = new Array(9).fill('empty');

const App = () => {

  const [isCross,setIsCross] = useState(null)
  const [winMessage, setWinMessage] = useState('')

  console.log('rendered')

  const ResetGame = () => {    
    
    setIsCross(null)
    setWinMessage('')
    itemArray.fill('empty',0,9)
    console.log(itemArray)
  }

  const changeItem = itemNumber => {
    if (winMessage) {
      // ... notify
    }
    if (itemArray[itemNumber] === 'empty') {
      itemArray[itemNumber] = isCross ? 'cross' : 'circle'; 
      setIsCross(!isCross);
      console.log(itemArray)
    } else {
      // .. notify
    }
  }

  return (
          <div className="App">
            <div className="grid-container">
              {itemArray.map((item,index) => (
                <div className="grid-items" onClick={() => changeItem(index)} key={index}>
                  <Icon name={item} />
                </div>
              ))}
            </div>
            <button 
            className="btn btn-outline-warning d-block my-5 px-5 py-2"
            onClick={ResetGame}
            >RESET</button>
          </div>
  );
};

export default App;