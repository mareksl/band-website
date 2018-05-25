import Elements from '../dom/elements';
import { getElementPosition } from '../util/positioning';

export class Pagination {
  page: number;

  constructor() {
    this.page = 1;
  }
  
  increment() {
    this.page++;
    const top =
      getElementPosition(Elements.pastEventsList).top -
      Elements.header.offsetHeight;
    window.scrollTo({
      top
    });

    // const width = document.documentElement.getBoundingClientRect().width;
    Elements.pastEventsList.classList.remove('event-list--off-screen-right');
    Elements.pastEventsList.classList.add('event-list--off-screen-left');
  }

  decrement() {
    this.page--;
    const top =
      getElementPosition(Elements.pastEventsList).top -
      Elements.header.offsetHeight;
    window.scrollTo({
      top
    });

    // const width = document.documentElement.getBoundingClientRect().width;
    Elements.pastEventsList.classList.remove('event-list--off-screen-left');
    Elements.pastEventsList.classList.add('event-list--off-screen-right');
  }
}
