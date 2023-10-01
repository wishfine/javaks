//import { edge as _edge } from './Edge.js';
//_edge();
import Edge from './Edge.js'

//document.write("<script src='./js/Edge.js'></script>");
//import './Edge.js'

class listUnit { // 数据域
    constructor(v, w, d) {
        this.vertex = v;
        this.data = d;
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
        // this.in = 0; // 入度
        this.head = new Link(el,null); // 附加头结点

    }
}

class GraphList{
    constructor(nV)
    {
        if(nV!=undefined) this.numV = nV; else this.numV = 0;
        //if(nE!=undefined) this.numE = nE; else this.numE = 0;
        this.Mark = new Array(nV);
        this.gralist = new Array(nV);
        this.Indegree = new Array(nV);
    }
    createVertex(courses)
    {
        for(let i = 1;i<=courses.length;i++)
        {
            this.gralist[i] = new LList(new listUnit(i,1,courses[i]));
            this.Indegree[i] = 0;
            this.Mark[i] = 0;
        }
    }

    printGl()
    {
        let result = "";
        for(let i = 1; i<=this.numV;i++)
        {
            result +=`${i}`;
            let t = this.gralist[i].head;
            // console.log(`${i}入度:${this.Indegree[i]}`);
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
        if (e.weight > 0 && e.weight < Number.MAX_SAFE_INTEGER && e.to >= 0) return true;
		else return false;
    }

    firstE(v)
    {
        let et = new Edge(v); // from
        //console.log(v);
		let temp = this.gralist[v].head;

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
		let et = new Edge(e.from);
        
		let t = this.gralist[e.from].head;
		while (t.next != null&&t.next.elem.vertex<=e.to)
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
        //console.log(et);
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
                //this.numE++;
                this.Indegree[t]++;
            } 
        }else // insert last
        {
            temp.next = new Link(new listUnit(t,w),null);
            //this.numE++;
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
            //this.numE--;
            this.Indegree[t]--;
        }
    }
}


export default GraphList

