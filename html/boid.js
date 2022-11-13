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
        
        pctx.beginPath();
        pctx.moveTo(this.pos.x,this.pos.y);
        pctx.lineTo(this.pos.x+this.vel.x,this.pos.y+this.vel.y);
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