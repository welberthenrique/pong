//Variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 25;
let raio = diametro/2;
let posicaoYBolinha = yBolinha - 50;

//Velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;


//Variaveis da raquete1
let xRaquete1 = 5;
let yRaquete1 = 150;
let comprimentoRaquete = 10;
let alturaRaquete = 90;

//Variaveis da raquete2 Oponente
let xRaquete2 = 585;
let yRaquete2 = 150;
let velocidadeXRaquete2;
let velocidadeYRaquete2;

let colidiu = false;

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  mostraRaquete(xRaquete1, yRaquete1);
  mostraRaquete(xRaquete2, yRaquete2);
  movimentaBolinha();
  movimentaRaquete1();
  verificaColisaoBorda();
  verificaColisaoRaquete();
  colisaoMinhaRaqueteBiblioteca(xRaquete1, yRaquete1);
  //colisaoMinhaRaqueteBiblioteca(xRaquete2, yRaquete2);
  movimentaRaquete2();
  incluiPlacar();
  marcaPonto();
}

function mostraBolinha(){
  circle(xBolinha,yBolinha,diametro);
}

function mostraRaquete(x,y){
  rect(x,y,comprimentoRaquete,alturaRaquete);
  
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
  if(xBolinha + raio > xRaquete2 && yBolinha + raio < yRaquete2 + alturaRaquete && yBolinha + raio > yRaquete2){
    velocidadeXBolinha *=-1;
  }
}

function colisaoMinhaRaqueteBiblioteca(x,y){
  colidiu = collideRectCircle(x, y, comprimentoRaquete, alturaRaquete, xBolinha, yBolinha, raio);
  
  if(colidiu){
    velocidadeXBolinha *=-1;
  }
  
}

function movimentaRaquete2(){
  velocidadeYRaquete2 = yBolinha - yRaquete2 - comprimentoRaquete /2 - 65;
  yRaquete2 += velocidadeYRaquete2;
}

function incluiPlacar(){
  fill(255);
  text(meusPontos, 278, 26);
  text(pontosDoOponente, 321, 26);
}

function marcaPonto(){
  if(xBolinha > 585){
    meusPontos +=1;
  }
  if(xBolinha < 15){
    pontosDoOponente+=1;
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