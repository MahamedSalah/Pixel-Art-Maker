// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
$(function(){
var found = 0; // to check first draw of grid
var table = document.getElementById("pixel_canvas");
var height,width;
var x; // counter for the cells in the grid
stack = [];
function makeGrid() {
        found=1; // make found equal 1 as it is a new grid
		x=0;  // start the cells from 0
        for(var i=0;i<height;i++){
            const row = document.createElement("tr"); // create new row
            row.setAttribute("id" , "tr"+i); // set id for this row
            for(var j=0;j<width;j++) {
                 var cell = document.createElement("td"), // create table data
                 text = document.createTextNode(""); // make empty text
                 cell.setAttribute("id" , x); // set id for this cell
                 cell.appendChild(text);
                 row.appendChild(cell); // append cell to the row
				 x++;
            }
            table.appendChild(row); //append table row to the table
        } 
}

function check_clicked_cell (){ // function to check if click on the cell color it
	for(var i= 0; i<x ;i++){
        $("#"+i).click(function(){
            var color = document.getElementById("colorPicker").value; // take the color 
            this.style.backgroundColor = color; // assign the color to the backgroundColor
			stack.push($(this).attr("id"));  // push in stack 
        }); 
     }  	
}

function remove_grid(){
	 if(found==1) // if found privous gird remove it
        {    
            for(var i=0;i<height;i++)
            {
                var row = document.getElementById("tr"+i);
                table.removeChild(row);
            }
        }
		stack = [];
}
function check_stack() {
	$("#undo").click(function(e){
        e.preventDefault();
        if(stack.length>0)
        {
            var val = stack[stack.length-1];
            stack.pop();
            $("#"+val).css("background","none");
        }
    });
}
$("#submit").click(function(e){
        e.preventDefault();
		
       	remove_grid(); // remove privous grid if found
		
        height = document.getElementById("input_height").value;
        width = document.getElementById("input_width").value;
		
        makeGrid();
		
        check_clicked_cell(); // if clicked on any cell
		
		check_stack();
    });
});







