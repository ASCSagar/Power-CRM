import React, { useState } from "react";
import {
  Button,
  Checkbox,
  Col,
  DatePicker,
  Drawer,
  Form,
  Input,
  Row,
  Select,
  Space,
  Switch,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Accordion, Card } from "react-bootstrap";

const { Option } = Select;

const RefineSiteDataForm = (props) => {
  const { open, onClose } = props;

  const [activeDefault, setActiveDefault] = useState(0);

  return (
    <>
      <Drawer
        title="Refine Suppliers Data"
        width={520}
        onClose={onClose}
        open={open}
        bodyStyle={{ paddingBottom: 80 }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={onClose} type="primary">
              Submit
            </Button>
          </Space>
        }
      >
        <Form layout="vertical" hideRequiredMark>
          <Accordion
            className="accordion accordion-solid-bg w-100"
            defaultActiveKey="site_details"
          >
            <div className="accordion__item">
              <Accordion.Toggle
                as={"div"}
                eventKey={`site_details`}
                className={`accordion__header rounded-lg pt-3 pb-3 ${
                  activeDefault !== "site_details" && "collapsed"
                }`}
                onClick={() =>
                  setActiveDefault(
                    activeDefault === "site_details" ? -1 : "site_details"
                  )
                }
              >
                <span className="accordion__header--text">
                  {"Team/Year Toogle"}
                </span>
                <span className="accordion__header--indicator"></span>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey={`site_details`}>
                <div className="accordion__body--text pb-0 pl-0 pr-0">
                  <Form.Item label="Show As Year" name="show_as_year">
                    <Switch />
                  </Form.Item>
                </div>
              </Accordion.Collapse>
            </div>
            <div className="accordion__item">
              <Accordion.Toggle
                as={"div"}
                eventKey={`usage_details`}
                className={`accordion__header rounded-lg pt-3 pb-3 ${
                  activeDefault !== "usage_details" && "collapsed"
                }`}
                onClick={() =>
                  setActiveDefault(
                    activeDefault === "usage_details" ? -1 : "usage_details"
                  )
                }
              >
                <span className="accordion__header--text">
                  {"Filter By Item"}
                </span>
                <span className="accordion__header--indicator"></span>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey={`usage_details`}>
                <div className="accordion__body--text pb-0 pl-0 pr-0">
                  <Form.Item label="Min (Months)" name="usage">
                    <Input />
                  </Form.Item>
                  <Form.Item label="Max (Months)" name="old_rate">
                    <Input />
                  </Form.Item>
                </div>
              </Accordion.Collapse>
            </div>
            <div className="accordion__item">
              <Accordion.Toggle
                as={"div"}
                eventKey={`contract_details`}
                className={`accordion__header rounded-lg pt-3 pb-3 ${
                  activeDefault !== "contract_details" && "collapsed"
                }`}
                onClick={() =>
                  setActiveDefault(
                    activeDefault === "contract_details"
                      ? -1
                      : "contract_details"
                  )
                }
              >
                <span className="accordion__header--text">
                  {"Filter By Supplier"}
                </span>
                <span className="accordion__header--indicator"></span>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey={`contract_details`}>
                <div className="accordion__body--text pb-0 pl-0 pr-0">
                  <Form.Item label="Select Suppliers" name="suppliers">
                    <Select
                      mode="multiple"
                      placeholder="Please select suppliers"
                    >
                      <Option value="supplier 1">Supplier 1</Option>
                      <Option value="supplier 2">Supplier 2</Option>
                      <Option value="supplier 3">Supplier 3</Option>
                      <Option value="supplier 4">Supplier 4</Option>
                    </Select>
                  </Form.Item>
                </div>
              </Accordion.Collapse>
            </div>
            <div className="accordion__item">
              <Accordion.Toggle
                as={"div"}
                eventKey={`additional_details`}
                className={`accordion__header rounded-lg pt-3 pb-3 ${
                  activeDefault !== "additional_details" && "collapsed"
                }`}
                onClick={() =>
                  setActiveDefault(
                    activeDefault === "additional_details"
                      ? -1
                      : "additional_details"
                  )
                }
              >
                <span className="accordion__header--text">
                  {"Filter By Site"}
                </span>
                <span className="accordion__header--indicator"></span>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey={`additional_details`}>
                <div className="accordion__body--text pb-0 pl-0 pr-0">
                  <Form.Item label="Select Site" name="sites">
                    <Select
                      mode="multiple"
                      placeholder="Please select suppliers"
                    >
                      <Option value="site 1">Site 1</Option>
                      <Option value="site 2">Site 2</Option>
                      <Option value="site 3">Site 3</Option>
                      <Option value="site 4">Site 4</Option>
                    </Select>
                  </Form.Item>
                </div>
              </Accordion.Collapse>
            </div>
            <div className="accordion__item">
              <Accordion.Toggle
                as={"div"}
                eventKey={`export_settings`}
                className={`accordion__header rounded-lg pt-3 pb-3 ${
                  activeDefault !== "export_settings" && "collapsed"
                }`}
                onClick={() =>
                  setActiveDefault(
                    activeDefault === "export_settings" ? -1 : "export_settings"
                  )
                }
              >
                <span className="accordion__header--text">
                  {"Export Settings"}
                </span>
                <span className="accordion__header--indicator"></span>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey={`export_settings`}>
                <div className="accordion__body--text pb-0 pl-0 pr-0">
                  <Form.Item label="Quote View" name="quote_view">
                    <Select shape="round">
                      <Option value="summery">Summery</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item
                    label="Selection Position"
                    name="selection_position"
                  >
                    <Select shape="round">
                      <Option value="top">Top</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item label="Hide Supplier Name" name="show_as_year">
                    <Switch />
                  </Form.Item>
                  <Form.Item label="Hide Extra Info" name="show_as_year">
                    <Switch />
                  </Form.Item>
                  <Form.Item label="Hide Current Supply" name="show_as_year">
                    <Switch />
                  </Form.Item>
                </div>
              </Accordion.Collapse>
            </div>
          </Accordion>
        </Form>
      </Drawer>
    </>
  );
};

export default RefineSiteDataForm;
