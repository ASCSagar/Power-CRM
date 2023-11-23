import React, { Fragment } from "react";
import { Form, Input, message, Modal } from "antd";
import { Button as RBButton } from "react-bootstrap";

const EditBankDetails = ({
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
              label="Account No."
              className="text-label"
              name="account_number"
              rules={[{ required: true, message: "Please enter Account no.!" }]}
            >
              <Input placeholder="" />
            </Form.Item>
            <Form.Item
              label="Bank Name"
              className="text-label"
              name="bank_name"
              rules={[{ required: true, message: "Please enter Bank Name!" }]}
            >
              <Input placeholder="" />
            </Form.Item>
            <Form.Item
              label="Sort Code"
              className="text-label"
              name="sort_code"
              rules={[{ required: true, message: "Please enter Sort Code!" }]}
            >
              <Input placeholder="" />
            </Form.Item>
            <Form.Item
              label="Account Name"
              className="text-label"
              name="account_name"
              rules={[
                { required: true, message: "Please enter Account Name!" },
              ]}
            >
              <Input placeholder="" />
            </Form.Item>
          </>
          <Form.Item>
            <div className="d-flex justify-content-start align-items-center pb-3">
              <RBButton variant="primary" type="submit">
                Save
              </RBButton>
            </div>
          </Form.Item>
        </Form>
      </Modal>
    </Fragment>
  );
};

export default EditBankDetails;
