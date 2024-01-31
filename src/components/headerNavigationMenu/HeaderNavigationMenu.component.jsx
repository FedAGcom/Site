import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { StyledNavLink, StyledListElements, StyledUnorderedList, StyledNav, StyledNavigationLine, StyledHeaderCallTo } from './HeaderNavigationMenu.styles';

import { toggleCartHidden } from '../../redux/dropdown/dropdown.actions';
import { selectDropdownHidden } from '../../redux/dropdown/dropdown.selectors';

import CallToComponent from '../callTo/CallTo.component';

const HeaderNavigationMenuComponent = () => {
  const dispatch = useDispatch();
  const hidden = useSelector(selectDropdownHidden);
  const xPos = window.innerWidth <= 600;
  let classNameValue = '';

  const handleEvent = () => {
    dispatch(toggleCartHidden());
  };

  // для анимации плавного появления и исчезновения в мобильных устройствах
  if (hidden) {
    classNameValue = 'is-hidden';
  } else if (!hidden) {
    classNameValue = 'is-active';
  }

  const { t } = useTranslation();

  // плавный скролл до элемента /#services-section в homepage
  const scrollToServices = () => {
    setTimeout(() => {
      let section = document.querySelector(`#services-section`);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 1000);
  };

  return (
    <StyledNav className={classNameValue}>
      <StyledHeaderCallTo>
        <CallToComponent phone="+79113515055">+7 (911) 351-50-55</CallToComponent>
      </StyledHeaderCallTo>
      <StyledNavigationLine />
      <StyledUnorderedList>
        <StyledListElements onClick={handleEvent}>
          <StyledNavLink
            onClick={scrollToServices}
            to="/"
            className={xPos ? 'disabled' : ''}>
            {t('main.header.services')}
          </StyledNavLink>
        </StyledListElements>
        <StyledListElements onClick={handleEvent}>
          <StyledNavLink
            to="/cases"
            className={xPos ? 'disabled' : ''}>
            {t('main.header.cases')}
          </StyledNavLink>
        </StyledListElements>
        <StyledListElements onClick={handleEvent}>
          <StyledNavLink
            to="/contact-us"
            className={xPos ? 'disabled' : ''}>
            {t('main.header.becomeCustomer')}
          </StyledNavLink>
        </StyledListElements>
      </StyledUnorderedList>
    </StyledNav>
  );
};

export default HeaderNavigationMenuComponent;
