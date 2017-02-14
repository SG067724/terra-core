/* eslint-disable import/no-extraneous-dependencies */
import React, { PropTypes } from 'react';
import { parse } from 'react-docgen';
import Markdown from './Markdown';

const propTypes = {
  src: PropTypes.string.isRequired,
};

/**
 * Renders a table view for the props metadata of a react component generated by react-docgen
 */
const PropsTable = ({ src, ...customProps }) => {
  /**
   * Runs component source code through react-docgen
   * @type {Object}
   */
  const componentMetaData = parse(src);

  /**
   * Alias for props object from componentMetaData
   * @type {Object}
   */
  const componentProps = componentMetaData.props;

  return (
    <div dir="ltr" className="markdown-body">
      <h2 id="props">Props</h2>
      <table {...customProps}>
        <thead>
          <tr>
            <th>Prop Name</th>
            <th>Type</th>
            <th>Is Required</th>
            <th>Default Value</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(componentProps).map((key) => {
            const prop = componentProps[key];
            let type = prop.type.name;

            // Pull the first value off and use that as type.
            // This assumes all enumerable values are the same type.
            if (type === 'enum') {
              type = typeof prop.type.value[0].value;
            }

            return (
              <tr key={key}>
                <td style={{ color: 'rgb(17, 147, 154)' }}>{key}</td>
                <td>{(prop.type ? type : '')}</td>
                {(prop.required ?
                  <td style={{ color: 'rgb(255, 76, 34)' }}>required</td>
              : <td style={{ color: '#c6c6c6' }}>optional</td>)}
                {(prop.defaultValue ?
                  <td style={{ color: 'rgb(236, 171, 32)' }}>{prop.defaultValue.value}</td>
              : <td style={{ color: '#c6c6c6' }}>none</td>)}
                <td><Markdown src={prop.description} /></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

PropsTable.propTypes = propTypes;

export default PropsTable;
