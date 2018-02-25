function Person(fullName, favecolor){
	this.name = fullName;
	this.favColor = favecolor;
	this.greet = function(){
		console.log("Hello, my name is " + this.name + " and my fave colour is " + this.favColor + "." );
	}
}
