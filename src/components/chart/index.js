import React, { useRef, useLayoutEffect } from "react";
import { OrgChart } from "d3-org-chart";

const Chart = (props) => {
  const d3Container = useRef(null);
  useLayoutEffect(() => {
    const chart = new OrgChart();
    if (props.data && d3Container.current) {
      chart
        .container(d3Container.current)
        .data(props.data)
        .rootMargin(100)
        .nodeWidth((d) => 210)
        .nodeHeight((d) => 150)
        .childrenMargin((d) => 130)
        .compactMarginBetween((d) => 75)
        .compactMarginPair((d) => 80)
        .onNodeClick((d, i, arr) => {
          props.onNodeClick(d);
        })
        .buttonContent(({ node, state }) => {
          return `<div style="px;color:#716E7B;border-radius:5px;padding:4px;font-size:10px;margin:auto auto;background-color:white;border: 1px solid #E4E2E9"> <span style="font-size:9px">${
            node.children
              ? `<i class="fas fa-angle-up"></i>`
              : `<i class="fas fa-angle-down"></i>`
          }</span> ${node.data._directSubordinates}  </div>`;
        })

        .nodeContent(function (d, i, arr, state) {
          const colors = [
            "#6E6B6F",
            "#18A8B6",
            "#F45754",
            "#96C62C",
            "#BD7E16",
            "#802F74",
          ];
          const color = colors[d.depth % colors.length];
          const imageDim = 80;
          const lightCircleDim = 95;
          const outsideCircleDim = 110;

          return `
                <div style="background-color:white; position:absolute;width:${
                  d.width
                }px;height:${d.height}px;">
                   <div style="background-color:${color};position:absolute;margin-top:-${outsideCircleDim / 2}px;margin-left:${d.width / 2 - outsideCircleDim / 2}px;border-radius:100px;width:${outsideCircleDim}px;height:${outsideCircleDim}px;"></div>
                   <div style="background-color:#ffffff;position:absolute;margin-top:-${
                     lightCircleDim / 2
                   }px;margin-left:${d.width / 2 - lightCircleDim / 2}px;border-radius:100px;width:${lightCircleDim}px;height:${lightCircleDim}px;"></div>
                   <img src=" ${
                     d.data.imageUrl
                   }" style="position:absolute;margin-top:-${imageDim / 2}px;margin-left:${d.width / 2 - imageDim / 2}px;border-radius:100px;width:${imageDim}px;height:${imageDim}px;" />
                   <div class="card" style="top:${
                     outsideCircleDim / 2 + 10
                   }px;position:absolute;height:30px;width:${d.width}px;background-color:#3AB6E3;">
                      <div style="background-color:${color};height:28px;text-align:center;padding-top:10px;color:#ffffff;font-weight:bold;font-size:16px">
                          ${d.data.name} 
                      </div>
                      <div style="background-color:#F0EDEF;height:28px;text-align:center;padding-top:10px;color:#424142;font-size:16px">
                          ${d.data.positionName} 
                      </div>
                   </div>
               </div>
  `;
        })
        .render();
    }
  }, [props, props.data]);

  return <div ref={d3Container}></div>;
};

export default Chart;
