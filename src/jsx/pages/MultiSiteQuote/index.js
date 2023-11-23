import React, { Fragment, useState } from "react";
import { Form, Select } from "antd";
import { Button as RBButton, Card, Col, Nav, Row, Tab } from "react-bootstrap";
import MultiSiteSelectionForm from "../../components/MutliSiteGenerateQuote/MutliSiteSelectionForm";
import MultiSiteSuppliersList from "../../components/MutliSiteGenerateQuote/MultiSiteSuppliersList";
import CustomBreadcrumbTitle from "../../layouts/CustomBreadcrumbTitle";

const { Option } = Select;

const MultiSiteGenerateQuote = () => {
  const [form] = Form.useForm();

  const [supplierList, setSupplierList] = useState(false);

  const tabData = [
    {
      name: "Gas",
      icon: "burn",
      content: <MultiSiteSelectionForm supplyType={"gas"} />,
    },
    {
      name: "Electricity",
      icon: "bolt",
      content: <MultiSiteSelectionForm supplyType={"electricity"} />,
    },
  ];

  const handleCompareAction = () => {
    setSupplierList(true);
  };

  const breadCrumbs = [
    { label: "Home", link: "/dashboard" },
    { label: "Group Quote" },
  ];

  return (
    <Fragment>
      <CustomBreadcrumbTitle breadCrumbs={breadCrumbs} />
      <Row>
        <Col md={4}>
          <Card>
            <Card.Header>
              <Card.Title>Site Supply Details</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 18 }}
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
          <MultiSiteSuppliersList supplierList={supplierList} />
        </Col>
      </Row>
    </Fragment>
  );
};

export default MultiSiteGenerateQuote;
