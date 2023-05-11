import React from "react";
import './withWrapper.style.scss';

const withWrapper = (WrappedComponent) => {
  class WithWrapper extends React.Component {
    render() {
      return (
        <WrappedComponent className='wrapped-component' {...this.props}/>
      )
    }
  }
  return WithWrapper;
}

export default withWrapper;