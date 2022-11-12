var ctx;
var drawing = [];
var mstate;
var boids=[];
const NUM_BOIDS=10;
const pi_2=Math.PI*2;
const MAXX=500;
const MAXY=500;
var animate=0;


class vec2{
    x;
    y;

    copy(pvec)
    {
        this.x=pvec.x;
        this.y=pvec.y;
    }

    constructor (px,py)
    {
        this.x=px;
        this.y=py;
    }

    add(pvec)
    {
        this.x+=pvec.x;
        this.y+=pvec.y;
    }

    addmult(pvec,pmul)
    {
        this.x+=pvec.x*pmul;
        this.y+=pvec.y*pmul;
    }

}

class Boid{

    pos;
    vel;
    constructor (pvec)
    {
        this.pos=new vec2(pvec.x,pvec.y);


    }

    draw(pctx) {
        pctx.beginPath();
        pctx.ellipse(this.pos.x,this.pos.y,10,10,0,0,pi_2); 
        pctx.stroke();
    }

    update()
    {
        this.pos.addmult(this.vel,0.1);
        if ((this.pos.x<0) || (this.pos.x>MAXX))
        {
            this.vel.x*=-1;
        }
        if ((this.pos.y<0) || (this.pos.y>MAXY))
        {
            this.vel.y*=-1;
        }
    }

    log()
    {
        console.log(this.pos);
    }


}

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
        drawBoids();
    
    }
    
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
        animate=1;
}

function Init()
{
    var canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    initBoids();
}

function refreshViewport() {

}
