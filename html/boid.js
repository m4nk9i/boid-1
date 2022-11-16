/**
 * klasa Boid
 */

class Boid{

    pos;
    vel;
    /**
     * lpmstruktor
     * @param {vec2} pvec poczatkowe polozeie boida
     */
    constructor (pvec)
    {
        this.pos=new vec2(pvec.x,pvec.y);


    }
/**
 * rysuje boida
 * @param {Context} pctx 
 */
    draw(pctx) {
        pctx.beginPath();
        pctx.ellipse(this.pos.x,this.pos.y,10,10,0,0,pi_2); 
        pctx.stroke();
        
        pctx.beginPath();
        pctx.moveTo(this.pos.x,this.pos.y);
        pctx.lineTo(this.pos.x+this.vel.x,this.pos.y+this.vel.y);
        pctx.stroke();
        
    }
/**
 * oblicza stan boida
 */
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

        if (this.pos.x<0) this.pos.x=0;
        if (this.pos.x>MAXX) this.pos.x=MAXX;
        if (this.pos.y<0) this.pos.y=0;
        if (this.pos.y>MAXY) this.pos.y=MAXY;
    }
/**
 * wypisuje na konsoli pirtdoly
 */
    log()
    {
        console.log(this.pos);
    }


}