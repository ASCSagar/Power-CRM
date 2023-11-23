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
  Upload,
} from "antd";
import { Link } from "react-router-dom";
import { Button as RBButton } from "react-bootstrap";
import { UploadOutlined } from "@ant-design/icons";

const { Option } = Select;

const REMINDER_TYPES = [
  {
    label: "Miscellaneous",
    value: "miscellaneous",
  },
  {
    label: "DocuSign",
    value: "docu_sign",
  },
  {
    label: "Image",
    value: "image",
  },
  {
    label: "Email",
    value: "email",
  },
  {
    label: "LOA",
    value: "loa",
  },
  {
    label: "Random Document",
    value: "random_document",
  },
  {
    label: "Signed DocuSign Contract",
    value: "signed_docu_sign_contract",
  },
  {
    label: "Signed PDF Contract",
    value: "signed_pdf_contract",
  },
  {
    label: "Signed Verbal Agreement",
    value: "signed_verbal_agreement",
  },
  {
    label: "Other",
    value: "other",
  },
];

const CreateEditDocument = (props) => {
  const { isModalVisible, setModalState, successCallBack, modalTitle, mode } =
    props;
  // const [isModalOpen, setIsModalOpen] = useState(false);

  const [form] = Form.useForm();
  const documentTypeValue = Form.useWatch("document_type", form);

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

  const normFile = (e) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  return (
    <Fragment>
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
          name="create_edit_document"
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
            <Form.Item
              name="upload"
              label="Upload Document"
              valuePropName="fileList"
              getValueFromEvent={normFile}
              rules={[
                {
                  required: true,
                  message: "Please upload a document!",
                },
              ]}
            >
              <Upload name="logo" listType="picture">
                <Button icon={<UploadOutlined />}>Click to upload</Button>
              </Upload>
            </Form.Item>
            <Form.Item
              label="Document Type"
              name="document_type"
              rules={[
                {
                  required: true,
                  message: "Please select document type!",
                },
              ]}
            >
              <Select placeholder="Select a document type">
                {REMINDER_TYPES.map((document, index) => (
                  <Option key={index} value={document.value}>
                    {document.label}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item label="From/To">
              <Input placeholder="From/To" />
            </Form.Item>
          </div>
        </Form>
      </Modal>
    </Fragment>
  );
};

export default CreateEditDocument;
