//Variáveis da Bolinha
let xBola = 300;
let yBola = 200;
let diametro = 30;
let raio = diametro / 2;

//Variáveis da Velocidade
let velocidadexBolinha =6;
let velocidadeyBolinha =6;

//Funcões da minha raquete
let xMinhaRaquete = 10;
let yMinhaRaquete = 150;
let larguraMinhaRaquete = 10;
let alturaMinhaRaquete = 100;

//função de Criação do Fundo
function setup() {
  createCanvas(600, 400);
}

//Funcão Desenhar
function draw() {
  background(0);
  minhaRaquete();
  bolinha();
}

//Função Bolinha
function bolinha() {
  circle(xBola, yBola, diametro)
  xBola += velocidadexBolinha;
  yBola += velocidadeyBolinha;
if (xBola + raio > width || xBola - raio < 0 ){
    velocidadexBolinha *= -1;
  }
if (yBola + raio > height || yBola - raio < 0 ){
    velocidadeyBolinha *= -1;
  }
}

//Função da minha raquete
function minhaRaquete(){
  rect( xMinhaRaquete , yMinhaRaquete, larguraMinhaRaquete, alturaMinhaRaquete);
if (keyIsDown(UP_ARROW)){
  yMinhaRaquete -= 10
  }
if (keyIsDown(DOWN_ARROW)){
  yMinhaRaquete += 10
  }
}