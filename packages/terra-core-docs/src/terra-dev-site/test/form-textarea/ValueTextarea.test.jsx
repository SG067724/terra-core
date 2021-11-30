import React from 'react';
import classNames from 'classnames/bind';
import Textarea from 'terra-form-textarea';
import styles from './common/Textarea.test.module.scss';

const cx = classNames.bind(styles);

const textarea = () => (
  <div className={cx('content-wrapper')}>
    <Textarea value="value" ariaLabel="label" />
  </div>
);

export default textarea;