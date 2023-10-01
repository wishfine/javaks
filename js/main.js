import TopoSort from './TopoSort.js'
import GraphList from './GraphList.js'

// TopoSort(g);
let xhr = new XMLHttpRequest();
let url = "./sources/data/courses.json"
xhr.open("get", url);
xhr.send(null);
//XHR对象获取到返回信息后执行
xhr.onload = function () 
{
  // 解析获取到的数据
  var courses = JSON.parse(xhr.responseText);
  let g = new GraphList(courses.length);
  g.createVertex(courses);
  for (let i = 0; i < courses.length; i++) 
  {
      for(let j = 0;j<courses[i].pre_course.length;j++)
      {
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
}

