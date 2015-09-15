// Comment terrain terrain tarantula
function Tile (x, y) {
this.x = x;
this.y = y;
this.height = Math.floor((Math.random() * 2) + 0);


    var randomType = Math.floor((Math.random() * 2) + 0);
        if (randomType === 0) {this.type = "grass"};
        if (randomType === 1) {this.type = "rocks"};
        if (randomType === 2) {this.type = "water"};
            
    var randomCondition = Math.floor((Math.random() * 2) + 0);
        if (randomCondition === 0) {this.condition = "burning"};
        if (randomCondition === 1) {this.condition = "normal"};
        if (randomCondition === 2) {this.condition = "frozen"};
        

}
function freeze () {
    
        if (this.condition === "burning") {this.condition= "normal"};
        if (this.condition  === "normal") {this.condition = "frozen"};
        if (this.condition  === "frozen") {this.height += 1};
}

function burn () {
    
        if (this.condition === "burning" && this.height > 0) {this.height -= 1};
        if (this.condition  === "normal") {this.condition = "frozen"};
        if (this.condition  === "frozen") {this.height += 1};
}

function createBoard(){
   for(var i = 0; i < 20; i++){
       terrainBoard[i] = [];
       for(var j = 0; j < 20; j++){
           terrainBoard[i][j] = new Tile(i,j);
       }
   }
}

