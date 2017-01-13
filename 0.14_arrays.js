//arrays are data collection
var names = ["paul", "gavin", "verne", "lisa", "kenn"];
var nums = [1, 2, 3, 4, 5, 6, 4501];
var mixed = ["dog", false, 6, "squirrel", 2]
console.log(names[2]);
console.log(nums[6]);
console.log(mixed[3]);
//can we use a for in loop to iterate and consol log each name in names
console.log(names);
for (name in names) {
	console.log(names[name]);
}

//creat array of fav candy bars

var favCandy = [ "snickers", "reese's", "milkyway" ]
console.log(favCandy);
console.log(favCandy[1]);
favCandy.push("Payday");
console.log(favCandy);
favCandy.pop();
console.log(favCandy)
console.log(favCandy.slice(0,3));

//now to remove a specific element of an array
console.log(favCandy.indexOf("SPK"));
favCandy.splice(0);
console.log(favCandy);
favCandy.push("Hursheys");