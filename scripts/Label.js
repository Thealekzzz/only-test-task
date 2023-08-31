class Label {
  constructor(coords, color, title) {
    this._coords = coords;
    this._color = color;
    this._title = title;

  }

  _getTemplate() {
    const labelElement = document
      .querySelector('#label-template')
      .content
      .querySelector('.label')
      .cloneNode(true);

    return labelElement;
  }

  generateLabel() {
    this.labelElement = this._getTemplate();
  
    this.labelElement.classList.add(`label_color_${this._color}`);
  
    this.labelElement.style.left = `calc((100vw) / 2 + ${this._coords[0]}px)`;
    this.labelElement.style.top = `calc((100vh) / 2 + ${this._coords[1]}px)`;

    this.labelText = this.labelElement.querySelector('.label__text');
    this.labelText.textContent = this._title;
  
    return this.labelElement;
  }

  minimizeLabel() {
    this.labelElement.style.width = '40px';
    this.labelElement.classList.remove('label_extended');
  }
}

export default Label;
