import React, { Fragment } from "react";
import { Form, Input, Select } from "antd";

const SiteDetailsForm = () => {
  return (
    <Fragment>
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Site Details</h4>
        </div>
        <div className="card-body">
          <Form.Item label="Parent Company" name="parent_company">
            <Select placeholder="Select a parent company">
              <Select.Option value="demo">Demo</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Site Name"
            name="site_name"
            rules={[
              {
                required: true,
                message: "Please enter site name!",
              },
            ]}
          >
            <Input placeholder="Site name" />
          </Form.Item>
          <Form.Item
            label="Company"
            name="company"
            rules={[
              {
                required: true,
                message: "Please select company!",
              },
            ]}
          >
            <Select placeholder="Select a company">
              <Select.Option value="demo">Demo</Select.Option>
              <Select.Option value="demo1">Demo 1</Select.Option>
              <Select.Option value="demo2">Demo 2</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Type Of Owner">
            <Input placeholder="Select Type Of Owner" />
          </Form.Item>
          <Form.Item label="Owner Name">
            <Input placeholder="Owner Name" />
          </Form.Item>
          <Form.Item label="Current Gas and Electricity Supplier details">
            <Input placeholder="Current Gas and Electricity Supplier details" />
          </Form.Item>
        </div>
      </div>
    </Fragment>
  );
};

export default SiteDetailsForm;
