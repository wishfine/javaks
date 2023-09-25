//import { edge as _edge } from './Edge.js';
//_edge();

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
    get from()
    {
        return this.from;
    }
    set from(f)
    {
        this.from = f;
    }
}


class listUnit {
    constructor(v, w) {
        this.vertex = v;
        this.weight = w;
    }
}

class Link { // 弧结点

    constructor(el,np)
    {
        if(el!=undefined) this.elem = el; // listUnit
        else this.elem = -1;
        if(np!=undefined) this.next = np;
        else this.next = null;
    }

}

class LList{ // 链表头指针类
    constructor(el)
    {
        this.head = new Link(el,null); // 附加头结点
    }
}

class GraphList{
    constructor(nV,nE)
    {
        if(nV!=undefined) this.numV = nV; else this.numV = 0;
        if(nE!=undefined) this.numE = nE; else this.numE = 0;
        this.Mark = new Array(nV);
        this.gralist = new Array(nV);
        for(let i = 0;i<=nV;i++)
        {
            this.gralist[i] = new LList(new listUnit(i));
        }
        this.Indegree = new Array(nV);
    }
    printGl()
    {
        let result = "";
        for(let i = 0; i<this.numV;i++)
        {
            result +=`${i}`;
            let t = this.gralist[i].head;
            //console.log(t);
            while(t.next!=null)
            {
                //console.log(t.next);
                result+=`->${t.next.elem.vertex}`;
                t = t.next;
            }
            result+="\n";
        }
        console.log(result);

    }

    isEdge(e)
    {
        if (e.weight > 0 && e.weight < INT_MAX && e.to >= 0) return true;
		else return false;
    }

    firstE(v)
    {
        et = new Edge(v);
		let temp = gralist[v].head;

		if (temp.next != null)
		{
			et.to = (temp.next).elem.vertex;
			et.weight = (temp.next).elem.weight;
		}
		else
		{
			//cout << "不存在以V"<<v<<"为弧尾[起点]的边" << endl;
		}
		return et;
    }

    nextE(e)
	{
		et = new Edge(e.from);
		let t = gralist[e.from].head;
		while (t.next != null&&t.next.elem.v<=e.to)
		{
			t = t.next;
		}
		if (t.next != null)
		{
			et.to = t.next.elem.vertex;
			et.weight = t.next.elem.weight;
		}
		else
		{
			//cout << "不存在下一条边" << endl;
		}
		return et;
	}

    setE(f,t,w)
    {
        if(f>=this.numV)
        {
            console.log("error");
            return;
        }
        let temp = this.gralist[f].head;
        while(temp.next!=null && temp.next.elem.vertex < t)
            temp = temp.next;
   
        if(temp.next != null) // insert mid
        {
            if(temp.next.elem.vertex == t) // exist edge modify weight
            {
                temp.next.elem.weight = w;
                return;
            }else if(temp.next.elem.vertex>t)
            {
                let back = temp.next.next;
                temp.next = new Link(new listUnit(t,w),back);
                this.numE++;
                this.Indegree[t]++;
            } 
        }else // insert last
        {
            temp.next = new Link(new listUnit(t,w),null);
            this.numE++;
            this.Indegree[t]++;
        }
    }
    delEdge(f,t)
    {
        let temp = this.gralist[f].head;
        while(temp.next!=null && temp.next.elem.vertex<t)
            temp = temp.next;
        if(temp.next==null||temp.next.elem.vertex>t) // no exist
        {
            console.log("no exist");
        }else if(temp.next.elem.v==t)
        {
            let back = temp.next.next;
            delete temp.next;
            temp.next = back;
            this.numE--;
            this.Indegree[t]--;
        }
    }
}
g = new GraphList(5,8);
g.setE(0,1,1);
g.setE(0,2,1);
g.setE(0,3,1);
g.setE(1,3,1);
g.setE(2,0,1);g.setE(2,3,1);g.setE(2,4,1);
g.setE(3,4,1);

g.printGl();

