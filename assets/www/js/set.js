var Set = function(weight, repeats){
	if (typeof weight === 'undefined' && typeof repeats === 'undefined'){
		weight =  0;
		repeats = 0;
	}
	this.weight = weight;
	this.repeats = repeats;
}

Set.prototype = {
	getWeight : function(){
		return this.weight;
	},

	setWeight : function(weight){
		if (typeof weight !== 'undefined' && weight != 0){
			this.weight = weight;	
		}
		else{
			console.log('error!!');
		}
	},


	getRepeats : function(){
		return this.repeats;
	},

	setRepeats : function(repeats){
		if (typeof repeats !== 'undefined' && repeats != 0){
			this.repeats = repeats;	
		}
		else{
			console.log('error!!');
		}
	},

	getFormated : function(){
		return 'вес: '+this.weight+'; повторений: '+this.repeats+'.';
	},

	setFast : function(string){
		return string;
	}
}
