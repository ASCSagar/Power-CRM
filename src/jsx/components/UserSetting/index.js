import React, { Fragment, useState } from "react";
import { Form, message } from "antd";
import { Button as RBButton } from "react-bootstrap";
import CustomBreadcrumbTitle from "../../layouts/CustomBreadcrumbTitle";
import PersonalDetailsForm from "./personalDetailsForm";
import ChangePasswordForm from "./changePasswordForm";
import CMSCustomizationForm from "./cmsCustomizationForm";

const UserSettings = () => {
  const [form] = Form.useForm();

  const onFinish = () => {
    message.success("Submit success!");
  };

  const onFinishFailed = () => {
    message.error("Submit failed!");
  };

  const onReset = () => {
    form.resetFields();
  };

  const breadCrumbs = [
    { label: "Home", link: "/dashboard" },
    { label: "User Settings" },
  ];

  return (
    <Fragment>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <CustomBreadcrumbTitle breadCrumbs={breadCrumbs} />
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-4">
                <PersonalDetailsForm />
              </div>
              <div className="col-4">
                <ChangePasswordForm />
              </div>
              <div className="col-4">
                <CMSCustomizationForm />
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-start align-items-center pb-3">
          <RBButton className="btn-sm" variant="primary">
            Update
          </RBButton>
        </div>
      </Form>
    </Fragment>
  );
};

export default UserSettings;
