// JavaScript Document
let i = 0; //current slide
let j = 4; //total slides

const dots = document.querySelectorAll(".dot-container button");
const images = document.querySelectorAll(".image-container img");


function next(){
	document.getElementById("content" +(i+1)).classList.remove("active");
	i = (j + i + 1) % j;
	document.getElementById("content" + (i+1)).classList.add("active");
	indicator( i+ 1 );
	
}

function prev(){
	document.getElementById("content" + (i+1)).classList.remove("active");
	i = (j + i - 1) % j;
	document.getElementById("content" + (i+1)).classList.add("active");
	indicator(i+ 1)
}

function indicator(num){
	dots.forEach(function(dot){
		dot.style.backgroundColor = "transparent";
	});
	
	document.querySelector(".dot-container button:nth-child(" + num + ")").style.backgroundColor = "#8052ec";
}

function dot(index){
	images.forEach(function(image){
		image.classList.remove("active");
	});
	document.getElementById("content" + index).classList.add("active");
	i = index - 1;
	indicator(index)
}

document.onkeydown = function(e) {
            switch (e.keyCode) {
                case 37:
                    prev(-1);
                    break;
                case 38:
                    prev(-1);
                    break;
                case 39:
                    next(1);
                    break;
                case 40:
                    next(1);
                    break;
            }
        };