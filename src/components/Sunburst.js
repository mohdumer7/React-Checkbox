import React from 'react';
// import the core library.
import ReactEChartsCore from 'echarts-for-react/lib/core';
// Import the echarts core module, which provides the necessary interfaces for using echarts.
import * as echarts from 'echarts/core';
// Import charts, all with Chart suffix
import {
  // LineChart,
//   BarChart,
  // PieChart,
  // ScatterChart,
  // RadarChart,
  // MapChart,
  // TreeChart,
  // TreemapChart,
  // GraphChart,
  // GaugeChart,
  // FunnelChart,
  // ParallelChart,
  // SankeyChart,
  // BoxplotChart,
  // CandlestickChart,
  // EffectScatterChart,
  // LinesChart,
  // HeatmapChart,
  // PictorialBarChart,
  // ThemeRiverChart,
  SunburstChart,
  // CustomChart,
} from 'echarts/charts';
// import components, all suffixed with Component
import {
  // GridSimpleComponent,
  GridComponent,
  // PolarComponent,
  // RadarComponent,
  // GeoComponent,
  // SingleAxisComponent,
  // ParallelComponent,
  // CalendarComponent,
  // GraphicComponent,
  // ToolboxComponent,
  TooltipComponent,
  // AxisPointerComponent,
  // BrushComponent,
  TitleComponent,
  // TimelineComponent,
  // MarkPointComponent,
  // MarkLineComponent,
  // MarkAreaComponent,
  // LegendComponent,
  // LegendScrollComponent,
  // LegendPlainComponent,
  // DataZoomComponent,
  // DataZoomInsideComponent,
  // DataZoomSliderComponent,
  VisualMapComponent,
  // VisualMapContinuousComponent,
  // VisualMapPiecewiseComponent,
  // AriaComponent,
  // TransformComponent,
  DatasetComponent,
} from 'echarts/components';
// Import renderer, note that introducing the CanvasRenderer or SVGRenderer is a required step
import {
  CanvasRenderer,
  SVGRenderer,
} from 'echarts/renderers';

// Register the required components
echarts.use(
  [TitleComponent, TooltipComponent, GridComponent, SunburstChart, CanvasRenderer]
);



// The usage of ReactEChartsCore are same with above.
const Sunburst = ()=>{
  var data = [
    {
      "name": "HEXAWARE",
      
      "children": [
        {
          "name": "Platform",
          
          "value": 100,
          "children": [
            {
              "name": "Mulesoft",
             
              "value": 50,
              "children": [
                {
                  "name": "Account 1",
                 
                  "value": 20,
                  "children": [
                    {
                      "name": "Project 1",
                     
                      "value": 10
                    }
                  ]
                },
                {
                  "name": "Account 2",
                 
                  "value": 20,
                  "children": [
                    {
                      "name": "Project 3",
                      
                      "value": 10
                    }
                  ]
                },
                {
                  "name": "Account 3",
                  
                  "value": 20,
                  "children": [
                    {
                      "name": "Project 5",
                     
                      "value": 10
                    }
                  ]
                },
                {
                  "name": "Account 4",
                  
                  "value": 20,
                  "children": [
                    {
                      "name": "Project 6",
                     
                      "value": 10
                    }
                  ]
                }
              ]
            },
            {
              "name": "Boomi",
             
              "value":50,
              "children": [
                {
                  "name": "Account 5",
                  "value": 40
                }
              ]
            },
            {
              "name": "Azure",
             
              "value": 50,
              "children": [
                {
                  "name": "Account 6",
            
                  "value": 20
                }
              ]
            }
          ]
        },
        {
          "name": "Technology",
      
          "value": 100,
          "children": [
            {
              "name": "Java",
          
              "value": 50,
              "children": [
                {
                  "name": "Account 1",
              
                  "value": 20,
                  "children": [
                    {
                      "name": "Project 10",
                     
                      "value": 10
                    }
                  ]
                }
              ]
            },
            {
              "name": ".Net",
             
              "value": 50,
              "children": [
                {
                  "name": "Account 2",
                  
                  "value": 20,
                  "children": [
                    {
                      "name": "Project 2",
                     
                      "value": 10
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]    
  const option = {
   
    responsive: true,
maintainAspectRatio: false,
legend:{height:500,padding:10},
    series: {
      type: 'sunburst',
      data: data,
      
      radius: [0, '100%'],
      sort: undefined,
      emphasis: {
        focus: 'ancestor',
        scale:true,
        scaleSize: 20, 
      },
      
    }
  };

    console.log(option)
    return (<ReactEChartsCore
    echarts={echarts}
    option={option}
    notMerge={true}
    lazyUpdate={true}
    
    theme={"theme_name"}/>)
}
  


export default Sunburst;