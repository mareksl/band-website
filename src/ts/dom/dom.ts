import { clickOutside } from './../util/dom';
import { getViewport, getScrollPosition } from './../util/positioning';
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

export const toggleNav = () => {
  if (Elements.nav.classList.contains(navHiddenClass)) {
    showNav();
  } else {
    hideNav();
  }
};

const borderPos =
  Elements.heroSection.offsetTop + Elements.heroSection.offsetHeight;

const past = {
  down: getScrollPosition().top > borderPos,
  up: getScrollPosition().top < borderPos
};

export const toggleNarrowHeader = () => {
  const top = getScrollPosition().top;
  if (!past.down && top > borderPos) {
    past.down = true;
    past.up = false;
    Elements.header.classList.add('site-header--narrow');
  } else if (!past.up && top < borderPos) {
    past.up = true;
    past.down = false;
    Elements.header.classList.remove('site-header--narrow');
  }
};

if (getViewport().width < Config.BREAKPOINT) {
  Elements.nav.classList.add(navHiddenClass);
  Elements.toggleMenuButton.classList.remove(toggleMenuHiddenClass);
}

let lastWidth = getViewport().width;

export const handleResizeEvent = () => {
  const width = getViewport().width;

  if (width < Config.BREAKPOINT && lastWidth >= Config.BREAKPOINT) {
    Elements.nav.classList.add(navHiddenClass);
    Elements.toggleMenuButton.classList.remove(toggleMenuHiddenClass);
  } else if (width >= Config.BREAKPOINT && lastWidth < width) {
    Elements.nav.classList.remove(navHiddenClass);
    Elements.toggleMenuButton.classList.add(toggleMenuHiddenClass);
  }
  lastWidth = width;
};
