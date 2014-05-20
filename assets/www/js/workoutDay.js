var WorkoutDay = function(){
	this.date = new Date();
	this.exercise = [];
}

WorkoutDay.prototype = {
	addExercise : function(name){
		if(typeof name != 'undefined'){
			this.exercise.push(new Exercise(name))	
		}
	},
	showInfo : function(){
		return this;
	}
}