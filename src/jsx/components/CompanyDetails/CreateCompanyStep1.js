import React, { Fragment } from "react";
import { Form, Input, message, Select } from "antd";
import { Button as RBButton } from "react-bootstrap";
import { Switch } from "antd";

const { Option } = Select;

const CreateCompanyStep1 = (props) => {
  const [form] = Form.useForm();

  const onFinish = () => {
    console.log("Submit success!");
    message.success("Submit success!");
    props.OnSubmitStep1();
  };

  const onFinishFailed = () => {
    message.error("Submit failed!");
  };

  const onReset = () => {
    form.resetFields();
  };

  const onChangeSwitch = (checked) => {
    console.log(`switch to ${checked}`);
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
              Step (1 of 3)
            </h4>
            <Form
              form={form}
              name="create_company"
              layout="vertical"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              {/* <div className="card-body">
                  <div className="form-group">
                    <div className="row">
                      <div className="col-lg-6">
                        <Form.Item
                          label="Postcode"
                          className="text-label"
                          name="postcode"
                          rules={[
                            {
                              required: true,
                              message: "Please enter Postcode!",
                            },
                          ]}
                        > */}
              <div className="card-body">
                <div className="form-group">
                  <div className="row">
                    <div className="col-lg-6">
                      <Form.Item
                        label="Postcode"
                        className="text-label"
                        name="postcode"
                        rules={[
                          { required: true, message: "Please enter Postcode!" },
                        ]}
                      >
                        <Input placeholder="" />
                      </Form.Item>
                    </div>
                    <div className="col-lg-6">
                      <Form.Item label="Business Type" name="business_type">
                        <Select placeholder="Select Business Type">
                          <Option value="demo">Demo</Option>
                        </Select>
                      </Form.Item>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <Form.Item label="Company List" name="company_list">
                        <Select placeholder="Select Company List">
                          <Option value="demo">Demo</Option>
                        </Select>
                      </Form.Item>
                    </div>
                    <div className="col-lg-6">
                      <Form.Item
                        label="Company Name"
                        className="text-label"
                        name="company_name"
                        rules={[
                          {
                            required: false,
                            message: "Please enter Company Name!",
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
                        label="Number of Employees"
                        className="text-label"
                        name="number_of_employees"
                        rules={[
                          {
                            required: false,
                            message: "Please enter Number of Employees!",
                          },
                        ]}
                      >
                        <Input placeholder="" />
                      </Form.Item>
                    </div>
                    <div className="col-lg-6">
                      <Form.Item
                        label="Estimated Turnover"
                        name="estimated_turnover"
                        style={{ flex: 1 }}
                        rules={[
                          {
                            required: false,
                            message: "Please Enter Estimated Turnover!",
                          },
                        ]}
                      >
                        <Input placeholder="" />
                      </Form.Item>
                    </div>
                  </div>
                  {/* <div className="row">
                                        <div className="col-lg-6">
                                            <Form.Item label="Registration No."
                                                name="registration_number"
                                                style={{ flex: 1 }}
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: "Please Enter Registration Number!",
                                                    },
                                                ]}>
                                                <Input placeholder="Registration Number" />
                                            </Form.Item>
                                        </div>
                                        <Form.Item
                                            label="Is Micro Buisness"
                                            className="text-label"
                                            name="is_micro_buisness"
                                            rules={[
                                                { required: false, message: "!Required" },
                                            ]}
                                        >
                                            <Switch defaultChecked onChange={onChangeSwitch} />
                                        </Form.Item>
                                    </div> */}
                  <div className="row">
                    <div className="col-lg-6">
                      <Form.Item
                        label="Registration No."
                        name="registration_number"
                        style={{ flex: 1 }}
                        rules={[
                          {
                            required: true,
                            message: "Please Enter Registration Number!",
                          },
                        ]}
                      >
                        <Input placeholder="Registration Number" />
                      </Form.Item>
                    </div>
                    <div className="col-lg-6">
                      <Form.Item
                        label="Is Micro Business"
                        className="text-label"
                        name="is_micro_business"
                        rules={[{ required: false, message: "!Required" }]}
                      >
                        <Switch defaultChecked onChange={onChangeSwitch} />
                      </Form.Item>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <Form.Item>
                  <RBButton variant="primary" type="submit">
                    <i className="fa fa-arrow-right mr-2"></i>
                    Next
                  </RBButton>
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

export default CreateCompanyStep1;
