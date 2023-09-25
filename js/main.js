import TopoSort from './TopoSort.js'
import GraphList from './GraphList.js'


// let g = new GraphList(5);

// g.setE(0,1,1);
// g.setE(0,2,1);
// g.setE(0,3,1);
// g.setE(1,3,1);
// //g.setE(2,0,1);
// g.setE(2,3,1);g.setE(2,4,1);
// g.setE(3,4,1);

// g.printGl();

// TopoSort(g);

import { readFile } from 'fs/promises'; // 使用 fs/promises 模块的 readFile 方法


(async () => {
  try {
    const data = await readFile('./sources/data/courses.json', 'utf8'); // 读取 JSON 文件
    const courses = JSON.parse(data); // 解析 JSON 数据
    // 处理 JSON 数据
    console.log(courses.length);
    let g = new GraphList(courses.length);
    g.createVertex(courses);
    for (let i = 0; i < courses.length; i++) 
    {
        console.log("cur:");
        console.log(courses[i]);
        for(let j = 0;j<courses[i].pre_course.length;j++)
        {
            console.log("hi");
            let foundElement = courses.find(element => element.course === courses[i].pre_course[j]);
            
            if(foundElement) 
            {
                console.log(foundElement);
                g.setE(foundElement.course_id,courses[i].course_id,1);
                
            }
                
        }
        
    }
    g.printGl();
    TopoSort(g);

  } catch (error) {
    console.error('Error:', error);
  }
})();
// TopoSort(g);



