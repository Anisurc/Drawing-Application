// LineToTool constructor function - creates a tool for drawing straight lines
function LineToTool(){
	// Set the tool's icon and name
	this.icon = "assets/lineTo.jpg";
	this.name = "LineTo";

	// Variables to track the line drawing state
	var startMouseX = -1;  // Starting X coordinate of the line
	var startMouseY = -1;  // Starting Y coordinate of the line
	var drawing = false;   // Flag to track if we're currently drawing

	this.draw = function(){
		// When mouse is pressed, we either start a new line or continue drawing
		if(mouseIsPressed){
			// If this is the first press, set the starting point
			if(startMouseX == -1){
				startMouseX = mouseX;
				startMouseY = mouseY;
				drawing = true;
				// Load the current pixel state - this captures the current canvas state
				// which is important for tools like the mirror tool that need to know
				// what's already been drawn
				loadPixels();
			}
			// If we're already drawing, update the line to the current mouse position
			else{
				// Update the pixels to show the current state
				updatePixels();
				// Draw a line from the starting point to the current mouse position
				line(startMouseX, startMouseY, mouseX, mouseY);
			}
		}
		// When mouse is released, reset the drawing state
		else if(drawing){
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
		}
	};
}
