import { clickOutside } from '../util/dom';

export class ModalController {
  window: HTMLElement;
  header: HTMLElement;
  content: HTMLElement;
  closeButton: HTMLElement;
  image: HTMLImageElement;

  constructor() {
    this.window = document.createElement('div');
    this.window.classList.add('modal__window');
    this.header = document.createElement('div');
    this.header.classList.add('modal__header');
    this.content = document.createElement('div');
    this.content.classList.add('modal__content');
    this.image = document.createElement('img');
    this.image.classList.add('modal__image');
    this.content.appendChild(this.image);
    this.closeButton = document.createElement('button');
    this.closeButton.classList.add('button')
    this.closeButton.classList.add('modal__button')
    this.closeButton.innerText = 'X';
    this.closeButton.addEventListener('click', this.close);
    this.window.appendChild(this.header);
    this.window.appendChild(this.content);
    this.window.appendChild(this.closeButton);
  }

  open(link: string): void {
    this.image.src = link;
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.appendChild(this.window);
    modal.addEventListener(
      'click',
      event => clickOutside(this.window, event, this.close),
      true
    );

    document.body.appendChild(modal);
  }

  close() {
    const modals = Array.from(document.querySelectorAll('.modal'));
    modals.forEach(modal => {
      document.body.removeChild(modal);
    });
  }
}
