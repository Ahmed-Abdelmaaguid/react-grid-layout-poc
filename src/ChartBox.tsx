import { Card, Radio, Select } from "antd";
import ReactEcharts from "echarts-for-react";
import { useState } from "react";


const ChartBox = (props: any) => {

    // console.log(props, 'qqqqqqqqqqqqq1111111')

    const [numberType, setNumberType] = useState("absolute");
    const [showValues, setShowValues] = useState(true);

    const {Option} = Select;

    const getOption = (item: any) => {
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
                data: props.data,
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
            bottom: "5%",
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
                show: showValues,
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
                show: showValues,
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

    return (
        <Card
            key={props.item.i}
            data-grid={{ x: props.item.x, y: props.item.y, w: props.item.w, h: props.item.h }}
            className="dragHandle"
          >
            <div>
              <Radio.Group
                defaultValue={showValues ? "value" : "off"}
                buttonStyle="solid"
                onChange={(e) => {
                  setShowValues(e.target.value === "value");
                }}
              >
                <Radio.Button value="value">Value</Radio.Button>
                <Radio.Button value="off">OFF</Radio.Button>
              </Radio.Group>
              <Radio.Group
                defaultValue={numberType}
                value={numberType}
                buttonStyle="solid"
                onChange={(e) => {
                  setNumberType(e.target.value);
                }}
              >
                <Radio.Button value="absolute">Num</Radio.Button>
                <Radio.Button value="percentage">%</Radio.Button>
              </Radio.Group>
              {/* <Radio.Group
                    buttonStyle="solid"
                    // onChange={(e) => onIntervalChange(e.target.value)}
                    value={chartInterval}
                  >
                    {availableIntervals?.map((interval) => (
                      <Radio.Button value={interval.value}>
                        {interval.label}
                      </Radio.Button>
                    ))}
                  </Radio.Group> */}

              <Select
                // onChange={handleChangeChartType}
                placeholder="Change a graph type"
                // defaultValue={getDefaultOption()}
              >
                <Option
                  value={"ahmed"}
                  key={1}
                  style={{ textTransform: "capitalize" }}
                >
                  Ahmed
                </Option>
                <Option
                  value={"khalid"}
                  key={1}
                  style={{ textTransform: "capitalize" }}
                >
                  khalid
                </Option>
                <Option
                  value={"salah"}
                  key={1}
                  style={{ textTransform: "capitalize" }}
                >
                  salah
                </Option>
              </Select>
              {/* <Dropdown
                    menu={items}
                  >
                    <Button size="large" >Open</Button>
                  </Dropdown> */}
            </div>
            <ReactEcharts option={getOption(props.item)} />
          </Card>
    )
}

export default ChartBox;