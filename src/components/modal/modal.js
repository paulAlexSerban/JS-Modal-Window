
class Modal {
  constructor() {
    this.init();
  }

  setupDOMRefrences() {
    this.modal = this.findElement('.modal');
    this.overlay = this.findElement('.overlay');
    this.btnCloseModal = this.findElement('.close-modal');
    this.btnsShowModal = this.findAllElements('.show-modal');
  }

  findElement(element) {
    return document.querySelector(element);
  }

  findAllElements(elements) {
    return document.querySelectorAll(elements);
  }

  setupEvents() {
    this.btnsShowModal.forEach(btn => btn.addEventListener('click', () => this.toggleModal()));
    this.btnCloseModal.addEventListener('click', () => this.toggleModal());
    this.overlay.addEventListener('click', () => this.toggleModal());
    document.addEventListener('keydown', e => e.key === 'Escape' ? this.toggleModal() : null)
  }

  toggleModal() {
    if(this.modal.classList.contains('hidden')) {
      this.modal.classList.remove('hidden');
      this.overlay.classList.remove('hidden');
    } else {
      this.modal.classList.add('hidden');
      this.overlay.classList.add('hidden');
    }
  }

  init() {
    this.setupDOMRefrences();
    this.setupEvents();
  }
}

export default Modal;