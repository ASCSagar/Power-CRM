import React, { Fragment, useState } from "react";
import {
  Button,
  Form,
  Input,
  message,
  Modal,
  Select,
  DatePicker,
  TimePicker,
  Row,
  Col,
} from "antd";
import { Link } from "react-router-dom";
import { Button as RBButton } from "react-bootstrap";

const { Option } = Select;

const REMINDER_TYPES = [
  {
    label: "Callback",
    value: "callback",
  },
  {
    label: "Quote Callback",
    value: "quote_callback",
  },
  {
    label: "FSO Callback",
    value: "fso_callback",
  },
  {
    label: "Renewal Callback",
    value: "renewal_callback",
  },
  {
    label: "Other",
    value: "other",
  },
];

const CreateEditReminder = (props) => {
  const { isModalVisible, setModalState, successCallBack, modalTitle, mode } =
    props;
  // const [isModalOpen, setIsModalOpen] = useState(false);

  const [form] = Form.useForm();
  const reminderTypeValue = Form.useWatch("reminder_type", form);

  const onFinish = () => {
    message.success("Submit success!");
  };

  const onFinishFailed = () => {
    message.error("Submit failed!");
  };

  const onFinishForm = () => {
    message.success("Submit success!");
    successCallBack();
  };

  const onReset = () => {
    form.resetFields();
  };

  const handleClose = () => {
    form.resetFields();
    setModalState(false);
  };

  return (
    <Fragment>
      {/* <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Create New Site</h4>
            </div>
            <Form
              form={form}
              name="create_edit_reminder"
              layout="vertical"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <div className="card-body">
                <div className="form-group">
                  <Form.Item label="Parent Company" name="parent_company">
                    <Select placeholder="Select a parent company">
                      {REMINDER_TYPES.map((reminder, index) => (
                        <Option key={index} value={reminder.value}>
                          {reminder.label}
                        </Option>
                      ))}
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
                      <Link to="/create-company">
                        <RBButton onClick={() => setIsModalOpen(true)}>
                          <i className="fa fa-plus mr-2"></i>
                          Create New Company
                        </RBButton>
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
      </div> */}
      <Modal
        title={modalTitle}
        open={isModalVisible}
        okText={mode === "add" ? "Create" : "Update"}
        cancelText="Cancel"
        onCancel={handleClose}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              onFinishForm();
            })
            .catch((info) => {
              console.log("Validate Failed:", info);
            });
        }}
      >
        <Form
          form={form}
          name="create_edit_reminder"
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <div className="form-group">
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
                <Option value="demo">Demo</Option>
                <Option value="demo1">Demo 1</Option>
                <Option value="demo2">Demo 2</Option>
              </Select>
            </Form.Item>
            <Form.Item label="Site" name="site">
              <Select placeholder="Select a site">
                <Option value="demo">Site 1</Option>
                <Option value="demo1">Site 2</Option>
                <Option value="demo2">Site 3</Option>
              </Select>
            </Form.Item>
            <Row gutter={12}>
              <Col span={12}>
                <Form.Item
                  label="Date"
                  name="reminder_date"
                  style={{ width: "100%" }}
                  rules={[
                    {
                      required: true,
                      message: "Please select reminder date!",
                    },
                  ]}
                >
                  <DatePicker style={{ width: "100%" }} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Time"
                  name="reminder_time"
                  rules={[
                    {
                      required: true,
                      message: "Please select reminder time!",
                    },
                  ]}
                >
                  <TimePicker style={{ width: "100%" }} format={"HH:mm"} />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={12}>
              <Col span={10}>
                <Form.Item
                  label="Priority"
                  name="reminder_priority"
                  rules={[
                    {
                      required: true,
                      message: "Please enter priority!",
                    },
                  ]}
                >
                  <Input placeholder="Priority" type="number" min={1} />
                </Form.Item>
              </Col>
              <Col span={14}>
                <Form.Item
                  label="Reminder Type"
                  name="reminder_type"
                  rules={[
                    {
                      required: true,
                      message: "Please select reminder type!",
                    },
                  ]}
                >
                  <Select placeholder="Select a reminder type">
                    {REMINDER_TYPES.map((reminder, index) => (
                      <Option key={index} value={reminder.value}>
                        {reminder.label}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            {reminderTypeValue === "other" && (
              <Form.Item label="Other Type">
                <Input placeholder="Other Type" />
              </Form.Item>
            )}
            <Form.Item label="Reminder Description">
              <Input.TextArea placeholder="Reminder Description" rows={5} />
            </Form.Item>
          </div>
        </Form>
      </Modal>
    </Fragment>
  );
};

export default CreateEditReminder;
