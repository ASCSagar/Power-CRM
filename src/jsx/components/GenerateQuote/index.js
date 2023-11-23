import React, { Fragment, useState } from "react";
import { Form, Select } from "antd";
import { Button as RBButton, Card, Col, Nav, Row, Tab } from "react-bootstrap";
import GasDetailsForm from "./GasDetailsForm";
import SingleSiteSupplierList from "./SingleSiteSuppliersList";
import ElectricityDetailsForm from "./ElectricityDetailsForm";

const { Option } = Select;

const GenerateQuote = () => {
  const [form] = Form.useForm();

  const [supplierList, setSupplierList] = useState(false);

  const tabData = [
    {
      name: "Gas",
      icon: "burn",
      content: <GasDetailsForm />,
    },
    {
      name: "Electricity",
      icon: "bolt",
      content: <ElectricityDetailsForm />,
    },
  ];

  const handleCompareAction = () => {
    setSupplierList(true);
  };

  return (
    <Fragment>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Header>
              <Card.Title>Site Supply Details</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form
                labelCol={{ span: 10 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal"
                form={form}
              >
                <div className="custom-tab-1">
                  <Tab.Container
                    defaultActiveKey={tabData[0].name.toLowerCase()}
                  >
                    <Nav
                      as="ul"
                      className="mb-4 light d-flex justify-content-center"
                    >
                      {tabData.map((data, i) => (
                        <Nav.Item as="li" className="h5" key={i}>
                          <Nav.Link eventKey={data.name.toLowerCase()}>
                            <i className={`la la-${data.icon} mr-2`} />
                            {data.name}
                          </Nav.Link>
                        </Nav.Item>
                      ))}
                    </Nav>
                    <Tab.Content>
                      {tabData.map((data, i) => (
                        <Tab.Pane eventKey={data.name.toLowerCase()} key={i}>
                          {data.content}
                        </Tab.Pane>
                      ))}
                    </Tab.Content>
                  </Tab.Container>
                </div>
                <div className="d-flex justify-content-center">
                  <RBButton
                    variant="primary"
                    className="align-items-center"
                    onClick={handleCompareAction}
                  >
                    Compare
                  </RBButton>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col md={8}>
          <SingleSiteSupplierList supplierList={supplierList} />
        </Col>
      </Row>
    </Fragment>
  );
};

export default GenerateQuote;
