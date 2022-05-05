var path,Jake, leftBoundary,rightBoundary;
var pathImg,JakeImg;
var i;

function preload () {
  //loadImage de path (camino)
  //loadAmimation de JAke (niño)
}

function setup ()	{

  creteCanvas(400,400);
 //crer sprite de path (camino)
//agregar imagen de path 
path.scale=1.2;

//crear sprite de boy (niño)
//agregar animacion para boy
Jake.scale=0.08;

//crear lest Boundar (límite izquierdo)
leftBoundary=createSprite(0,0,100,800);
//establecer velocidad como false (falso) para límite izquierdo

//crear right Boundary (límite derecho)
rightBoundary=createSprite(410,0,100,800);
//establecer visibilidad como false (falso) para límite izquierdo
}

function draw() {
  background(0);
  path.velocity = 4;

  //boy moviéndose en el eje X con el mouse

  edges= createEdgeSprites();
  boy.collide(edges) [3];
  //colisión de boy con los límites detecho e izquierdo invisibles

  //código para reiniciar el fondo
  if(path.y > 400 ){
    path.y = height/2;
  } 

  drawSprites();
}