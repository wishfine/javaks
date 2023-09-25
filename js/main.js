import TopoSort from './TopoSort.js'
import GraphList from './GraphList.js'


let g = new GraphList(5,8);
g.setE(0,1,1);
g.setE(0,2,1);
g.setE(0,3,1);
g.setE(1,3,1);
//g.setE(2,0,1);
g.setE(2,3,1);g.setE(2,4,1);
g.setE(3,4,1);

g.printGl();

TopoSort(g);