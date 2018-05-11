import { clickOutside, resizeThrottler, scrollThrottler } from './../util/dom';
import { getScrollPosition, getViewport } from './../util/positioning';
import Config from './../config/config';

import Elements from './elements';

const navHiddenClass = 'site-header__nav--hidden';
const toggleMenuHiddenClass = 'site-header__toggle-menu--hidden';

const hideNavOnClickOutside = (e: Event) => {
  return clickOutside(Elements.header, e, hideNav);
};

export const showNav = () => {
  window.addEventListener('click', hideNavOnClickOutside, true);
  Elements.nav.classList.remove(navHiddenClass);
};

export const hideNav = () => {
  const width = getViewport().width;

  if (width < Config.BREAKPOINT) {
    window.removeEventListener('click', hideNavOnClickOutside, true);
    Elements.nav.classList.add(navHiddenClass);
  }
};
