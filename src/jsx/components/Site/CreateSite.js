import React, { Fragment, useState } from "react";
import { Button, Form, Input, message, Modal, Select } from "antd";
import { Link } from "react-router-dom";
import { Button as RBButton } from "react-bootstrap";

const { Option } = Select;

const CreateSite = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [form] = Form.useForm();
  const [companyForm] = Form.useForm();

  const onFinish = () => {
    message.success("Submit success!");
  };

  const onFinishFailed = () => {
    message.error("Submit failed!");
  };

  const onFinishCompanyForm = () => {
    message.success("Submit success!");
  };

  const onCompanyFormFinishFailed = () => {
    message.error("Submit failed!");
  };

  const onReset = () => {
    form.resetFields();
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    companyForm.resetFields();
    setIsModalOpen(false);
  };

  return (
    <Fragment>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Create New Site</h4>
            </div>
            <Form
              form={form}
              name="create_site"
              layout="vertical"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <div className="card-body">
                <div className="form-group">
                  <Form.Item label="Parent Company" name="parent_company">
                    <Select placeholder="Select a parent company">
                      <Option value="demo">Demo</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item
                    label="Site Name"
                    className="text-label"
                    name="site_name"
                    rules={[
                      { required: true, message: "Please enter site name!" },
                    ]}
                  >
                    <Input placeholder="Site name" />
                  </Form.Item>
                  <div className="row m-0">
                    <Form.Item
                      label="Company"
                      name="company"
                      style={{ flex: 1 }}
                      rules={[
                        {
                          required: true,
                          message: "Please select company!",
                        },
                      ]}
                    >
                      <Select placeholder="Select a company">
                        <Option value="demo">Demo</Option>
                        <Option value="demo1">Demo 1</Option>
                        <Option value="demo2">Demo 2</Option>
                      </Select>
                    </Form.Item>
                    <Form.Item label=" " className="ml-3">
                      <Link
                        to="/create-company"
                        className="btn-sm btn-primary cursor-pointer border-round"
                      >
                        {/* <RBButton
                          onClick={() => setIsModalOpen(true)}
                          size="sm"
                        > */}
                        <i className="fa fa-plus mr-2"></i>
                        Create New Company
                        {/* </RBButton> */}
                      </Link>
                    </Form.Item>
                  </div>
                  <Form.Item label="Reference">
                    <Input placeholder="Reference" />
                  </Form.Item>
                </div>
              </div>
              <div className="card-footer">
                <Form.Item>
                  <Link to="/site-details/demo1234">
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
      <Modal
        title="Create New Company"
        open={isModalOpen}
        okText="Create"
        cancelText="Cancel"
        onCancel={handleCancel}
        onOk={() => {
          companyForm
            .validateFields()
            .then((values) => {
              companyForm.resetFields();
              onFinishCompanyForm();
            })
            .catch((info) => {
              console.log("Validate Failed:", info);
            });
        }}
      >
        <Form
          form={companyForm}
          layout="vertical"
          onFinish={onFinishCompanyForm}
          onFinishFailed={onCompanyFormFinishFailed}
          autoComplete="off"
          footer={null}
        >
          <Form.Item
            label="Company Name"
            name="company_name"
            rules={[{ required: true, message: "Please enter company name!" }]}
          >
            <Input placeholder="Company name" />
          </Form.Item>
        </Form>
      </Modal>
    </Fragment>
  );
};

export default CreateSite;
