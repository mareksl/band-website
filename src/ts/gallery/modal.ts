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
    this.closeButton.classList.add('button');
    this.closeButton.classList.add('modal__button');
    this.closeButton.innerText = 'Close';
    this.window.appendChild(this.header);
    this.window.appendChild(this.content);
    this.window.appendChild(this.closeButton);
  }

  open(link: string, title: string, focusElement: HTMLElement): void {
    this.closeWindow(focusElement);
    this.image.src = link;
    this.header.innerText = title;
    this.closeButton.addEventListener('click', () => this.close(focusElement));

    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.appendChild(this.window);
    modal.addEventListener(
      'click',
      event => clickOutside(this.window, event, () => this.close(focusElement)),
      true
    );
    modal.addEventListener('keyup', e => {
      if (e.keyCode === 27) {
        console.log('close');
        this.close(focusElement);
      }
    });
    modal.tabIndex = -1;

    document.body.appendChild(modal);
    modal.focus();
    modal.classList.add('modal--visible');
    this.window.classList.add('modal__window--visible');
  }

  closeWindow(focusElement: HTMLElement) {
    const modals = Array.from(document.querySelectorAll('.modal'));
    modals.forEach(modal => {
      document.body.removeChild(modal);
    });
    focusElement.focus();
  }

  close(focusElement: HTMLElement) {
    const modal: HTMLElement = <HTMLElement>document.querySelector('.modal');
    modal.classList.remove('modal--visible');
    const handleClose = () => {
      this.closeWindow(focusElement);
    };
    this.window.classList.remove('modal__window--visible');
    this.window.addEventListener('transitionend', handleClose, { once: true });
    // this.window.removeEventListener('transitionend', handleClose);
  }
}
