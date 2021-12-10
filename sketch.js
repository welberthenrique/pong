//Variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro/2;

//Velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;


//Variaveis da raquete1
let xRaquete1 = 5;
let yRaquete1 = 150;
let comprimentoRaquete1 = 10;
let alturaRaquete1 = 90;

//Variaveis da raquete2
let xRaquete2 = 585;
let yRaquete2 = 150;
let comprimentoRaquete2 = 10;
let alturaRaquete2 = 90;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  mostraRaquete1();
  mostraRaquete2();
  movimentaBolinha();
  movimentaRaquete1();
  verificaColisaoBorda();
  verificaColisaoRaquete();
}

function mostraBolinha(){
  circle(xBolinha,yBolinha,diametro);
}

function mostraRaquete1(){
  rect(xRaquete1,yRaquete1,comprimentoRaquete1,alturaRaquete1);
  
}

function mostraRaquete2(){
  rect(xRaquete2,yRaquete2,comprimentoRaquete2,alturaRaquete2);
  
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function movimentaRaquete1(){
  if(keyIsDown(DOWN_ARROW)){
    yRaquete1+=10;
  }else if (keyIsDown(UP_ARROW)){
    yRaquete1-=10;
    
  }
}

function verificaColisaoRaquete(){
  if(xBolinha - raio < xRaquete1 + comprimentoRaquete1 && yBolinha -raio < yRaquete1 + alturaRaquete1 && yBolinha + raio > yRaquete1){
    velocidadeXBolinha *=-1;
  }
}


function verificaColisaoBorda(){
  
  if(xBolinha + raio > width || xBolinha - raio < 0 ){
    velocidadeXBolinha *=-1;    
     
  }
  if(yBolinha + raio > height || yBolinha - raio < 0 ){
    velocidadeYBolinha *=-1;    
     
  }
}