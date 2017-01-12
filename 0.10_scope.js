//Scopes

var name = "kenn"///Global executable content

function greetings(){        //////
	name = "ralph"
	random = "bread"         ///<<<Scope
	return  name;     ///
}
console.log(greetings())
console.log(name)
console.log(random)
 