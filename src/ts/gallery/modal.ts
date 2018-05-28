import { clickOutside } from '../util/dom';

export class ModalController {
  modal: HTMLElement;
  window: HTMLElement;
  header: HTMLElement;
  content: HTMLElement;
  closeButton: HTMLElement;
  image: HTMLImageElement;

  constructor() {
    this.modal = document.createElement('div');
    this.modal.classList.add('modal');
    this.modal.tabIndex = -1;

    this.window = document.createElement('div');
    this.window.classList.add('modal__window');

    this.header = document.createElement('div');
    this.header.classList.add('modal__header');

    this.content = document.createElement('div');
    this.content.classList.add('modal__content');

    this.image = document.createElement('img');
    this.image.classList.add('modal__image');

    this.closeButton = document.createElement('button');
    this.closeButton.classList.add('button');
    this.closeButton.classList.add('modal__button');
    this.closeButton.innerText = 'Close';

    this.content.appendChild(this.image);

    this.window.appendChild(this.header);
    this.window.appendChild(this.content);
    this.window.appendChild(this.closeButton);
  }

  open(link: string, title: string, focusElement: HTMLElement): void {
    this.closeWindow(focusElement);
    this.image.src = link;
    this.header.innerText = title;
    this.closeButton.addEventListener('click', () => this.close(focusElement));

    this.modal.appendChild(this.window);
    this.modal.addEventListener(
      'click',
      event => clickOutside(this.window, event, () => this.close(focusElement)),
      true
    );
    this.modal.addEventListener('keyup', event => {
      if (event.keyCode === 27) {
        console.log('close');
        this.close(focusElement);
      }
    });

    document.body.appendChild(this.modal);
    this.modal.focus();
    this.modal.classList.add('modal--visible');
    this.window.classList.add('modal__window--visible');
  }

  close(focusElement: HTMLElement) {
    const modal: HTMLElement = <HTMLElement>document.querySelector('.modal');
    modal.classList.remove('modal--visible');
    const handleClose = () => {
      this.closeWindow(focusElement);
    };
    this.window.classList.remove('modal__window--visible');
    this.window.addEventListener('transitionend', handleClose, { once: true });
  }

  private closeWindow(focusElement: HTMLElement) {
    const modals = Array.from(document.querySelectorAll('.modal'));
    modals.forEach(modal => {
      document.body.removeChild(modal);
    });
    focusElement.focus();
  }
}
