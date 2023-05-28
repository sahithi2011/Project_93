var canvas = new fabric.Canvas('myCanvas');


block_y=1;
block_x=1;

block_image_width = 250;
block_image_height = 380;

var block_image_object= "";

function new_image(get_image){
	fabric.Image.fromURL(get_image, function(Img){
		block_image_object= Img;
		block_image_object.scaleToWidth(block_image_width);
		block_image_object.scaleToHeight(block_image_height);
		block_image_object.set({
			top:block_y,
			left:block_x
		});
		canvas.add(block_image_object);

	});

	}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
	
	if (keyPressed == '82'){
		block_x = 10;
		new_image('red.jpg');
		console.log("R");
	}

	if (keyPressed == '71'){
		block_x = 250;
		new_image('green.png');
		console.log("G");
	}
	
	if (keyPressed == '89'){
		block_x = 400;
		new_image('yellow.png');
		console.log("Y");
	}

	if (keyPressed == '80'){
		block_x = 650;
		new_image('pink.png');
		console.log("P");
	}

	if (keyPressed == '66'){
		block_x = 750;
		new_image('blue.png');
		console.log("B");
	}
	
}

