//упражнение
var Exercise = function(name){
	//default
	this.name = '';
	this.sets = [];

	if (typeof name !== 'undefined'){
		this.name = name;
	}
}

Exercise.prototype = {
	newSet : function(weight, repeats){
		this.sets.push(new Set(weight, repeats));
	},

	getName : function(){
		return this.name;
	},

	showInfo : function(){
		result = 'Упражнение: '+ this.name+'\n';
		//result = '';
		for(i=1; i<=this.sets.length; i++){
			result = result + 'подход '+ i + '\n' + this.sets[i-1].getFormated() + '\n';
		}
		return result;
	}
}