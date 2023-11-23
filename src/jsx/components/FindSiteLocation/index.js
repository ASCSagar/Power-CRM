import React, { Fragment, useState } from "react";
import { Button, Form, Input, Modal, Select, Switch } from "antd";
import GasLocationData from "./gasLocationData";
import { Button as RBButton, Nav, Tab as RBTab } from "react-bootstrap";
import ElectricityLocationData from "./electricityLocationData";

const { Option } = Select;

const CreateSite = ({
  isModalVisible,
  setModalState,
  callBack,
  modalTitle,
}) => {
  const [form] = Form.useForm();

  const [showSearchResult, setShowSearchResult] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState([]);

  const handleCancel = () => {
    form.resetFields();
    setShowSearchResult(false);
    setModalState(false);
  };

  const handleSearchAction = () => {
    setShowSearchResult(true);
  };

  const handleLocationSelectAction = () => {
    if (selectedLocation?.[0]) {
      callBack(selectedLocation?.[0]);
      handleCancel();
    }
  };

  const tabData = [
    {
      name: "Gas",
      icon: "burn",
      content: (
        <GasLocationData
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
          handleLocationSelectAction={handleLocationSelectAction}
          handleCancel={handleCancel}
        />
      ),
    },
    {
      name: "Electricity",
      icon: "bolt",
      content: (
        <ElectricityLocationData
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
          handleLocationSelectAction={handleLocationSelectAction}
          handleCancel={handleCancel}
        />
      ),
    },
  ];

  return (
    <Fragment>
      <Modal
        title={modalTitle || "Search By Postcode"}
        open={isModalVisible}
        width={1200}
        footer={null}
        destroyOnClose
        onCancel={handleCancel}
      >
        <Form
          form={form}
          layout="vertical"
          autoComplete="off"
          onFinish={handleSearchAction}
        >
          <div className="row m-0">
            <div className="col-4">
              <Form.Item label="Lookup Type" name="lookup_type">
                <Select>
                  <Select.Option value="site_lookup">Site Lookup</Select.Option>
                </Select>
              </Form.Item>
            </div>
            <div className="col-4">
              <Form.Item label="Search By" name="search_by">
                <Select>
                  <Select.Option value="postcode">Postcode</Select.Option>
                  <Select.Option value="address">Address</Select.Option>
                  <Select.Option value="mpan_bottom_line">
                    MPAN Bottom Line
                  </Select.Option>
                  <Select.Option value="electricity_serial_number">
                    Electricity Serial Number
                  </Select.Option>
                  <Select.Option value="gas_serial_number">
                    Gas Serial Number
                  </Select.Option>
                  <Select.Option value="mrpn">MPRN</Select.Option>
                </Select>
              </Form.Item>
            </div>
            <div className="col-4">
              <Form.Item
                label="Postcode"
                name="postcode"
                rules={[{ required: true, message: "Please enter postcode!" }]}
              >
                <Input />
              </Form.Item>
            </div>
            <div className="col-4">
              <Form.Item label="Include Domestic" name="include_domestic">
                <Switch />
              </Form.Item>
            </div>
            <div className="col-4">
              <Form.Item label="Bypass Cache" name="bypass_cache">
                <Switch />
              </Form.Item>
            </div>
            <div className="col-4">
              <Form.Item label=" ">
                {/* <Button type="primary" htmlType="submit">
                  Search
                </Button> */}
                <RBButton className="btn-sm" variant="primary" type="submit">
                  Search
                </RBButton>
              </Form.Item>
            </div>
          </div>
        </Form>
        {showSearchResult && (
          <>
            <div className="custom-tab-1">
              <RBTab.Container defaultActiveKey={tabData[0].name.toLowerCase()}>
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
                <RBTab.Content>
                  {tabData.map((data, i) => (
                    <RBTab.Pane eventKey={data.name.toLowerCase()} key={i}>
                      {data.content}
                    </RBTab.Pane>
                  ))}
                </RBTab.Content>
              </RBTab.Container>
            </div>
          </>
        )}
      </Modal>
    </Fragment>
  );
};

export default CreateSite;
