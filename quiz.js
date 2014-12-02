// hockey = function(n,g,a,p,s){
//   var newPlayer= {
//     name: n,
//     goals: g,
//     assits: a,
//     points: p,
//     shots: s
//   }
//   return newPlayer
// }
// var rickNash = hockey('Rick Nash', 14, 7, 21, 73)
// console.log(rickNash)


//other method

var hockeyPlayer = function(goals, assists, points, shots) {
  this.goals = goals;
  this.assists = assists;
  this.points = points;
  this.shots = shots;
}
var rickNash = new hockeyPlayer(14, 7, 21, 73);
console.log(rickNash);
