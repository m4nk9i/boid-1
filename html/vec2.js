/**
 * klasa wektora 2d
 */


class vec2{
    x;
    y;

    /**
     * 
     * @param {vec2} pvec wektor do skopiowania
     */

    copy(pvec)
    {
        this.x=pvec.x;
        this.y=pvec.y;
    }

    /**
     * konstruktor
     * 
     * @param {float} px wspolrzedna x
     * @param {*} py wspolrzedna y
     */

    constructor (px,py)
    {
        this.x=px;
        this.y=py;
    }

/**
 * 
 * @param {vec2} pvec wektor do zsumowania
 */
    add(pvec)
    {
        this.x+=pvec.x;
        this.y+=pvec.y;
    }

    /**
     * dodaj wektor i pomnoz przez skalar.
     * 
     * @param {vec2} pvec wektor do dodania
     * @param {float} pmul skalar
     */

    addmult(pvec,pmul)
    {
        this.x+=pvec.x*pmul;
        this.y+=pvec.y*pmul;
    }

    /**
     * pomnoz przez skalar.
     * 
     * @param {float} pmul skalar
     */

    mul(pmul)
    {
        this.x*=pmul;
        this.y*=pmul;
    }

    /**
     * podaje kierunek wektora.
     * 
     * @returns kierunek wektora
     */
    dir()
    {
        return (Math.atan2(this.y,this.x))   
    }
/**
 * zwraca kat miedzy wektorami.
 * 
 * @param {vec2} pvec drugi wektor
 * @returns kat pomiedzy wektorami
 */
    dir2vec(pvec)
    {
        return(Math.atan2(pvec.y-this.y,pvec.x-this.x));
    }
/**
 * obraca wektor o dany kat.
 * 
 * @param {float} pang kat obrotu
 */
    rot(pang)
    {
        let tl=this.len();
        let td=this.dir()+pang;
        this.x=tl*Math.cos(td);
        this.y=tl*Math.sin(td);

    }

    /**
     * oblicza kwaddrat odleglosci miedzy koncowkami wektorow
     * @param {vec2} pvec drugi wektor
     * @returns kwadrat odlwglosci miedzy koncami wektorow
     */

    dist2(pvec)
    {
        return ((this.x-pvec.x)*(this.x-pvec.x)+(this.y-pvec.y)*(this.y-pvec.y))
    } 

    /**
     * oblicza dlugosc wektora
     * @returns dlugosc wektora
     */
    len()
    {
        return (Math.sqrt(this.x*this.x+this.y*this.y))
    }
    /**
     * normalizuje wektor
     */
    norm()
    {
        let tlen=this.len();
        this.x/=tlen;
        this.y/=tlen;
    }

}