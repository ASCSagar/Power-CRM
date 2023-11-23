import React, { Fragment, useState } from "react";
import { Form, message } from "antd";
import { Button as RBButton } from "react-bootstrap";
import FindSiteLocation from "../FindSiteLocation";
import SiteDetailsForm from "./SiteDetailsForms/siteDetailsForm";
import SiteAddressForm from "./SiteDetailsForms/siteAddressForm";
import SiteBillingAddressForm from "./SiteDetailsForms/siteBillingAddressForm";
import SiteBasicDetailsForm from "./SiteDetailsForms/siteBasicDetailsForm";
import SiteLetterAuthorityForm from "./SiteDetailsForms/siteLetterAuthorityForm";
import { Link } from "react-router-dom";
import CustomBreadcrumbTitle from "../../layouts/CustomBreadcrumbTitle";

const SiteDetails = () => {
  const [addressDuplicatedValue, setAddressDuplicatedValue] = useState("");

  const [findSiteModalVisible, setFindSiteModalVisible] = useState(false);

  const [form] = Form.useForm();

  const onFinish = () => {
    message.success("Submit success!");
  };

  const onFinishFailed = () => {
    message.error("Submit failed!");
  };

  const onReset = () => {
    form.resetFields();
  };

  const onChangeAddressRadio = ({ target: { value } }) => {
    console.log("radio1 checked", value);
    setAddressDuplicatedValue(value);
    if (value === "same_as_site") {
      form.setFieldValue(
        "bill_address_line1",
        form.getFieldValue("address_line1")
      );
      form.setFieldValue(
        "bill_address_line2",
        form.getFieldValue("address_line2")
      );
      form.setFieldValue(
        "bill_address_line3",
        form.getFieldValue("address_line3")
      );
      form.setFieldValue(
        "bill_address_line4",
        form.getFieldValue("address_line4")
      );
      form.setFieldValue("bill_post_code", form.getFieldValue("post_code"));
    }
  };

  const handleSiteAddress = (addressData) => {
    if (addressData) {
      const {
        address_1 = "",
        address_2 = "",
        address_3 = "",
        address_4 = "",
        postcode,
      } = addressData;
      form.setFieldValue("address_line1", address_1);
      form.setFieldValue("address_line2", address_2);
      form.setFieldValue("address_line3", address_3);
      form.setFieldValue("address_line4", address_4);
      form.setFieldValue("post_code", postcode);
    }
  };

  const breadCrumbs = [
    { label: "Home", link: "/dashboard" },
    { label: "Site List", link: "/site" },
    { label: "Site Detail" },
  ];

  return (
    <Fragment>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <CustomBreadcrumbTitle breadCrumbs={breadCrumbs} />
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4 className="mb-0">{"Site Details"}</h4>
          <div>
            {/* <RBButton className="mr-3 btn-sm" variant="primary">
              Update
            </RBButton> */}
            <Link to="/generate-quote">
              <RBButton className="mr-3 btn-sm" variant="info">
                <i className="fa fa-money mr-2"></i>
                Generate Quote
              </RBButton>
            </Link>
            <RBButton className="mr-3 btn-sm" variant="secondary">
              <i className="fa fa-clone mr-2"></i>
              Duplicate
            </RBButton>
            <RBButton className="btn-sm" variant="danger">
              <i className="fa fa-trash mr-2"></i>
              Delete
            </RBButton>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-4">
                <SiteDetailsForm />
              </div>
              <div className="col-4">
                <SiteAddressForm
                  setFindSiteModalVisible={setFindSiteModalVisible}
                />
              </div>
              <div className="col-4">
                <SiteBillingAddressForm
                  onChangeAddressRadio={onChangeAddressRadio}
                  addressDuplicatedValue={addressDuplicatedValue}
                />
              </div>
              <div className="col-6">
                <SiteBasicDetailsForm />
              </div>
              <div className="col-6">
                <SiteLetterAuthorityForm />
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-start align-items-center pb-3">
          <RBButton className="btn-sm" variant="primary">
            Update
          </RBButton>
        </div>
      </Form>
      <FindSiteLocation
        isModalVisible={findSiteModalVisible}
        setModalState={setFindSiteModalVisible}
        callBack={handleSiteAddress}
        modalTitle={"Search Site By Postcode"}
      />
    </Fragment>
  );
};

export default SiteDetails;
