// Global variables that will store the toolbox colour palette
// and the helper functions.
var toolbox = null;
var colourP = null;
var helpers = null;

//spray can object literal
sprayCan = {
    name: "sprayCanTool",
    icon: "assets/sprayCan.jpg",
    points: 13,
    spread: 10,
    draw: function(){
        //if the mouse is pressed paint on the canvas
        //spread describes how far to spread the paint from the mouse pointer
        //points holds how many pixels of paint for each mouse press.
        if(mouseIsPressed){
            for(var i = 0; i < this.points; i++){
                point(random(mouseX-this.spread, mouseX + this.spread), 
                    random(mouseY-this.spread, mouseY+this.spread));
            }
        }
    }
};

function setup() {

	//create a canvas to fill the content div from index.html
	canvasContainer = select('#content');
	var c = createCanvas(canvasContainer.size().width, canvasContainer.size().height);
	c.parent("content");

	//create helper functions and the colour palette
    helpers = new HelperFunctions();
	colourP = new ColourPalette();

	//create a toolbox for storing the tools
	toolbox = new Toolbox();

	//add the tools to the toolbox.
	toolbox.addTool(new FreehandTool());
	toolbox.addTool(new LineToTool());
	toolbox.addTool(new SprayCanTool());
	toolbox.addTool(new mirrorDrawTool());
	background(255);

}

function draw() {
	//call the draw function from the selected tool.
	//hasOwnProperty is a javascript function that tests
	//if an object contains a particular method or property
	//if there isn't a draw method the app will alert the user
	if (toolbox.selectedTool.hasOwnProperty("draw")) {
		toolbox.selectedTool.draw();
	} else {
		alert("it doesn't look like your tool has a draw method!");
	}
// Global variables that will store the toolbox colour palette
// and the helper functions.
var toolbox = null;
var colourP = null;
var helpers = null;

// Undo/Redo stacks
var undoStack = [];
var redoStack = [];
var maxStackSize = 50;

// Function to save current canvas state
function saveCanvasState() {
    undoStack.push(get());
    if (undoStack.length > maxStackSize) {
        undoStack.shift();
    }
    // Clear redo stack when new action is performed
    redoStack = [];
}

// Function to undo last action
function undo() {
    if (undoStack.length > 0) {
        redoStack.push(get());
        if (redoStack.length > maxStackSize) {
            redoStack.shift();
        }
        let previousState = undoStack.pop();
        image(previousState, 0, 0);
    }
}

// Function to redo last undone action
function redo() {
    if (redoStack.length > 0) {
        undoStack.push(get());
        if (undoStack.length > maxStackSize) {
            undoStack.shift();
        }
        let nextState = redoStack.pop();
        image(nextState, 0, 0);
    }
}

//spray can object literal
sprayCan = {
    name: "sprayCanTool",
    icon: "assets/sprayCan.jpg",
    points: 13,
    spread: 10,
    draw: function(){
        if(mouseIsPressed){
            for(var i = 0; i < this.points; i++){
                point(random(mouseX-this.spread, mouseX + this.spread), 
                    random(mouseY-this.spread, mouseY+this.spread));
            }
        }
    }
};

function setup() {
    //create a canvas to fill the content div from index.html
    canvasContainer = select('#content');
    var c = createCanvas(canvasContainer.size().width, canvasContainer.size().height);
    c.parent("content");

    //create helper functions and the colour palette
    helpers = new HelperFunctions();
    colourP = new ColourPalette();

    //create a toolbox for storing the tools
    toolbox = new Toolbox();

    //add the tools to the toolbox.
    toolbox.addTool(new FreehandTool());
    toolbox.addTool(new LineToTool());
    toolbox.addTool(new SprayCanTool());
    toolbox.addTool(new mirrorDrawTool());
    toolbox.addTool(new EraserTool());
    
    // Add keyboard shortcuts for undo/redo
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey || e.metaKey) {
            if (e.key === 'z') {
                e.preventDefault();
                if (e.shiftKey) {
                    redo();
                } else {
                    undo();
                }
            } else if (e.key === 'y') {
                e.preventDefault();
                redo();
            }
        }
    });

    background(255);
}

function draw() {
    //call the draw function from the selected tool.
    if (toolbox.selectedTool.hasOwnProperty("draw")) {
        toolbox.selectedTool.draw();
    } else {
        alert("it doesn't look like your tool has a draw method!");
    }
}

// Add mouseReleased event to save state after drawing
function mouseReleased() {
    saveCanvasState();
}
