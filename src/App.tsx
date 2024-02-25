import React, { useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { Card, Radio, Select } from "antd";
import ReactEcharts from "echarts-for-react";
import ChartBox from "./ChartBox";

const ResponsiveGridLayout = WidthProvider(Responsive);

function App() {
  const [layout, setLayout] = useState({
    lg: [
      // Encapsulate the layout array within an object under breakpoint keys
      {
        i: "Engagement-pie",
        x: 0,
        y: 0,
        w: 6,
        h: 1,
        name: "first",
        maxH: 1,
        maxW: 12,
        minH: 1,
        minW: 3,
      },
      {
        i: "Reactions-pie",
        x: 6,
        y: 0,
        w: 6,
        h: 1,
        name: "second",
        type: "bar",
        maxH: 1,
        maxW: 12,
        minH: 1,
        minW: 3,
      },
      {
        i: "Views-bar",
        x: 4,
        y: 1,
        w: 12,
        h: 1,
        name: "third",
        type: "bar",
        maxH: 1,
        maxW: 12,
        minH: 1,
        minW: 6,
      },
      {
        i: "Likes-line",
        x: 0,
        y: 2,
        w: 4,
        h: 1,
        name: "fourth",
        type: "bar",
        maxH: 1,
        maxW: 12,
        minH: 1,
        minW: 6,
      },
      {
        i: "Reach-bar",
        x: 4,
        y: 2,
        w: 4,
        h: 1,
        name: "fifth",
        type: "line",
        maxH: 1,
        maxW: 12,
        minH: 1,
        minW: 6,
      },
      {
        i: "Ahmed-pie",
        x: 8,
        y: 2,
        w: 4,
        h: 1,
        name: "sixth",
        type: "line",
        maxH: 1,
        maxW: 12,
        minH: 1,
        minW: 3,
      },
    ],
  });
  const [isEditable, setIsEditable] = useState(false);
  const [numberType, setNumberType] = useState("absolute");
  const [showValues, setShowValues] = useState(true);

  const data = [
    [5, 20, 36, 10, 10, 20],
    [12, 24, 1, 3, 22, 44],
    [4, 11, 3, 0, 60, 30],
    [6, 20, 36, 10, 10, 20],
    [22, 2, 21, 15, 40, 60],
    [1, 4, 6, 22, 0, 33],
  ];

  const toggleEditable = () => {
    setIsEditable(!isEditable);
  };

  const { Option } = Select;

  const onLayoutChange = (newLayout: any, layouts: any) => {
    // Directly updating the layout for the current breakpoint
    // Assuming 'lg' is the current breakpoint you are working with
    const updatedLayout = { ...layout, lg: newLayout };
    console.log(
      "newLayout",
      newLayout,
      "Layout",
      layouts,
      "Update layout",
      updatedLayout
    );
    setLayout(updatedLayout);
  };

  const getOption = (item: any, index: number) => {
    // console.log(item.type ,'qqqqqqqqqqqqq')
    const nameType = item.i.split("-");
    if (nameType[1] == "bar" || nameType[1] == "line") {
      return {
        title: {
          text: nameType[0],
        },
        tooltip: {},
        legend: {
          data: ["Sales"],
        },
        xAxis: {
          data: [
            "shirt",
            "cardign",
            "chiffon shirt",
            "pants",
            "heels",
            "socks",
          ],
        },
        yAxis: {},
        series: [
          {
            name: "Sales",
            type: nameType[1],
            data: data[index],
            label: {
              show: showValues,
            },
          },
        ],
      };
    }
    return {
      tooltip: {
        trigger: "item",
      },
      legend: {
        top: "5%",
        left: "center",
      },
      series: [
        {
          name: "Access From",
          type: "pie",
          radius: ["40%", "70%"],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: "#fff",
            borderWidth: 2,
          },
          label: {
            show: false,
            position: "center",
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 40,
              fontWeight: "bold",
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 1048, name: "Search Engine" },
            { value: 735, name: "Direct" },
            { value: 580, name: "Email" },
            { value: 484, name: "Union Ads" },
            { value: 300, name: "Video Ads" },
          ],
        },
      ],
    };
  };

  console.log('qqqqqqqq', isEditable)

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        width: "100vw",
      }}
    >
      <button
        onClick={toggleEditable}
        style={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          margin: "10px",
          background: "black",
          color: "white",
          fontSize: "40px",
        }}
      >
        Edit
      </button>
      <ResponsiveGridLayout
        className="layout"
        layouts={layout}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 12, sm: 12, xs: 12, xxs: 12 }}
        rowHeight={400}
        onLayoutChange={onLayoutChange}
        draggableHandle=".dragHandle"
        style={{ flexGrow: 1, maxWidth: "1200px", background: "grey" }}
        isDraggable={isEditable}
        isResizable={isEditable}
        compactType={null}
      >
        {layout.lg.map((item: any, index: number) => {
          // return (
          // <Card
          //   key={item.i}
          //   // data-grid={{ x: item.x, y: item.y, w: item.w, h: item.h }}
          //   className="dragHandle"
          // >
          //   <div>
          //     <Radio.Group
          //       defaultValue={showValues ? "value" : "off"}
          //       buttonStyle="solid"
          //       onChange={(e) => {
          //         setShowValues(e.target.value === "value");
          //       }}
          //     >
          //       <Radio.Button value="value">Value</Radio.Button>
          //       <Radio.Button value="off">OFF</Radio.Button>
          //     </Radio.Group>
          //     <Radio.Group
          //       defaultValue={numberType}
          //       value={numberType}
          //       buttonStyle="solid"
          //       onChange={(e) => {
          //         setNumberType(e.target.value);
          //       }}
          //     >
          //       <Radio.Button value="absolute">Num</Radio.Button>
          //       <Radio.Button value="percentage">%</Radio.Button>
          //     </Radio.Group>
          //     {/* <Radio.Group
          //           buttonStyle="solid"
          //           // onChange={(e) => onIntervalChange(e.target.value)}
          //           value={chartInterval}
          //         >
          //           {availableIntervals?.map((interval) => (
          //             <Radio.Button value={interval.value}>
          //               {interval.label}
          //             </Radio.Button>
          //           ))}
          //         </Radio.Group> */}

          //     <Select
          //       // onChange={handleChangeChartType}
          //       placeholder="Change a graph type"
          //       // defaultValue={getDefaultOption()}
          //     >
          //       <Option
          //         value={"ahmed"}
          //         key={1}
          //         style={{ textTransform: "capitalize" }}
          //       >
          //         Ahmed
          //       </Option>
          //       <Option
          //         value={"khalid"}
          //         key={1}
          //         style={{ textTransform: "capitalize" }}
          //       >
          //         khalid
          //       </Option>
          //       <Option
          //         value={"salah"}
          //         key={1}
          //         style={{ textTransform: "capitalize" }}
          //       >
          //         salah
          //       </Option>
          //     </Select>
          //     {/* <Dropdown
          //           menu={items}
          //         >
          //           <Button size="large" >Open</Button>
          //         </Dropdown> */}
          //   </div>
          //   <ReactEcharts option={getOption(item, index)} />
          // </Card>
          // )
         return (
          <div key={item.i} data-grid={item}>
          <ChartBox item={item} data={data[index]} />
        </div>
         )
})}
      </ResponsiveGridLayout>
    </div>
  );
}

export default App;
