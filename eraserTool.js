function EraserTool() {
    this.name = "eraserTool";
    this.icon = "assets/eraser.jpg";
    this.strokeSize = 20;

    this.draw = function() {
        if (mouseIsPressed) {
            // Set the stroke color to white (eraser)
            stroke(255);
            strokeWeight(this.strokeSize);
            // Draw a line from previous mouse position to current position
            line(pmouseX, pmouseY, mouseX, mouseY);
        }
    };

    this.populateOptions = function() {
        // Create a slider for eraser size
        select(".options").html(
            "<label for='eraserSize'>Eraser Size: </label>" +
            "<input type='range' id='eraserSize' min='1' max='50' value='" + this.strokeSize + "'>"
        );
        
        // Add event listener for the slider
        select("#eraserSize").input(function() {
            eraserTool.strokeSize = this.value();
        });
    };
} 
