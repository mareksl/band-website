export const getViewport: () => { width: number; height: number } = () => {
  const e: Window = window;

  if ('innerWidth' in window) {
    return { width: e['innerWidth'], height: e['innerHeight'] };
  } else {
    const body = document.documentElement || document.body;
    return { width: body['clientWidth'], height: body['clientHeight'] };
  }
};

export const getScrollPosition: () => {
  left: number;
  top: number;
} = () => {
  if (window.pageYOffset !== undefined) {
    return { left: pageXOffset, top: pageYOffset };
  } else {
    const sx =
      document.documentElement.scrollLeft || document.body.scrollLeft || 0;
    const sy =
      document.documentElement.scrollTop || document.body.scrollTop || 0;
    return { left: sx, top: sy };
  }
};

export const getElementPosition: (
  element: HTMLElement
) => {
  left: number;
  top: number;
} = (element: HTMLElement) => {
  const bodyRect =
    document.documentElement.getBoundingClientRect() ||
    document.body.getBoundingClientRect();
  const elementRect = element.getBoundingClientRect();
  return {
    left: elementRect.left - bodyRect.left,
    top: elementRect.top - bodyRect.top
  };
};
