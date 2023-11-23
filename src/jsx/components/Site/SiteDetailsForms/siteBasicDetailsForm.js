import React, { Fragment } from "react";
import { Form, Input, Select, Switch } from "antd";

const SiteBasicDetailsForm = () => {
  return (
    <Fragment>
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Our Details</h4>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-6">
              <Form.Item label="Site Reference" name="site_reference">
                <Input placeholder="Site Reference" />
              </Form.Item>
            </div>
            <div className="col-6">
              <Form.Item label="Support Contact" name="support_contact">
                <Select placeholder="Select a support contact">
                  <Select.Option value="demo">Demo</Select.Option>
                  <Select.Option value="demo1">Demo 1</Select.Option>
                  <Select.Option value="demo2">Demo 2</Select.Option>
                </Select>
              </Form.Item>
            </div>
          </div>
          <Form.Item label="Lead Source" name="lead_source">
            <Input placeholder="Lead Source" />
          </Form.Item>
          <Form.Item label="Notes" name="notes">
            <Input placeholder="Notes" />
          </Form.Item>
          <div className="row">
            <div className="col-6">
              <Form.Item label="Lead Gas Type" name="lead_gas_type">
                <Input placeholder="Lead Gas Type" />
              </Form.Item>
            </div>
            <div className="col-6">
              <Form.Item label="Lead Electricity Type" name="lead_ele_type">
                <Input placeholder="Lead Electricity Type" />
              </Form.Item>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <Form.Item label="Bill to Sent" name="bill_to_sent">
                <Switch />
              </Form.Item>
            </div>
            <div className="col-6">
              <Form.Item label="Welcome Letter Send" name="welcome_letter_send">
                <Switch />
              </Form.Item>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SiteBasicDetailsForm;
