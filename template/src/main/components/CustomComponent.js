import * as React from 'react';
import PropTypes from 'prop-types';

export class CustomComponent extends React.Component {

  static propTypes = {
    customProperty: PropTypes.string,
    onCustomEvent: PropTypes.func
  }

  render() {
    const { customProperty, onCustomEvent } = this.props;
    return (
      <div className="CustomComponent">
        <p>Hello <strong>{customProperty}</strong> from your friendly React component.</p>
        <button type="submit" className="btn btn-secondary" onClick={onCustomEvent}>Say hello</button>
      </div>
    )
  }
}