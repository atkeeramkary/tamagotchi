

class Tamagotchi{
	constructor(name){
		this.name = name;
		this.age = 0;
		this.hunger = 5;
		this.cleanliness = 5;
		this.boredom = 5;

	}
	feed() {
		this.hunger++
	}
	clean() {
		this.cleanliness++
	}
	attention() {
		this.boredom++
	}


} 




const game = {
	time: 0,
	interval: null,
	currentPet: null,

	hunger(){
		if (this.time % 5 === 0) { 
	      this.currentPet.hunger--
	    }
	},

	cleanliness(){
		if (this.time % 5 === 0){
			this.currentPet.cleanliness--
		}
	},

	attention(){
		if (this.time % 5 === 0){
			this.currentPet.boredom--
		}
	},

	age(){
		if (this.time % 5 === 0){
			this.currentPet.age++
		}
	},

	// death() {
	// 	if (this.age === 13 || this.currentPet.hunger = 0 || 
	// 		this.currentPet.cleanliness = 0 || this.currentPet.attention = 0){

	// 		alert('Your Tamagotchi has died')
	// 	}
		
	// }
	lifeCheck: function() {
        if(this.currentPlayer.boredom === 0 || this.currentPlayer.hunger === 0 || this.currentPlayer.cleanliness === 0) {
            this.isAlive = false
        }
    },	
	gameOver() { 
        if(!this.isAlive) {
            
            $('#gameover').text("GAME OVER!!!" );
            clearInterval(this.interval);

        }
    },
	

	stats(){
		if (this.time !== 0){
			$('#hunger').text('Hunger: ' + game.currentPet.hunger)
			$('#cleanliness').text('Cleanliness: ' + game.currentPet.cleanliness)
			$('#boredom').text('Boredom: ' + game.currentPet.boredom)
		}
	},



	start() {

		// instantiate the tomagotchi
		const create = new Tamagotchi('Moana') // instantiation
		this.currentPet = create
		console.log()

		// console.log() it to get it working
			

	
	
		 // call a method in game object called start
	 	setInterval(function(){
	 		console.log(game.currentPet)
	 		game.hunger()
	 		game.cleanliness()
	 		game.attention()
	 		game.age()
	 		game.time++
	 	}, 1000) 
		// This is the central force behind gameplay. This function recognizes the passage of time by ticking
		// down the hunger, cleanliness and boredom meter by 1pts every unit of time.  

	},

		// make the tomagatchi it creates be a property of the game object

	// feedMe: function() {
	// 	$('#toFeedButton').on('click', () => {
	
				
  				
  				
 //  				console.log('click works')
	// 	})
	// 	//this code will register clicks to the FeedMe button which will then feed the creature
	// // evidenced by the feed counter going up by 2 pts out of 10
	// },

	// cleanMe: function() {
	// 	$('#toCleanButton').on('click', () => {
	
				
  				
  				
 //  				console.log('click works')
	// 		  	})

	// 	// this code will register clicks to the CleanMe button which will then clean the creature
	// // evidenced by the clean counter going up by 2 pts out of 10

	// },

	// playWithMe: function() {
	// 	// this code will register clicks to the PlayWithMe button which will then play with the creature
	// 	// evidenced by the playsatisfaction counter going up by 2 pts out of 10
	// 	$('#toPlayButton').on('click', () => {
	
				
  				
  				
 //  				console.log('click works')
	// 		  	})

	// },

	evolve: function () {
		// this code will change the creature's appearance when they reach certain age or meter milestones
	// upon activation, the creature will change visually in some way 	
	},


}



$('#toFeedButton').on('click', () => {
	game.currentPet.feed()

	console.log(game.currentPet);
		
	console.log('click works')
})
		//this code will register clicks to the FeedMe button which will then feed the creature
	// evidenced by the feed counter going up by 2 pts out of 10


$('#toCleanButton').on('click', () => {
	game.currentPet.clean()

	console.log(game.currentPet);
		
	console.log('click works')
})


$('#toPlayButton').on('click', () => {
	game.currentPet.attention()

	console.log(game.currentPet);
		
		
	console.log('click works')
})







// for debugging -- gives you console access to the most recently clicked element as $it
let $it;
$(document).on('click', (e) => {
  $it = $(e.target);
})

$('#submnit-btn').on('click', () => {
 	game.start()
 })


