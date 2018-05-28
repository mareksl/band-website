import Masonry from 'masonry-layout';

import { getScrollPosition, getViewport } from './util/positioning';
import { clickOutside, resizeThrottler, scrollThrottler } from './util/dom';
import { hideNav, showNav } from './dom/dom';
import Config from './config/config';
import Elements from './dom/elements';

import { ModalController } from './gallery/modal';

const navHiddenClass = 'site-header__nav--hidden';
const toggleMenuButtonHiddenClass = 'site-header__toggle-menu--hidden';

if (getViewport().width < Config.BREAKPOINT) {
  Elements.nav.classList.add(navHiddenClass);
  Elements.toggleMenuButton.classList.remove(toggleMenuButtonHiddenClass);
}

let lastWidth = getViewport().width;

const handleResizeEvent = () => {
  const width = getViewport().width;

  if (width < Config.BREAKPOINT && lastWidth >= Config.BREAKPOINT) {
    Elements.nav.classList.add(navHiddenClass);
    Elements.toggleMenuButton.classList.remove(toggleMenuButtonHiddenClass);
  } else if (width >= Config.BREAKPOINT && lastWidth < width) {
    Elements.nav.classList.remove(navHiddenClass);
    Elements.toggleMenuButton.classList.add(toggleMenuButtonHiddenClass);
  }
  lastWidth = width;
};

window.addEventListener('resize', () => {
  resizeThrottler(handleResizeEvent);
});

Elements.toggleMenuButton.addEventListener('click', e => {
  if (Elements.nav.classList.contains(navHiddenClass)) {
    showNav();
  } else {
    hideNav();
  }
});

Elements.navLinks.forEach((link: HTMLAnchorElement) => {
  link.addEventListener('click', e => {
    hideNav();
  });
});

const borderPos =
  Elements.heroSection.offsetTop + Elements.heroSection.offsetHeight;

const past = {
  down: getScrollPosition().top > borderPos,
  up: getScrollPosition().top < borderPos
};

const toggleNarrowHeader = () => {
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

window.addEventListener(
  'scroll',
  () => {
    scrollThrottler(toggleNarrowHeader);
  },
  { passive: true }
);

window.addEventListener('load', () => {
  toggleNarrowHeader();
  const masonry = new Masonry(Elements.gallery, {
    itemSelector: '.gallery__wrapper',
    columnWidth: '.gallery__wrapper',
    percentPosition: true
  });
});
const modalController = new ModalController();
Elements.imageLinks.forEach(el => {
  el.addEventListener('click', event => {
    event.preventDefault();
    modalController.open(el.href, el.title, el);
  });
});
