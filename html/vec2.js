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

    mul(pmul)
    {
        this.x*=pmul;
        this.y*=pmul;
    }

    dir()
    {
        return (Math.atan2(this.y,this.x))   
    }

    len()
    {
        return (Math.sqrt(this.x*this.x+this.y*this.y))
    }

    norm()
    {
        let tlen=this.len();
        this.x/=tlen;
        this.y/=tlen;
    }

}