// SprayCanTool constructor function - creates a tool for spray painting effect
function SprayCanTool() {
    // Set the tool's icon and name
    this.icon = "assets/sprayCan.jpg";
    this.name = "sprayCanTool";
    
    // Properties for controlling the spray effect
    this.points = 13;  // Number of points to draw per frame
    this.spread = 10;  // Maximum distance from mouse position to spread points
    
    // Draw function that creates the spray paint effect
    this.draw = function() {
        // If mouse is pressed, create the spray effect
        if(mouseIsPressed) {
            // Draw multiple points in a random pattern around the mouse position
            for(var i = 0; i < this.points; i++) {
                // Calculate random position within the spread radius
                point(random(mouseX - this.spread, mouseX + this.spread), 
                    random(mouseY - this.spread, mouseY + this.spread));
            }
        }
    }
} 