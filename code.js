var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["08eb1ef2-3657-4cff-8181-76658f79ad37","ae14964b-a93e-4fdd-9f03-895a2e302f61"],"propsByKey":{"08eb1ef2-3657-4cff-8181-76658f79ad37":{"name":"car1_1","sourceUrl":null,"frameSize":{"x":30,"y":15},"frameCount":1,"looping":true,"frameDelay":12,"version":"25SnXzoVUjZU.jSJMOXCH0izGI1EZZ5C","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":15},"rootRelativePath":"assets/08eb1ef2-3657-4cff-8181-76658f79ad37.png"},"ae14964b-a93e-4fdd-9f03-895a2e302f61":{"name":"green_shirt_books_1","sourceUrl":null,"frameSize":{"x":12,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"z1vFxFKgl9XsYRtZPcLp604PlhBlFZrX","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":12,"y":30},"rootRelativePath":"assets/ae14964b-a93e-4fdd-9f03-895a2e302f61.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var life = 0;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;

  boundary1 = createSprite(190,120,420,3);
  boundary2 = createSprite(190,260,420,3);
  
  sam = createSprite(20,190,13,13);
  sam.shapeColor = "green";
sam.setAnimation("green_shirt_books_1");
  
  car1 = createSprite(100,130,10,10);
  car1.shapeColor = "red";
car1.setAnimation("car1_1");

  car2 = createSprite(215,130,10,10);
  car2.shapeColor = "red";
car2.setAnimation("car1_1");
  car3 = createSprite(165,250,10,10);
  car3.shapeColor = "red";
car3.setAnimation("car1_1");
  car4 = createSprite(270,250,10,10);
  car4.shapeColor = "red";
car4.setAnimation("car1_1");
  
 
//add the velocity to make the car move.
car1.velocityX = 0;
car1.velocityY = 4;

car2.velocityX = 0;
car2.velocityY = -4;

car3.velocityX = 0;
car3.velocityY = 4;

car4.velocityX = 0;
car4.velocityY = -4;

function draw() {
   background("white");
  text("Lives: " + life,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
   createEdgeSprites();
  
// create bounceoff function to make the car bounceoff the boundaries
   car1.bounceOff(boundary1);
   car1.bounceOff(boundary2);
   car2.bounceOff(boundary1);
   car2.bounceOff(boundary2);
    car3.bounceOff(boundary1);
    car3.bounceOff(boundary2);
    car4.bounceOff(boundary1);
    car4.bounceOff(boundary2);
   sam.bounceOff(rightEdge);
   sam.bounceOff(leftEdge);
//Add the condition to make the sam move left and right
   if (keyDown(RIGHT_ARROW)) {
     sam.x=sam.x+10;
   }
   if (keyDown("left")) {
     sam.x=sam.x-10;
   }
//Add the condition to reduce the life of sam if it touches the car.
   if (sam.isTouching(car1)||sam.isTouching(car2)||sam.isTouching(car3)||sam.isTouching(car4)) {
     life=life+1;
     sam.x = 20;
     sam.y = 190;
   }
      
      
      
  
 drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
