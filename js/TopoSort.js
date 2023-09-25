import Deque from './Deque.js'

// 拓扑排序
function TopoSort(G)
{
    let deque = new Deque();
    for(let i=0;i<G.numV;i++)
    {
        if(G.Indegree[i] === 0)
        {
            deque.push_back(i);
            //console.log(i);
        }
    }
    
    let curV = null;
    let count = 0;
    while(!deque.isEmpty())
    {
        curV = G.gralist[deque.pop_front()];
        console.log(`v${curV.head.elem.vertex}`);
        count++;

        for(let e = G.firstE(curV.head.elem.vertex);G.isEdge(e);e = G.nextE(e))
        {
            //console.log(e);
            G.Indegree[e.to]--;
            if(G.Indegree[e.to] === 0)
            {
                deque.push_back(e.to);
            }
        }

    }
    if (count < G.numV){   //若输出的顶点数少于图中顶点数，则存在环
		console.log("存在环路");
		return false;
	}else{
		return true;
	}
}
export default TopoSort