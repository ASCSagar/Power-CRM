import React, { Fragment } from "react";
import { Form, Input, message, Select } from "antd";

import { Button as RBButton } from "react-bootstrap";
import { DatePicker } from "antd";
const { Option } = Select;

const CreateCompanyStep2 = (props) => {
  const [form] = Form.useForm();

  const onFinish = () => {
    console.log("Submit success!");
    message.success("Step 2 Submit success!");
    props.OnSubmitStep2();
  };

  const onFinishFailed = () => {
    message.error("Submit failed!");
  };

  const onReset = () => {
    form.resetFields();
  };

  const onChangeDate = (date, dateString) => {
    console.log(date, dateString);
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
              Step (2 of 3)
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
                <div className="mb-5 text-center">
                  <h5 className="card-title">Contact Details</h5>
                </div>
                <div className="form-group">
                  <div className="row">
                    <div className="col-lg-6">
                      <Form.Item
                        label="Primary Contact First Name"
                        className="text-label"
                        name="first_name"
                        rules={[
                          {
                            required: true,
                            message: "Please enter First Name!",
                          },
                        ]}
                      >
                        <Input placeholder="" />
                      </Form.Item>
                    </div>
                    <div className="col-lg-6">
                      <Form.Item
                        label="Primary Contact Last Name"
                        className="text-label"
                        name="last_name"
                        rules={[
                          {
                            required: true,
                            message: "Please enter Last Name!",
                          },
                        ]}
                      >
                        <Input placeholder="" />
                      </Form.Item>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <Form.Item label="Contact Title" name="contact_title">
                        <Select placeholder="Contact Title">
                          <Option value="demo">Demo</Option>
                        </Select>
                      </Form.Item>
                    </div>
                    <div className="col-lg-6">
                      <Form.Item
                        label="Primary Contact Position"
                        name="position"
                        style={{ flex: 1 }}
                        rules={[
                          {
                            required: false,
                            message: "Please enter contact Position!",
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
                        label="Telephone Number"
                        name="telephone_number"
                        style={{ flex: 1 }}
                        rules={[
                          {
                            required: true,
                            message: "Please Enter Telephone Number!",
                          },
                        ]}
                      >
                        <Input placeholder="Telephone Number" />
                      </Form.Item>
                    </div>
                    <div className="col-lg-6">
                      <Form.Item
                        label="Primary Contact Email"
                        name="email"
                        style={{ flex: 1 }}
                        rules={[
                          {
                            required: false,
                            message: "Please Enter Email!",
                          },
                        ]}
                      >
                        <Input placeholder="Email" />
                      </Form.Item>
                    </div>
                  </div>
                  <div className="mt-4 mb-5 text-center">
                    <h5 className="card-title">Partner Information</h5>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <Form.Item
                        label="Owner/Partner Name"
                        name="partner"
                        style={{ flex: 1 }}
                        rules={[
                          {
                            required: true,
                            message: "Please Enter Owner/Partner Name!",
                          },
                        ]}
                      >
                        <Input placeholder="" />
                      </Form.Item>
                    </div>
                    <div className="col-lg-6">
                      <Form.Item
                        label="Home Postcode"
                        name="home_postcode"
                        style={{ flex: 1 }}
                        rules={[
                          {
                            required: true,
                            message: "Please Enter Postcode!",
                          },
                        ]}
                      >
                        <Input placeholder="Home Postcode" />
                      </Form.Item>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <Form.Item
                        label="Owner/Partner DOB"
                        name="date_of_birth"
                        style={{ flex: 1 }}
                        rules={[
                          {
                            required: true,
                            message: "Please Enter DOB!",
                          },
                        ]}
                      >
                        <DatePicker
                          style={{ width: "100%" }}
                          size={"large"}
                          onChange={onChangeDate}
                        />
                      </Form.Item>
                    </div>
                    <div className="col-lg-6">
                      <Form.Item label="Address" name="address">
                        <Select placeholder="address">
                          <Option value="demo">Demo</Option>
                        </Select>
                      </Form.Item>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <Form.Item
                        label="Time at Address(Years)"
                        name="time_years"
                        style={{ flex: 1 }}
                        rules={[
                          {
                            required: true,
                            message: "Please Enter Number of Years at Address!",
                          },
                        ]}
                      >
                        <Input placeholder="Years" />
                      </Form.Item>
                    </div>
                    <div className="col-lg-6">
                      <Form.Item
                        label="Time at Address(Months)"
                        name="time_months"
                        style={{ flex: 1 }}
                        rules={[
                          {
                            required: true,
                            message:
                              "Please Enter Number of Months at Address!",
                          },
                        ]}
                      >
                        <Input placeholder="Months" />
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
          {/* <div className="mt-4 mb-5 text-center">
                        <h5 className="card-title">Partner Information</h5>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <Form.Item
                                label="Owner/Partner Name"
                                name="partner"
                                style={{ flex: 1 }}
                                rules={[
                                    {
                                        required: true,
                                        message: "Please Enter Owner/Partner Name!",
                                    },
                                ]}
                            >
                                <Input placeholder="" />
                            </Form.Item>
                        </div>
                        <div className="col-lg-6">
                            <Form.Item
                                label="Nome Postcode"
                                name="home_postcode"
                                style={{ flex: 1 }}
                                rules={[
                                    {
                                        required: true,
                                        message: "Please Enter Postcode!",
                                    },
                                ]}
                            >
                                <Input placeholder="Home Postcode" />
                            </Form.Item>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <Form.Item
                                label="Owner/Partner DOB"
                                name="date_of_birth"
                                style={{ flex: 1 }}
                                rules={[
                                    {
                                        required: true,
                                        message: "Please Enter DOB!",
                                    },
                                ]}
                            >
                                <DatePicker
                                    style={{ width: "100%" }}
                                    size={"large"}
                                    onChange={onChangeDate}
                                />
                            </Form.Item>
                        </div>
                    </div> */}
        </div>
      </div>
      {/* <div className="card-footer">
                <Form.Item>
                    <RBButton variant="primary" type="submit">
                        <i className="fa fa-arrow-right mr-2"></i>
                        Next
                    </RBButton>
                    <RBButton
                        variant="light"
                        className="ml-3"
                        onClick={onReset}
                    >
                        Cancel
                    </RBButton>
                </Form.Item>
            </div> */}
      {/* </Form>
            </div>
          </div>
        </div> */}
    </Fragment>
  );
};

export default CreateCompanyStep2;
