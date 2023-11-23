import React, { Fragment, useState } from "react";
import { Form, Input, Select } from "antd";
import { Accordion, Card } from "react-bootstrap";

const GasDetailsForm = ({ setShowSiteDetails }) => {
  const [activeDefault, setActiveDefault] = useState(0);
  return (
    <Fragment>
      <div className="d-flex justify-content-between mb-2">
        <span>
          <i
            className="btn fa fa-arrow-left p-0 cursor-pointer"
            onClick={() => setShowSiteDetails(false)}
          ></i>
        </span>
        <span>
          <strong className="h4">{"Site Name"}</strong>
        </span>
        <span></span>
      </div>
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
            <span className="accordion__header--text">{"Site Details"}</span>
            <span className="accordion__header--indicator"></span>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey={`site_details`}>
            <div className="accordion__body--text pb-0 pl-0 pr-0">
              <Form.Item label="Postcode" name="postcode">
                <Input />
              </Form.Item>
              <Form.Item label="MPR" name="mpr" className="pb-0">
                <Input />
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
            <span className="accordion__header--text">{"Usage Details"}</span>
            <span className="accordion__header--indicator"></span>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey={`usage_details`}>
            <div className="accordion__body--text pb-0 pl-0 pr-0">
              <Form.Item label="Usage" name="usage">
                <Input />
              </Form.Item>
              <Form.Item label="Old Rate" name="old_rate">
                <Input />
              </Form.Item>
              <Form.Item label="Standing Charge" name="standing_charge">
                <Input />
              </Form.Item>
              <Form.Item
                label="Current Cost"
                name="current_cost"
                className="pb-0"
              >
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
                activeDefault === "contract_details" ? -1 : "contract_details"
              )
            }
          >
            <span className="accordion__header--text">
              {"Contract Details"}
            </span>
            <span className="accordion__header--indicator"></span>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey={`contract_details`}>
            <div className="accordion__body--text pb-0 pl-0 pr-0">
              <Form.Item label="Payment Type" name="payment_type">
                <Input />
              </Form.Item>
              <Form.Item label="Current Supplier" name="current_supplier">
                <Input />
              </Form.Item>
              <Form.Item label="Renewal Date" name="renewal_date">
                <Input />
              </Form.Item>
              <Form.Item label="Unit Rate Uplift" name="unit_rate_uplift">
                <Input />
              </Form.Item>
              <Form.Item
                label="Contract Email"
                name="contract_email"
                className="pb-0"
              >
                <Input />
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
              {"Additional Details"}
            </span>
            <span className="accordion__header--indicator"></span>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey={`additional_details`}>
            <div className="accordion__body--text pb-0 pl-0 pr-0">
              <Form.Item
                label="Credit Score"
                name="credit_score"
                className="pb-0"
              >
                <Input />
              </Form.Item>
            </div>
          </Accordion.Collapse>
        </div>
      </Accordion>
    </Fragment>
  );
};

export default GasDetailsForm;
