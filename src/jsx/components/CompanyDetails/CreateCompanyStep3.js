import React, { Fragment } from "react";
import { Form, Input, message } from "antd";
import { Link } from "react-router-dom";
import { Button as RBButton } from "react-bootstrap";

const CreateCompanyStep3 = (props) => {
  const [form] = Form.useForm();

  const onFinish = () => {
    console.log("Submit success!");
    message.success("Submit success!");
    props.OnFinalSubmit();
  };

  const onFinishFailed = () => {
    message.error("Submit failed!");
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <Fragment>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Create New Company</h4>
            </div>
            <h4 style={{ color: "grey", margin: "10px auto" }}>
              Step (3 of 3)
            </h4>
            <Form
              form={form}
              name="create_company"
              layout="vertical"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <div className="card-body">
                <div className="form-group">
                  <div className="row">
                    <div className="col-lg-6">
                      <Form.Item
                        label="Account No."
                        className="text-label"
                        name="account_number"
                        rules={[
                          {
                            required: true,
                            message: "Please enter Account Number!",
                          },
                        ]}
                      >
                        <Input placeholder="" />
                      </Form.Item>
                    </div>

                    <div className="col-lg-6">
                      <Form.Item
                        label="Sort code"
                        className="text-label"
                        name="sortcode"
                        rules={[
                          {
                            required: true,
                            message: "Please enter Sort code!",
                          },
                        ]}
                      >
                        <Input placeholder="" />
                      </Form.Item>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <Form.Item
                        label="Bank Name"
                        className="text-label"
                        name="bank_name"
                        rules={[
                          {
                            required: true,
                            message: "Please enter Bank Name!",
                          },
                        ]}
                      >
                        <Input placeholder="" />
                      </Form.Item>
                    </div>

                    <div className="col-lg-6">
                      <Form.Item
                        label="Account Name"
                        className="text-label"
                        name="account_name"
                        rules={[
                          {
                            required: true,
                            message: "Please enter Account Name!",
                          },
                        ]}
                      >
                        <Input placeholder="" />
                      </Form.Item>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <Form.Item>
                  <Link to="/company-details/demo1234">
                    <RBButton variant="primary" type="submit">
                      <i className="fa fa-plus mr-2"></i>
                      Create
                    </RBButton>
                  </Link>
                  <RBButton variant="light" className="ml-3" onClick={onReset}>
                    Cancel
                  </RBButton>
                </Form.Item>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CreateCompanyStep3;
