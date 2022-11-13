var ctx;
var drawing = [];
var mstate;
var boids=[];
const NUM_BOIDS=100;
const pi_2=Math.PI*2;
var MAXX=100;
var MAXY=100;
var animate=0;



function initBoids()
{
    for (let i=0;i<NUM_BOIDS;i++)
    {
        let tx=Math.random()*200.0;
        let ty=Math.random()*200.0;
        let tpos=new vec2(tx,ty);
        tx=-100+Math.random()*200.0;
        ty=-100+Math.random()*200.0;
        let tve=new vec2(tx,ty);
        let tboid=new Boid(tpos);
        tve.norm();
        tve.mul(20);
        tboid.vel=tve;
        boids.push(tboid);
    }
}


function updateBoids(){
    for (let i=0;i<NUM_BOIDS;i++)
    {
        boids[i].update();
    }
}

function drawBoids(){
    ctx.clearRect(0, 0, MAXX, MAXY)
    for (let i=0;i<NUM_BOIDS;i++)
    {        
        boids[i].draw(ctx);
    }
    
}


function loop()
{
    if (animate)
    {
        updateBoids();
    }
    drawBoids();
    window.requestAnimationFrame(loop);
}

function butt1click()
{
 //   Init();
//    tve=new vec2(20,40);
//   bo=new Boid(tve);
//    bo.log();
//    bo.draw(ctx);
//    initBoids();
    animate=1;
}

function butt2click()
{
        animate=0;
}

function Init()
{
    var canvas = document.getElementById("myCanvas");
    MAXX=canvas.width; 
    MAXY=canvas.height;
    ctx = canvas.getContext("2d");
    initBoids();
    window.requestAnimationFrame(loop);
}

function refreshViewport() {

}
