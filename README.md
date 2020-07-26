# Tic Tac Toe

> This project is a part of learning ReactJs. Through this project I tried to understand concepts of state management and component re-rendering on state changes,etc.

**Installed packages**
1. [react-icons](https://react-icons.github.io/react-icons/)
2. [reactstrap](https://reactstrap.github.io/)
3. [react-toastify](https://www.npmjs.com/package/react-toastify)

---

### Component Details

1. **App**
   - Acts as parent component which holds the main logic 
2. **Icon**
   - used for rendering the icons based on the name property passed by parent ie App component
---


### States

1. **isCross**:
   - Decides whose turn it is. It's initial value is **null** just because we want to re-render the app when the user clicks on reset button
   - The value of isCross switches between **true** and **false** once the game starts
   - If its initial value is set to false then the component won't render if it's current value is false when the user clicks on RESET button and thus it would give unexpected results.
2. **winMessage**:
   - The winMessage is set when the winner is decided
---

### Functions used
1. **Resets the game**
``` javascript
const ResetGame = () => {    
    setIsCross(null)
    setWinMessage('')
    itemArray.fill('empty',0,9)
}
```
2. **Changes the item based on the value of isCross**
 ```javascript
const changeItem = itemNumber => {
    if (winMessage) {
      // ...
    }
    if (itemArray[itemNumber] === 'empty') {
      itemArray[itemNumber] = isCross ? 'cross' : 'circle'; 
      setIsCross(!isCross);
    } else {
      // ...
    }
}
```

---