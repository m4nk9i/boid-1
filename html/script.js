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

    tvec=findCenterOfIntrest(boids[0]);
        //console.log(tvec);
        /*
        tDeltaAngle=boids[0].pos.dir2vec(tvec);
        console.log(tDeltaAngle);
        console.log(boids[0].vel.dir());
        //boids[i].vel.rot(0.1);
        boids[0].vel.rot(tDeltaAngle/25.0);
*/

    for (let i=0;i<NUM_BOIDS;i++)
    {
        tvec=findCenterOfIntrest(boids[i]);     // srodek ciezkosci
        //console.log(tvec);
        if (tvec[0]>1)
        {
        let ang1=boids[i].pos.dir2vec(tvec[1]);
        let ang2=boids[i].vel.dir();

        tDeltaAngle=ang1-ang2;
        if (tDeltaAngle<-Math.PI)
        {
            tDeltaAngle+=Math.PI*2.0;
        }
        if (tDeltaAngle>Math.PI)
        {
            tDeltaAngle-=Math.PI*2.0;
        }
        

//        tDeltaAngle=boids[i].pos.dir2vec(tvec)-boids[i].vel.dir();  //tdelta to roznica miedzy katem od srodka ciezkosci do polozenia wektora
                                                                    // a wktorem predkosci boida 
        //boids[i].vel.rot(0.1);
        //tDeltaAngle=boids[i].pos.dir2vec(tvec)-boids[i].vel.dir();
        boids[i].vel.rot(tDeltaAngle/75.0);
        }
    
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

function findCenterOfIntrest(pboi)
{
    //let tblist=[];
    let tcenter=new vec2(0,0);
    let tneighbors=0;
    ctx.strokeStyle = 'gray';
    for (let i=0;i<NUM_BOIDS;i++)
    {
        if (pboi.pos.dist2(boids[i].pos)<10000)
        {
            //tblist.push(boids[i].pos);
            tcenter.add(boids[i].pos);
            tneighbors++;
            ctx.beginPath();
            
            ctx.moveTo(pboi.pos.x,pboi.pos.y);
            ctx.lineTo(boids[i].pos.x,boids[i].pos.y);
            //console.log(tcenter);
            ctx.stroke();
        }
    }
//    console.log(tneighbors);
    if (tneighbors>0)
    {
        //console.log(tcenter);
        tcenter.mul(1.0/tneighbors);
        ctx.beginPath();
        ctx.strokeStyle = 'blue';
        ctx.moveTo(pboi.pos.x,pboi.pos.y);
        ctx.lineTo(tcenter.x,tcenter.y);
        //console.log(tcenter);
        ctx.stroke();

    }
    ctx.strokeStyle = 'black';
    return [tneighbors,tcenter];
    
}


function loop()
{
    if (animate)
    {
        drawBoids();
        updateBoids();
    }

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
