import React, { Fragment, useState } from "react";
import CreateCompanyStep1 from "./CreateCompanyStep1";
import CreateCompanyStep2 from "./CreateCompanyStep2";
import CreateCompanyStep3 from "./CreateCompanyStep3";

const CreateCompany = () => {
  const [stepTwoForm, setStepTwoForm] = useState(false);
  const [stepThreeForm, setStepThreeForm] = useState(false);

  const goToStep2 = () => {
    console.log("Step2");
    setStepTwoForm(true);
  };

  const goToStep3 = () => {
    setStepTwoForm(false);
    setStepThreeForm(true);
  };

  const submitValues = () => {
    console.log("call");
  };

  return (
    <div>
      {!stepTwoForm && !stepThreeForm && (
        <Fragment>
          <CreateCompanyStep1 OnSubmitStep1={goToStep2} />
        </Fragment>
      )}
      {stepTwoForm && (
        <Fragment>
          <CreateCompanyStep2 OnSubmitStep2={goToStep3} />
        </Fragment>
      )}
      {stepThreeForm && (
        <Fragment>
          <CreateCompanyStep3 OnFinalSubmit={submitValues} />
        </Fragment>
      )}
    </div>
  );
};

export default CreateCompany;
