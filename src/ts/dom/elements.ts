const header: HTMLElement = <HTMLElement>document.querySelector('.site-header');

const nav: HTMLElement = <HTMLElement>document.querySelector(
  '.site-header__nav'
);

const navLinks = Array.from(nav.querySelectorAll('a'));

const toggleMenuButton: HTMLElement = <HTMLElement>document.querySelector(
  '.site-header__toggle-menu'
);

const heroSection: HTMLElement = <HTMLElement>document.querySelector(
  '.hero-section'
);

const gallery: HTMLElement = <HTMLElement>document.querySelector('.gallery');

const pastEventsList: HTMLElement = <HTMLElement>document.querySelector(
  '#pastEventsList'
);

const eventListPagination: HTMLElement = <HTMLElement>document.querySelector(
  '.event-list__pagination'
);

const showMore: HTMLElement = <HTMLElement>document.querySelector(
  '#eventsShowMore'
);
const showLess: HTMLElement = <HTMLElement>document.querySelector(
  '#eventsShowLess'
);

export default {
  header,
  nav,
  toggleMenuButton,
  navLinks,
  heroSection,
  gallery,
  pastEventsList,
  eventListPagination,
  showMore,
  showLess
};
