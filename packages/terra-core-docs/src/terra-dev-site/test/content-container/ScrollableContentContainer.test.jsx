import React from 'react';
import ContentContainer from 'terra-content-container';
import classNames from 'classnames/bind';
import styles from './ContentContainerTestCommon.module.scss';

const cx = classNames.bind(styles);

const display1 = (
  <p key="1">
    Entering patient details is a crucial process in healthcare facilities that involves capturing and documenting relevant information about
    individuals seeking medical care. Patient details need to be regularly updated to ensure accuracy and relevancy. This may involve periodic
    verification of personal information, updating medical history, and making necessary changes to insurance or contact details. Hospitals may
    request patients to review and confirm their information during subsequent visits or at designated intervals. Accurate and comprehensive patient
    details play a vital role in providing effective healthcare. They serve as a foundation for medical assessments, treatment planning, and continuity
    of care, enabling healthcare providers to deliver personalized and efficient services to patients.Begin filling out the form by entering your personal
    information. This usually includes your full name, contact details (such as phone number and email address), and residential address. It is crucial to
    provide accurate contact information as it will be used for communication and verification purposes.
  </p>
);

const contentheader = <h3>Registration Form</h3>;
const contentfooter = <p>Please enter the name as per the official document</p>;

const Container = () => (
  <div className={cx('content-container-fill')}>
    <ContentContainer header={contentheader} footer={contentfooter} fill setFocusOnContainer>
      <div key="1">{display1}</div>
    </ContentContainer>
  </div>
);

export default Container;
