import React, { Fragment } from "react";
import { Form, Input, message, Modal } from "antd";
import { Button as RBButton } from "react-bootstrap";

const AddNewNote = ({
  isModalVisible,
  setModalState,
  callBack,
  modalTitle,
}) => {
  const [form] = Form.useForm();
  const { TextArea } = Input;

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
        title={modalTitle || "Create Group"}
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
              label="Enter New Notes"
              name="notes"
              rules={[{ required: true, message: "Please enter Notes!" }]}
            >
              <TextArea rows={4} />
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

export default AddNewNote;
