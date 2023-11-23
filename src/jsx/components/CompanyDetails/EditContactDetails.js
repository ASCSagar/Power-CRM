import React, { Fragment } from "react";
import { Form, Input, message, Modal, Select, Switch } from "antd";
import { Button as RBButton } from "react-bootstrap";

const { Option } = Select;

const EditContactDetails = ({
  isModalVisible,
  setModalState,
  callBack,
  modalTitle,
}) => {
  const [form] = Form.useForm();

  const onFinishForm = () => {
    message.success("Submit success!");
    console.log("Submit success!");
    setModalState(false);
  };

  const onFormFinishFailed = () => {
    message.error("Submit failed!");
  };

  const handleCancel = () => {
    form.resetFields();
    setModalState(false);
  };

  const onChangeSwitch = (checked) => {
    console.log(`switch to ${checked}`);
  };

  return (
    <Fragment>
      <Modal
        title={modalTitle || "Edit Bank Details"}
        open={isModalVisible}
        footer={null}
        destroyOnClose
        onCancel={handleCancel}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinishForm}
          onFinishFailed={onFormFinishFailed}
          autoComplete="off"
          footer={null}
        >
          <>
            <Form.Item
              label="Job Title"
              className="text-label"
              name="job_title"
              rules={[{ required: false, message: "Please enter Job Title!" }]}
            >
              <Input placeholder="" />
            </Form.Item>
            <Form.Item label="Business Type" name="bussiness_type">
              <Select placeholder="Select Business Type">
                <Option value="demo">Mr</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="First Name"
              className="text-label"
              name="first_name"
              rules={[{ required: true, message: "Please enter First Name!" }]}
            >
              <Input placeholder="" />
            </Form.Item>
            <Form.Item
              label="Last Name"
              className="text-label"
              name="last_name"
              rules={[{ required: true, message: "Please enter Last Name!" }]}
            >
              <Input placeholder="" />
            </Form.Item>
            <Form.Item
              label="Email"
              className="text-label"
              name="email"
              rules={[{ required: false, message: "Please enter Email!" }]}
            >
              <Input placeholder="" />
            </Form.Item>
            <Form.Item
              label="Telephone 1"
              className="text-label"
              name="telephone_1"
              rules={[{ required: false, message: "Please enter Telephone!" }]}
            >
              <Input placeholder="" />
            </Form.Item>
            <Form.Item
              label="Telephone 2"
              className="text-label"
              name="telephone_2"
              rules={[{ required: false, message: "Please enter Telephone!" }]}
            >
              <Input placeholder="" />
            </Form.Item>
            <Form.Item
              label="Telephone 3"
              className="text-label"
              name="telephone_3"
              rules={[{ required: false, message: "Please enter Telephone!" }]}
            >
              <Input placeholder="" />
            </Form.Item>
            <Form.Item
              label="Is Primary"
              className="text-label"
              name="is_primary"
              rules={[{ required: false, message: "!Required" }]}
            >
              <Switch defaultChecked onChange={onChangeSwitch} />
            </Form.Item>
          </>
          <Form.Item>
            <div className="d-flex justify-content-start align-items-center pb-3">
              <RBButton variant="primary" type="submit">
                Add
              </RBButton>
            </div>
          </Form.Item>
        </Form>
      </Modal>
    </Fragment>
  );
};

export default EditContactDetails;
