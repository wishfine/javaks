//export const edge = Edge;

class Edge{
    constructor(f,t,w){
        if(f!=undefined) this.from = f;
        if(t!=undefined) this.to = t;
        if(w!=undefined) this.weight = w;
    }

    printe()
    {
        console.log(`V${this.from}->V${this.to} weight:${this.weight}`);
    }
}
export default Edge