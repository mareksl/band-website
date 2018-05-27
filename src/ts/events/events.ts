import Elements from '../dom/elements';
import { getElementPosition } from '../util/positioning';
import { HttpController } from '../http/http.controller';

export class Pagination {
  page: number;
  http = new HttpController();

  constructor() {
    this.page = 0;
  }

  increment() {
    this.page++;
    this.constructPage();
    const top =
      getElementPosition(Elements.pastEventsList).top -
      Elements.header.offsetHeight;
    window.scrollTo({
      top
    });

    Elements.pastEventsList.classList.remove('event-list--off-screen-right');
    Elements.pastEventsList.classList.add('event-list--off-screen-left');
  }

  decrement() {
    this.page--;
    this.constructPage();
    const top =
      getElementPosition(Elements.pastEventsList).top -
      Elements.header.offsetHeight;
    window.scrollTo({
      top
    });

    Elements.pastEventsList.classList.remove('event-list--off-screen-left');
    Elements.pastEventsList.classList.add('event-list--off-screen-right');
  }

  constructPage() {
    return new Promise((resolve, reject) => {
      this.http.getEventsDummy().then(result => {
        result.events.forEach(event => {
          console.log(event);
        });
      });
    });
  }
}
