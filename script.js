//complete this code
class Rectangle {
	constructor(width,height){
		this.width = _width;
		this.height = _height;
	}
	get width(){
	return this._width;
	}
	get height(){
	return this._height;
	}

	getArea(){
		returh this._width * this._height;
	}
}

class Square extends Rectangle {
	constructor(side){
		super(side , side);
	}
	getPerimeter(){
		return this._side * 4;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
