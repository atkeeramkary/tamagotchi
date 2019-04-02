const button = {

}


const game = {
	time: 0,
	interval: null,

	feedMe: function() {
		//this code will register clicks to the FeedMe button which will then feed the creature
	// evidenced by the feed counter going up by 2 pts out of 10
	},

	cleanMe: function() {
		// this code will register clicks to the CleanMe button which will then clean the creature
	// evidenced by the clean counter going up by 2 pts out of 10

	},

	playWithMe: function() {
		// this code will register clicks to the PlayWithMe button which will then play with the creature
		// evidenced by the playsatisfaction counter going up by 2 pts out of 10
	},

	evolve: function () {
		// this code will change the creature's appearance when they reach certain age or meter milestones
	// upon activation, the creature will change visually in some way 	
	},

	timer: function () { 
		// This is the central force behind gameplay. This function recognizes the passage of time by ticking
		// down the hunger, cleanliness and boredom meter by 1pts every unit of time.  

	},

}


class Tamagotchi{
	constructor(Hunger, Cleanliness, Boredom, age){
		this

	}



} 


// for debugging -- gives you console access to the most recently clicked element as $it
let $it;
$(document).on('click', (e) => {
  $it = $(e.target);
})



