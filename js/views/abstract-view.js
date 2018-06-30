class AbstractView {
  get template() {
    return this._template;
  }

  render() {
    const element = document.createElement(`div`);
    element.innerHTML = this.template();
    this._element = element;

    return element;
  }

  bind() {}

  get element() {
    if (!this._element) {
      this.render();
      this.bind();
    }

    return this._element;
  }
}

export default AbstractView;
