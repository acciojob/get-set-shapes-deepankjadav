class Rectangle {
  constructor(width, height) {
    this._width = width; // Corrected property names
    this._height = height; // Corrected property names
  }

  // Getter for width
  get width() {
    return this._width;
  }

  // Getter for height
  get height() {
    return this._height;
  }

  // Method to calculate area
  getArea() {
    return this._width * this._height; // Fixed typo "returh" to "return"
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side); // Call Rectangle constructor with side as both width and height
  }

  // Method to calculate the perimeter of the square
  getPerimeter() {
    return this.width * 4; // Use this.width since it's inherited
  }
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
