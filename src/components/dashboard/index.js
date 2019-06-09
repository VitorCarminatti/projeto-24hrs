import React from "react";
import { Card, Col, Row, Descriptions, Radio } from "antd";

class Dashboard extends React.Component {
  state = {
    collapsed: false
  };

  render() {
    return (
      <div style={{ background: "#ECECEC", padding: "30px" }}>
        <div style={{ background: "#ECECEC", padding: "30px" }}>
          <Row gutter={16}>
            <Col span={8}>
              <Card title="Equipamentos" bordered={false}>
                20
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Perdas" bordered={false}>
                500
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Produção" bordered={false}>
                1800
              </Card>
            </Col>
          </Row>
        </div>
        <div style={{ background: "#ECECEC", padding: "30px" }}>
          <Row gutter={16}>
            <Col span={8}>
              <Card title="Equipamentos" bordered={false}>
                20
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Perdas" bordered={false}>
                500
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Produção" bordered={false}>
                1800
              </Card>
            </Col>
          </Row>
        </div>
        <div style={{ background: "#ECECEC", padding: "30px" }}>
          <Descriptions
            bordered
            title="Dados/Informações"
            border
            size={this.state.size}
          >
            <Descriptions.Item label="Product">
              Cloud Database
            </Descriptions.Item>
            <Descriptions.Item label="Billing">Prepaid</Descriptions.Item>
            <Descriptions.Item label="time">18:00:00</Descriptions.Item>
            <Descriptions.Item label="Amount">$80.00</Descriptions.Item>
            <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
            <Descriptions.Item label="Official">$60.00</Descriptions.Item>
            <Descriptions.Item label="Config Info">
              Data disk type: MongoDB
              <br />
              Database version: 3.4
              <br />
              Package: dds.mongo.mid
              <br />
              Storage space: 10 GB
              <br />
              Replication_factor:3
              <br />
              Region: East China 1<br />
            </Descriptions.Item>
          </Descriptions>
        </div>
      </div>
    );
  }
}

export default Dashboard;
