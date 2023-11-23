import React, { Fragment } from "react";
import { Form, Input } from "antd";

const ChangePasswordForm = () => {
  return (
    <Fragment>
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Change Password</h4>
        </div>
        <div className="card-body">
          <Form.Item label="Current Password" name="current_password">
            <Input placeholder="Current Password" type="password" />
          </Form.Item>
          <Form.Item label="New Password" name="new_password">
            <Input placeholder="New Password" type="password" />
          </Form.Item>
          <Form.Item label="Re-enter New Password" name="confirm_new_password">
            <Input placeholder="Re-enter New Password" type="password" />
          </Form.Item>
        </div>
      </div>
    </Fragment>
  );
};

export default ChangePasswordForm;
