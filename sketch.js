const Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

  var particles = [];
  var plinkos = [];
  var divisions =[];


function setup() {
  createCanvas(490,500);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  ground = new Ground(width/2,height,width,20);

  for(var k = 0;k<=width;k=k+80){
divisions.push(new Divisions(k,height-100,10,200));
  }

  for(var j=30;j<=width;j=j+40){
  plinkos.push(new Plinko(j,65));
  }

  for(var j=50;j<=width-10;j=j+40){
   plinkos.push(new Plinko(j,135));
  }

  for(var j=30;j<=width;j=j+40){
    plinkos.push(new Plinko(j,200));
   }

   for(var j=50;j<=width-10;j=j+40){
    plinkos.push(new Plinko(j,265));
   }
}

function draw() {
  background("black");  
  ground.display();

  if(frameCount % 60 ===0){
 particles.push(new Particle(random(width/2-100,width/2+100),10,10));
  }

  for(var i = 0;i<particles.length;i++){
   particles[i].display();
  }

  for(var k =0;k<divisions.length;k++){
  divisions[k].display();
}
for(var j=0;j<plinkos.length;j++){
  plinkos[j].display();
 }
}