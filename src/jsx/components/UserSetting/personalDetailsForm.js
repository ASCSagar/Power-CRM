import React, { Fragment } from "react";
import { Form, Input } from "antd";

const PersonalDetailsForm = () => {
  return (
    <Fragment>
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Personal Details</h4>
        </div>
        <div className="card-body">
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please enter name!" }]}
          >
            <Input placeholder="Name" />
          </Form.Item>
          <Form.Item label="Job Title" name="job_title">
            <Input placeholder="Job Title" />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please enter email!" }]}
          >
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item
            label="Phone"
            name="phone"
            rules={[{ required: true, message: "Please enter phone!" }]}
          >
            <Input placeholder="Phone" />
          </Form.Item>
        </div>
      </div>
    </Fragment>
  );
};

export default PersonalDetailsForm;
