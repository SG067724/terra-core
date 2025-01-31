import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Scroll from 'terra-scroll';
import styles from './ContentContainer.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The header element to be placed within the header area of the container.
   */
  header: PropTypes.node,
  /**
   * The footer element to be placed within the footer area of the container.
   */
  footer: PropTypes.node,
  /**
   * The children to be placed within the main content area of the container.
   */
  children: PropTypes.node,
  /**
   * Whether or not the container should expanded to fill its parent element.
   */
  fill: PropTypes.bool,
  /**
   * Ref callback for the scrollable area of the content container.
   */
  scrollRefCallback: PropTypes.func,
  /**
   * ![IMPORTANT](https://badgen.net/badge/UX/Accessibility/blue)
   * Sets focus on content when set to `true`. Focus on content helps in scrolling  within container when there is no interactive element to focus within container.
   */
  setFocusOnContainer: PropTypes.bool,
};

const defaultProps = {
  header: undefined,
  footer: undefined,
  children: undefined,
  fill: false,
  scrollRefCallback: undefined,
  setFocusOnContainer: false,
};

const ContentContainer = ({
  header,
  footer,
  children,
  fill,
  scrollRefCallback,
  setFocusOnContainer,
  ...customProps
}) => {
  const contentLayoutClassNames = cx([
    `content-container-${fill ? 'fill' : 'static'}`,
    customProps.className,
  ]);

  return (
    <div {...customProps} className={contentLayoutClassNames}>
      {header && <div className={cx('header', { focusoncontainer: setFocusOnContainer })}>{header}</div>}
      {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
      <div className={cx('main')} role="region">
        <Scroll className={cx('normalizer', { focusoncontainer: setFocusOnContainer })} refCallback={scrollRefCallback} tabIndex={setFocusOnContainer ? '0' : '-1'}>
          {children}
        </Scroll>
      </div>
      {footer && <div className={cx('footer', { focusoncontainer: setFocusOnContainer })}>{footer}</div>}
    </div>
  );
};

ContentContainer.propTypes = propTypes;
ContentContainer.defaultProps = defaultProps;

export default ContentContainer;
