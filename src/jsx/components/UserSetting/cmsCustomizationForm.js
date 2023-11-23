import React, { Fragment } from "react";
import { Checkbox, Divider, Form, Input, Radio, Select, Switch } from "antd";

const CMSCustomizationForm = () => {
  return (
    <Fragment>
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">CMS Customization</h4>
        </div>
        <div className="card-body">
          <Divider orientation="center">Time Zone Settings</Divider>
          <Form.Item name="default_time_zone">
            <Checkbox
              value="Default Brokerage Time Zone"
              style={{ lineHeight: "32px" }}
            >
              Default Brokerage Time Zone
            </Checkbox>
          </Form.Item>
          <Form.Item label="Time Zone">
            <span className="">Dublin, Edinburgh, Lisboin, London </span>
          </Form.Item>
          <Divider orientation="center">Quote Preference</Divider>
          <Form.Item
            label="Populate Supplier and Contract End Date in Current Supplies with quote information if they are blank?"
            valuePropName="checked"
          >
            <Radio.Group>
              <Radio value="yes"> Yes </Radio>
              <Radio value="no"> No </Radio>
              <Radio value="ask_every_time"> Ask Every Time </Radio>
            </Radio.Group>
          </Form.Item>
        </div>
      </div>
    </Fragment>
  );
};

export default CMSCustomizationForm;
