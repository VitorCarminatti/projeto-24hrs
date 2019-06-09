import React from "react";
import Menu from "../../components/menu";
import Chart from "react-google-charts";
import { Select } from "antd";
import { SelectChart } from "./styles";
import api from "../../services/api";
const { Option } = Select;

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: false,
      dados: []
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(value) {
    const prom = api.get(`/api/error_data?maquina=${value}`);
    prom.then(dado => this.setState({ dados: dado.data }));
  }

  montaArrayDados(dados) {
    const array = [["nome", "tempo"]];

    dados.map(dado => array.push([dado.nome, dado.tempo]));

    return array;
  }

  render() {
    const { dados } = this.state;
    return (
      <React.Fragment>
        <Menu />
        <SelectChart>
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Selecione uma máquina"
            optionFilterProp="children"
            onChange={this.onChange}
            filterOption={(input, option) =>
              option.props.children
                .toLowerCase()
                .indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="SCS6033">SCS6033</Option>
            <Option value="SCS1104">SCS1104</Option>
            <Option value="PE10">PE10</Option>
            <Option value="DG01">DG01</Option>
            <Option value="JK20">JK20</Option>
            <Option value="PE20">PE20</Option>
            <Option value="CAN8042">CAN8042</Option>
            <Option value="CAN1081">CAN1081</Option>
            <Option value="JK10">JK10</Option>
            <Option value="SCS5052">SCS5052</Option>
            <Option value="SCS5104">SCS5104</Option>
            <Option value="toCAN3081m">CAN3081</Option>
          </Select>
          ,
          <Chart
            width={"1400px"}
            height={"800px"}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={
              Object.keys(dados).length === 0
                ? [["nome", "tempo"]]
                : this.montaArrayDados(dados)
            }
            options={{
              title: "Quantidade de erros por tipo"
            }}
            rootProps={{ "data-testid": "1" }}
          />
        </SelectChart>
        <Chart
          width={"1400px"}
          height={"800px"}
          chartType="ColumnChart"
          loader={<div>Loading Chart</div>}
          data={[
            ["Metros", "Metros bons", "Metros refugados"],
            ["CAN3081", 425142.8, 24127.77],
            ["SCS5104", 276263.71, 3746.46],
            ["SCS5052", 249007.51, 3110.23],
            ["SCS6033", 227972.19, 8067.46],
            ["SCS1104", 187742.62, 3136.07],
            ["PE10", 118120.9, 5754.45],
            ["DG01", 58892.6, 1782.33],
            ["JK20", 49388.35, 1252.87],
            ["PE20", 45451.65, 1621.79],
            ["CAN8042", 28963.8, 3056.32],
            ["CAN1081", 26486, 863.63],
            ["JK10", 23734.47, 305.12]
          ]}
          options={{
            title: "Produtividade por máquina",
            chartArea: { width: "50%" },
            isStacked: true,
            hAxis: {
              title: "Produtividade por máquina",
              minValue: 0
            },
            vAxis: {
              title: "Metros"
            }
          }}
          // For tests
          rootProps={{ "data-testid": "3" }}
        />
      </React.Fragment>
    );
  }
}

export default Dashboard;
