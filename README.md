# Tic Tac Toe with computer

> This project is a part of learning ReactJs. Through this project I tried to understand concepts of state management and component re-rendering on state changes,etc.

### Demo
[Live Demo on github](https://ashutosh4398.github.io/React-TicTacToe/)

### Installed packages
1. [react-icons](https://react-icons.github.io/react-icons/)
2. [reactstrap](https://reactstrap.github.io/)
3. [react-toastify](https://www.npmjs.com/package/react-toastify)

---

### Component Details

1. **App**
   - Acts as parent component which holds the main logic 
2. **Icon**
   - Used for rendering the icons based on the name property passed by parent ie App component
---


### States

1. **isCross**:
   - Decides whose turn it is. It's initial value is **null** just because we want to re-render the app when the user clicks on reset button
   - The value of `isCross` switches between **true** and **false** once the game starts
   - If its initial value is set to **false** then the component won't render if it's current value is false when the user clicks on RESET button and thus it would give unexpected results
2. **winMessage**:
   - The `winMessage` is set when the winner is decided

3. **circle**:
   - Maintains the count of number of times circle(user) won

4. **cross**:
   - Maintains the count of number of times cross(computer) won
---


### Winning Logic

| 0 | 1 | 2 |
|---|---|---|
| 3 | 4 | 5 |
| 6 | 7 | 8 |

Check for equality at positions [0 1 2], [3 4 5], [6 7 8], [0 3 6], [1 4 7], [2 5 8], [0 4 8], [2 4 6]

---

### How to use

```
npm install
```
```
npm start
```
