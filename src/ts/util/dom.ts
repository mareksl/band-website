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
    resizeTimeout = window.setTimeout(function() {
      resizeTimeout = null;
      callback();
    }, 200);
  }
};

let scrollTimeout: number | null;

export const scrollThrottler = (callback: () => void) => {
  if (!scrollTimeout) {
    scrollTimeout = setTimeout(function() {
      scrollTimeout = null;
      callback();
    }, 200);
  }
};

