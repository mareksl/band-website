import Masonry from 'masonry-layout';

import Elements from './dom/elements';
import { resizeThrottler, scrollThrottler } from './util/dom';
import {
  hideNav,
  showNav,
  toggleNarrowHeader,
  handleResizeEvent,
  toggleNav
} from './dom/dom';

import { ModalController } from './gallery/modal';
const modalController = new ModalController();

window.addEventListener('load', () => {
  toggleNarrowHeader();

  window.addEventListener('resize', () => {
    resizeThrottler(handleResizeEvent);
  });

  window.addEventListener(
    'scroll',
    () => {
      scrollThrottler(toggleNarrowHeader);
    },
    { passive: true }
  );

  Elements.toggleMenuButton.addEventListener('click', e => {
    toggleNav();
  });

  Elements.nav.addEventListener('click', e => {
    if ((<HTMLAnchorElement>e.target).nodeName === 'A') {
      hideNav();
    }
  });

  Elements.gallery.addEventListener('click', e => {
    e.preventDefault();
    const target = <HTMLAnchorElement>e.target;
    if (target.nodeName === 'A') {
      modalController.open(target.href, target.title, target);
    }
  });

  const masonry = new Masonry(Elements.gallery, {
    itemSelector: '.gallery__wrapper',
    columnWidth: '.gallery__wrapper',
    percentPosition: true
  });
});
