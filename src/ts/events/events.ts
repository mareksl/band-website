import elements from '../dom/elements';
import { getElementPosition } from '../util/positioning';
import { scrollToElement } from '../util/dom';

class EventsController {
  initialCount = 5;
  showMoreCount = 5;
  events: HTMLElement[];
  hiddenEvents: HTMLElement[] = [];

  constructor() {
    this.events = this.getEventElements();
  }

  private getEventElements(): HTMLElement[] {
    return Array.from(
      elements.pastEventsList.querySelectorAll('.event-list__item')
    );
  }

  private removeShowMoreButton() {
    elements.eventListPagination.removeChild(elements.showMore);
  }
  private addShowMoreButton() {
    elements.eventListPagination.appendChild(elements.showMore);
  }
  private removeShowLessButton() {
    elements.eventListPagination.removeChild(elements.showLess);
  }
  private addShowLessButton() {
    elements.eventListPagination.insertBefore(
      elements.showLess,
      elements.showMore
    );
  }

  init() {
    this.events.forEach((event, i) => {
      if (i >= this.initialCount) {
        const parent: HTMLElement = <HTMLElement>event.parentElement;
        parent.removeChild(event);
        this.hiddenEvents.push(event);
      }
    });
    this.removeShowLessButton();
  }

  showMore = () => {
    if (this.hiddenEvents.length > 0) {
      const events = <HTMLElement[]>this.hiddenEvents.splice(
        0,
        this.showMoreCount
      );

      events.forEach(event => {
        elements.pastEventsList.appendChild(event);
      });

      scrollToElement(events[0]);
    }

    this.addShowLessButton();
    if (this.hiddenEvents.length === 0) {
      this.removeShowMoreButton();
    }
  };

  showLess = () => {
    const events = this.getEventElements();
    events.forEach((event, i) => {
      if (i >= this.initialCount) {
        const parent: HTMLElement = <HTMLElement>event.parentElement;
        parent.removeChild(event);
        this.hiddenEvents.push(event);
      }
    });
    this.addShowMoreButton();
    this.removeShowLessButton();
    scrollToElement(elements.pastEventsList);
  };
}

export default new EventsController();
