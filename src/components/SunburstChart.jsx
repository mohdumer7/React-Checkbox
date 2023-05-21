import React from "react";

import SunburstChart from "sunburst-chart";
import fromKapsule from "react-kapsule";

const ReactSunburst = fromKapsule(SunburstChart, {
  methodNames: ["focusNode"],
});

// function secondsToHms(d) {
//   d = Number(d);

//   if (d === 20) {
//     return "<i>No video</i>";
//   }

//   d = d - 20;

//   var h = Math.floor(d / 3600);
//   var m = Math.floor((d % 3600) / 60);
//   var s = Math.floor((d % 3600) % 60);

//   var hDisplay = h > 0 ? h + (h === 1 ? " hr, " : " hrs, ") : "";
//   var mDisplay = m > 0 ? m + (m === 1 ? " min, " : " mins, ") : "";
//   var sDisplay = s > 0 ? s + (s === 1 ? " sec" : " secs") : "";

//   return hDisplay + mDisplay + sDisplay;
// }

const Chart = ({ data }) => (
  // <ReactSunburst
  //   width={800}
  //   height={800}
  //   excludeRoot
  //   label="name"
  //   size="size"
  //   // size={(d, node) => `${node.value + 20}`}
  //   color={"color"}
  //   centerRadius={0.3}
  //   minSliceAngle={0}
  //   // labelOrientation="angular"
  //   radiusScaleExponent={1}
  //   // tooltipContent={(d, node) => `${node.value} seconds`}
  //   // tooltipContent={(d, node) => `${secondsToHms(d.displayVal)}`}
  //   // tooltipContent={(d, node) => `${secondsToHms(d.displaySize)}`}
  //   // tooltipContent={(d, node) => `${secondsToHms(node.value)}`}
  //   // tooltipContent={(d, node) => `${getToolTip(d, node)}`}
  //   data={data}
  // />
  <ReactSunburst
    width={800}
    height={800}
    // excludeRoot
    label="name"
    size="size"
    // size={(d, node) => `${node.value + 2}`}
    color={"color"}
    centerRadius={0.2}
    minSliceAngle={1}
    // labelOrientation="angular"
    radiusScaleExponent={1}
    // tooltipContent={(d, node) => `${node.value} seconds`}
    // tooltipContent={(d, node) => `${secondsToHms(d.displayVal)}`}
    // tooltipContent={(d, node) => `${secondsToHms(d.displaySize)}`}
    // tooltipContent={(d, node) => `${secondsToHms(node.value)}`}
    // tooltipContent={(d, node) => `${getToolTip(d, node)}`}
    data={data}
  />
);

export default Chart;
