import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";

import './Slider.styles.scss';

import leftDoubleQuotes from '../../assets/homepage/slider/ci_double-quotes-l.svg';
import rightDoubleQuotes from '../../assets/homepage/slider/ci_double-quotes-r.svg';

import {
	selectSliderPrevious,
	selectSliderNext,
	selectSliderCurrent,
	selectSliderPagination
} from "../../redux/slider/slider.selectors";

import {
	rightBtnClicked,
	leftBtnClicked
} from "../../redux/slider/slider.actions";

const SliderComponent = () => {
	const current = useSelector(selectSliderCurrent);
	const next = useSelector(selectSliderNext);
	const previous = useSelector(selectSliderPrevious);
	const pagination = useSelector(selectSliderPagination);

	let arrayToShow = [previous, current, next];
	const dispatch = useDispatch();
	const [translateFrom, setTranslateFrom] = useState('right');

	const handleStatus = (key) => {
		let classname;
		if (key === arrayToShow[0].key) {
			classname = "previous-slide slide";
		} else if (key === arrayToShow[2].key) {
			classname =  "next-slide slide";
		} else if (key === arrayToShow[1].key) {
			classname = "active-slide slide"
		}
		return classname;
	}
	const handleLeftBtnClick = () => {
		dispatch(leftBtnClicked(arrayToShow[0], arrayToShow[2]));
		setTranslateFrom('left')
	}
	const handleRightBtnClick = () => {
		dispatch(rightBtnClicked(arrayToShow[0]));
		setTranslateFrom('right')
	}

	let startPos = 0;
	let currentPos = 0;
	const handleEnd = () => {
		let currPos = Math.floor(currentPos)
		let initPos = Math.floor(startPos)
		let distance = currentPos - initPos

		if (currPos !== 0) {
			if((80 <= distance)) {
				handleLeftBtnClick()

			} else if((-80 >= distance) ) {
				handleRightBtnClick()

			}
		}
	}
	return (
		<div className="slider">
			<div
				className={translateFrom + " slider-container"}

	      onTouchStart={event => {
					startPos = event.targetTouches[0].screenX
	      }}
	      onTouchMove={(event) => {
		      currentPos = event.targetTouches[0].screenX
	      }}
        onTouchEnd={() => {
	         handleEnd()
        }}
			>
				{
					arrayToShow.map((slide) => {
						return (
							<div className={handleStatus(slide.key)} key={slide.key}>
								<div className="slide-quote-div">
									<img className="left-double-quotes" src={leftDoubleQuotes} alt="quotes"/>
									<p className="slide-quote-p">{slide.quote}</p>
									<img className="right-double-quotes" src={rightDoubleQuotes} alt="quotes"/>
								</div>
								<div className="slide-customer-review">
									<img className="slide-customer-image" src={slide.imageSource} alt={slide.clientName}/>
									<p className="slide-customer-name">{slide.clientName}</p>
									<p className="slide-customer-company">{slide.caseName}</p>
								</div>
							</div>
						)
					})
				}
				<ul className="pagination">
					{
						pagination.map((bullet) => {
							return (
								<li key={bullet.key} className={(bullet.index === arrayToShow[1].index) ? "pagination-bullet pagination-bullet-active" : "pagination-bullet"}></li>
							);
						})
					}
				</ul>
				<button
					className={"arrow-left-btn"}
					onClick={handleLeftBtnClick}/>

				<button
					className="arrow-right-btn"
					onClick={handleRightBtnClick} />
			</div>

		</div>

	);
};

export default SliderComponent