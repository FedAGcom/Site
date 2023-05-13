import React from "react";
import {connect} from "react-redux";

import './NavigationButton.styles.scss'
import {toggleCartHidden} from "../../redux/dropdown/dropdown.actions";
import {createStructuredSelector} from "reselect";
import {selectDropdownHidden} from "../../redux/dropdown/dropdown.selectors";

const NavigationButtonComponent = ({ hidden, toggleCartHidden }) => {
  return (
	  <div className={hidden ? "is-active hamburger" : "hamburger"} onClick={toggleCartHidden} >
		  <span className="line"></span>
		  <span className="line"></span>
		  <span className="line"></span>
	  </div>
  );
}

const mapStateToProps = createStructuredSelector ({
	hidden: selectDropdownHidden
});
const mapDispatchToProps = dispatch => ({
	toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavigationButtonComponent);