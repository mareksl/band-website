import { getElementPosition } from './positioning';
import elements from '../dom/elements';

export const clickOutside = (
  element: HTMLElement,
  event: Event,
  callback: () => void
) => {
  if (!element.contains(<HTMLElement>event.target)) {
    callback();
  }
};

let resizeTimeout: number | null;

export const resizeThrottler = (callback: () => void) => {
  if (!resizeTimeout) {
    resizeTimeout = setTimeout(() => {
      resizeTimeout = null;
      callback();
    }, 200);
  }
};

let scrollTimeout: number | null;

export const scrollThrottler = (callback: () => void) => {
  if (!scrollTimeout) {
    scrollTimeout = setTimeout(() => {
      scrollTimeout = null;
      callback();
    }, 200);
  }
};

export const scrollToElement = (element: HTMLElement) => {
  window.scrollTo({
    top:
      getElementPosition(element).top -
      elements.header.getBoundingClientRect().height
  });
};
