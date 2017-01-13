//Object Literal With Methods
//Functions inside of an object.

var player = {
		//Properties
		name			: "",
		life			: 0,
		damage			: 0,

		//Methods
		challenge		: function(){
			console.log("Would anyone care to fight????");


	response : function (){
			console.log("yes I would like to fight");
	
		}
	}

	var melkor = Object.create(player);
	melkor.name = "Melkor";

	var miley = Object.create(player);
	miley.name = "miley";

	console.log(melkor.name);
	console.log(miley.name);
