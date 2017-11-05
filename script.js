 var speedX=2 
 var yVal = 100
 var speedY =12
 var targetY= 115
 var points=0


function mousePressed() {
  loop();
}

function mouseReleased() {
  noLoop();
}

function preload() {
 img=loadImage("bow6.png")
 img2=loadImage("target.jpg")
 img3=loadImage("arch.png")
}

function setup() {
 createCanvas(windowWidth, windowHeight);
}

function draw() {
 clear() 
  var x = mouseX
  var xVal = mouseX - 15
  var yVal = mouseY - 37
  targetY = targetY+speedY
  

   //positioning 
   
  image(img, xVal ,yVal + 24, 90, 25)
  image(img2, windowWidth - 130, targetY, 100, 250)
  image(img3, 230, 210, 20, 200)
   
  
   //strings
   line(230.5,211.5,x,mouseY)
  line(230.5,407.5,x,mouseY)
   
    
  //target bouncing off walls
 
   if(targetY>windowHeight-100) {
      speedY = speedY *-1
      
    }
     else if(targetY<0) {
    speedY = speedY*-1
     }
    
    if ( mouseIsPressed == false )
    {
     
     clear()
      
      var xVal = mouseX - 15
      var xPosition= (windowWidth - xVal-150) + speedX
      yVal= yVal+37
      
  
      
     image(img2, windowWidth - 130, targetY, 100, 250)
     //image(img, xVal ,yVal, 90, 25)
     image(img3, 230, 210, 20, 200)
      
     line(230.5,211.5,x,mouseY)
     line(230.5,407.5,x,mouseY)
     image(img2, windowWidth - 130, targetY, 100, 250)
     image(img, xPosition ,yVal, 90, 25) 
     image(img3, 230, 210, 20, 200)
 
     if((yVal - targetY < 250) && (yVal - targetY > 0 ) && (xVal-(windowWidth-130) <100)) //&& (xVal-(windowWidth - 30)>0))
     {
      console.log(yVal-targetY)
      points = points +10
      speedY = abs(speedY) + 3
      text(points, 145, 30); 
      xVal=0
      yVal=0
      // text("The number of points is: ", 10, 30);
      // text(points, 10, 50);
     }
     
      text("The number of points is: ", 10, 30);
      text(points, 145, 30);
      
      
     }
     
}