/**
 * Initialize your data structure here.
        @param width - screen width
        @param height - screen height 
        @param food - A list of food positions
        E.g food = [[1,1], [1,0]] means the first food is positioned at [1,1], the second is at [1,0].
 * @param {number} width
 * @param {number} height
 * @param {number[][]} food
 */
var SnakeGame = function (width, height, food) {
  this.length = 1;
  this.path = ["0,0"];
  this.m = height;
  this.n = width;
  this.foods = food;
};

/**
 * Moves the snake.
        @param direction - 'U' = Up, 'L' = Left, 'R' = Right, 'D' = Down 
        @return The game's score after the move. Return -1 if game over. 
        Game over when snake crosses the screen boundary or bites its body. 
 * @param {string} direction
 * @return {number}
 */
SnakeGame.prototype.move = function (direction) {
  let dir;
  switch (direction) {
    case "L":
      dir = [0, -1];
      break;
    case "R":
      dir = [0, 1];
      break;
    case "U":
      dir = [-1, 0];
      break;
    case "D":
      dir = [1, 0];
  }
  const cur = this.path[0].split(",").map((i) => Number(i));
  const x = cur[0] + dir[0];
  const y = cur[1] + dir[1];
  if (!(x >= 0 && y >= 0 && x < this.m && y < this.n)) {
    return -1;
  }
  const food = this.foods[this.length - 1] || [-1, -1];
  if (x === food[0] && y === food[1]) {
    if (this.path.includes(`${x},${y}`)) return -1;
    this.length++;
    this.path.unshift([x, y].join(","));
  } else {
    if (
      this.path.includes(`${x},${y}`) &&
      this.path[this.path.length - 1] !== `${x},${y}`
    )
      return -1;
    this.path.pop();
    this.path.unshift([x, y].join(","));
  }
  return this.length - 1;
};

/**
 * Your SnakeGame object will be instantiated and called as such:
 * var obj = new SnakeGame(width, height, food)
 * var param_1 = obj.move(direction)
 */
const snake = new SnakeGame(3, 2, [
  [1, 2],
  [0, 1],
]);
console.log(snake.move("R"));
console.log(snake.move("D"));
console.log(snake.move("R"));
console.log(snake.move("U"));
console.log(snake.move("L"));
console.log(snake.move("U"));
