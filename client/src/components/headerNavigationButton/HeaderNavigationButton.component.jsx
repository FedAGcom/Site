import React from "react";
import {connect} from "react-redux";

import {toggleCartHidden} from "../../redux/dropdown/dropdown.actions";
import {createStructuredSelector} from "reselect";
import {selectDropdownHidden} from "../../redux/dropdown/dropdown.selectors";

import './HeaderNavigationButton.styles.scss'

const HeaderNavigationButtonComponent = ({ hidden, toggleCartHidden }) => {
	const handleEvent = () => {
		toggleCartHidden()
	}

	// кнопка Header`а без svg or png
	// необходима оптимизация для стилей.
  return (
	  <div className={hidden ? "hamburger" : "is-active hamburger"} onClick={handleEvent} >
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

export default connect(mapStateToProps, mapDispatchToProps)(HeaderNavigationButtonComponent);