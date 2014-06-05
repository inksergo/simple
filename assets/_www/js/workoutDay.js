var WorkoutDay = function(name){
	var self = this;
	//this.date = new Date();
	self.nameOfDay = ko.observable(name);
	this.exercise = ko.observableArray();
	self.addExercise = function(name){
		if(typeof name != 'undefined'){
			this.exercise.push(new Exercise(name))	
		}
	};
	self.showInfo = function(){
		return self.exercise;
	};
}