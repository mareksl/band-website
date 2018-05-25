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

const imageLinks = Array.from(gallery.querySelectorAll('a'));

const eventsOlderButton: HTMLElement = <HTMLElement>document.querySelector(
  '#eventsOlder'
);
const eventsNewerButton: HTMLElement = <HTMLElement>document.querySelector(
  '#eventsNewer'
);
const pastEventsList: HTMLElement = <HTMLElement>document.querySelector(
  '#pastEventsList'
);

export default {
  header,
  nav,
  toggleMenuButton,
  navLinks,
  heroSection,
  gallery,
  imageLinks,
  eventsNewerButton,
  eventsOlderButton,
  pastEventsList
};
