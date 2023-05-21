import { useEffect, useState } from "react";

import data from "./afzal";

import Lanes from "./components/Lanes";





export default function App() {
  const categories = [
    "categories",
    "subcategories",
    "add_categories",
    "add_subategories",
  ];

  const [currentLane, setCurrentLane] = useState(0);

  const [currentData, setCurrentData] = useState("");

  const [lanes, setLanes] = useState(new Array(categories.length).fill({}));


// useEffect(async()=>{
//   await result =fetch('hdchndc.com');
//   await data = result.json() 
// },[])


  useEffect(() => {

    //const data = 
    setLanes(() => {
      const temparr = [];
      temparr[0] = data;

      return temparr;
    });
  }, []);

  const handleChanged = (data, lane,deselect) => {
    console.log(data.name)
    setLanes((val) => {
      if(lane === 0 ){
        if(deselect){
          return [val[0]]
        }
        else if(currentLane > lane){
          return [val[0], data[categories[0]]];
        }
        return [val[0], data[categories[lane]]];
      }
      else if (currentLane >= lane && currentLane !== 0) {
        if(deselect){
          return [...val.splice(0, lane+1)]
        }
        if(currentLane===lane){
          if(deselect){
            
            // return [...val.splice(0, lane+1), data[categories[lane-1]]]
            return [...val.splice(0, lane)]
          }else{
            return [...val.splice(0, lane + 1), data[categories[lane]]];
          }
        }
        // return [...val.splice(0, lane), data[categories[lane-1]]];
        return [...val.splice(0, lane + 1), data[categories[lane]]];
    }
      
      else if (currentLane > lane) {
      
        return [...val.splice(0, lane + 1), data[categories[lane]]];
      }
      
      const temp = val;

      temp[lane + 1] = data[categories[lane]];

      return [...temp];
    });
  if(deselect){
    lane-=1
  }
    setCurrentLane(lane);

    setCurrentData(data.name); // console.log(lanes)
  };

  return (
    <div className="App">
      <div className="chart">
        <div className="flex ">
          {lanes.map((lane, index) => (
            <Lanes
              key={index}
              data={lane}
              handleChanged={handleChanged}
              lane={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
