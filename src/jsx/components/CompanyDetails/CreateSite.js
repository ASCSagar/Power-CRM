import React, { Fragment } from "react";
import { Form, Input, message, Modal, Select } from "antd";
import { Button as RBButton } from "react-bootstrap";

const { Option } = Select;

const CreateSite = ({
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
              label="Post Code"
              className="text-label"
              name="post_code"
              rules={[{ required: false, message: "Please enter Post Code!" }]}
            >
              <Input placeholder="" />
            </Form.Item>
            <Form.Item label="Address" name="address">
              <Select placeholder="Select Address">
                <Option value="demo">xyz</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="Site Name"
              className="text-label"
              name="site_name"
              rules={[{ required: true, message: "Please enter Site Name!" }]}
            >
              <Input placeholder="" />
            </Form.Item>
            <Form.Item
              label="Number Of Employees"
              className="text-label"
              name="employees"
              rules={[
                { required: false, message: "Please enter No. of Employee!" },
              ]}
            >
              <Input placeholder="" />
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

export default CreateSite;
