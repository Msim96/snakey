
//defining global variables for snake and grid size
canvasSize = 300;
blockSize = 10;

//Creating Canvas class
class Canvas{
    constructor(size, blockSize, strokeColour = 'black', fillColour = 'white', canvasName = 'gameCanvas'){
        this.size = size;
        this.blockSize = blockSize;
        this.strokeColour = strokeColour;
        this.fillColour = fillColour;
        this.canvasName = canvasName;
    }
    //Method to clear the canvas
    clearCanvas(){
        this.ctx.fillStyle = this.fillColour;
        this.ctx.fillRect(0,0,300,300);
        this.ctx.strokeStyle = this.strokeColour;
        this.ctx.lineWidth = 1;
        this.ctx.strokeRect(0,0, this.size, this.size);
    }

    //getting canvas context
    getCanvas(){
        const canvas = document.getElementById(this.canvasName);
        this.ctx = canvas.getContext('2d');
    }
}

//creating snake class
class Snake {
    constructor(snakeArr, canvas, size = 3){
        this.snakeArr = snakeArr;
        this.canvas = canvas;
        this.size = size;
    };
    //Methods for snake 

    //method to draw sections of a snake
    drawSnakePart(snakePart){
        // console.log('drawSnakePart Activated...')
        this.canvas.fillStyle = 'lightgreen';
        this.canvas.strokeStyle = 'darkgreen';
        this.canvas.fillRect(snakePart.x, snakePart.y, blockSize, blockSize);
        this.canvas.strokeRect(snakePart.x, snakePart.y, blockSize, blockSize);
    };
    
    //Drawing the entire snake
    drawSnake(){
        // console.log('drawSnake Activated...')
        this.snakeArr.forEach(curr => {
            // this.canvas.fillStyle = 'lightgreen';
            // this.canvas.strokeStyle = 'darkgreen';
            // this.canvas.fillRect(curr.x, curr.y, blockSize, blockSize);
            // this.canvas.strokeRect(curr.x, curr.y, blockSize, blockSize);
            this.drawSnakePart(curr);
        });
    };

    //Moving the snake
    moveSnake(dx,dy){
        //Creating a new head for the snake
        const head = {x: snakeArr[0].x + dx, y: snakeArr[0].y + dy};
        this.snakeArr.unshift(head);
        this.snakeArr.pop();
    };
}
console.log('script running');

//Creating canvas object and drawing empty canvas
const canvas = new Canvas(canvasSize, blockSize);
canvas.getCanvas();

//Coordinates of the snake
let snakeArr = [  {x: 150, y: 150},  {x: 140, y: 150},  {x: 130, y: 150},  {x: 120, y: 150},  {x: 110, y: 150},];
//Creating snake object 
const snake = new Snake(snakeArr, canvas.ctx, 10);

function main(){
    setTimeout(() => {
        canvas.clearCanvas();
        snake.moveSnake(10, 0);
        snake.drawSnake();
        main();
    }, 100);
};


main();
