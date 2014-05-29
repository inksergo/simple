function ProgramViewModel() {
    var self = this;


    self.testVariable = ko.observable();
    
    //visibles
    self.mainMenuVisible = ko.observable(true);
    self.currentProgramVisible = ko.observable(false);
    self.createProgramVisible = ko.observable(false);

    self.workOutDay = ko.observable();
    self.currentProgram = ko.observableArray();


   	self.testClick = function(value){
   		var val = value.nameOfDay();
   		self.testVariable(val);
   	}

    self.backToMainMenu = function(value){
    	self.createProgramVisible(false);
    	self.currentProgramVisible(false);
   		self.mainMenuVisible(true);
    }
    self.addWorkOutDay = function(){
    	self.currentProgram.push(new WorkoutDay(self.workOutDay()));
    	self.workOutDay('');
    }

   	self.showCreateProgramMenu = function(){
   		self.createProgramVisible(true);
   		self.mainMenuVisible(false);
   	}

   	self.showCurrentProgramMenu = function(){
   		self.currentProgramVisible(true);
   		self.mainMenuVisible(false);
   	}

}

ko.applyBindings(new ProgramViewModel());
