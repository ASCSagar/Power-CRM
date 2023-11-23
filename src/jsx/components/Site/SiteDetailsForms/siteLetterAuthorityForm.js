import React, { Fragment } from "react";
import { Form, Input, Select } from "antd";

const SiteLetterAuthorityForm = () => {
  return (
    <Fragment>
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Letter of Authority</h4>
        </div>
        <div className="card-body">
          <Form.Item label="Agent Email" name="agent_email">
            <label>{"test@test.com"}</label>
          </Form.Item>
          <Form.Item label="LOA Header to Use" name="loa_header_to_use">
            <Select placeholder="Select a LOA Header to Use">
              <Select.Option value="demo">Demo</Select.Option>
              <Select.Option value="demo1">Demo 1</Select.Option>
              <Select.Option value="demo2">Demo 2</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="LOA Template" name="loa_template">
            <Select placeholder="Select a LOA Template">
              <Select.Option value="demo">Demo</Select.Option>
              <Select.Option value="demo1">Demo 1</Select.Option>
              <Select.Option value="demo2">Demo 2</Select.Option>
            </Select>
          </Form.Item>
        </div>
      </div>
    </Fragment>
  );
};

export default SiteLetterAuthorityForm;
