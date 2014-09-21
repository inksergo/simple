var App = function(){
    window.app = function(){};

    app.models = {
        exercises: new ExerciseModel(),
        program: new ProgramModel()
    };
    app.collections = {
        exercise: new ExerciseCollection(),
        program: new ProgramCollection()
    };
    app.collections.exercise.add(new ExerciseModel());
    app.collections.exercise.add(new ExerciseModel());
    app.collections.exercise.add(new ExerciseModel());
    app.views = {
        mainPage: new MainPageView(),
        exercisePage: new ExercisePageView()
    };

    return app;
}

/*
(function($){
	$(function(){



		var exerciseList = new ExerciseCollection();





		var CreateProgramView = Backbone.View.extend({
			template: _.template($('#create-program-page').html()),

			events: {
				'click button#addNewDay' : 'addInList',
				'dblclick button.ww' : 'testFunc'
			},

			initialize: function(){

			},

			render: function(){
				this.$el.html(this.template());
				return this;
			},
			addInList: function(){

			}
		});











		var Router = Backbone.Router.extend({
			routes: {
				'' : 'index',
				'workOut' : 'workOut',
				'exercise' : 'exercise',
				'createProgramTraning' : 'createProgramTraning'
			},

			index: function(){
				console.log('index');
				this.changePage(new MainPageView());		
			},
			workOut: function(){
				console.log('workOut');
			},
			exercise: function(){
				console.log('exercise');
				this.changePage(new ExercisePageView());
			},
			createProgramTraning: function(){
				console.log('createProgramTraning');
				this.changePage(new CreateProgramView());
			},


			changePage:function (page) {
		        $(page.el).attr('data-role', 'page');
		        $(page.el).attr('data-theme', 'a');
		        page.render();
		        $('body').append(page.el);
		        var transition = $.mobile.defaultPageTransition;
		        $.mobile.changePage($(page.el), {changeHash:false, transition: transition});
    		}
		});


		
		var appA = new Router();
		Backbone.history.start()

	})
}(jQuery))
*/