var App = function(){
    window.app = function(){};
    var log = function(value){
        console.log('App: ' + value);
    }

    app.storage = new GlobalStrore();

    app.getIndex = function(){
        staticIndex++;
        app.storage.setValue('app_static_index', staticIndex);
        return staticIndex;
    }

    app.models = {
        exercise: new ExerciseModel(),
        program: new ProgramModel()
    };
    app.collections = {
        exercises: new ExerciseCollection(),
        programs: new ProgramCollection()
    };


    //загрузка данных
    log('data load..');
    var staticIndex = app.storage.getValue('app_static_index') | 0;

    app.baseMain = {}
    var data_base = app.storage.getValue('baseMain');
    if (data_base){
        app.baseMain = JSON.parse(data_base);
        log('baseMain OK');
        if (app.baseMain.exercisesList.length){
            for (var i = 0; i < app.baseMain.exercisesList.length; i++){
                var exercise = app.storage.getValue(app.baseMain.exercisesList[i]);
                app.collections.exercises.add(JSON.parse(exercise));
            }
            log('exercises OK');
        }
        if (app.baseMain.programs.length){
            for (var i = 0; i < app.baseMain.programs.length; i++){
                var program = app.baseMain.programs[i];
                app.collections.programs.add(program);
            }
            log('programs OK');
        }
    } else {
        app.baseMain.programs = [];
        app.baseMain.exercisesList = [];
        app.storage.setValue('baseMain', app.baseMain);
    }
    log('--------------');
    //-------------------------------------------------------------



    app.views = {
        mainPage: new MainPageView(),
        //exercisePage: new ExercisePageView()
    };



    app.collections.programs.on('add', function(prog){
        app.baseMain.programs.push(prog);
        app.storage.setValue('baseMain', app.baseMain);
        log('program added');
    })

    app.collections.exercises.on('add', function(exercise){
        app.baseMain.exercisesList.push(exercise.get('exercise_id'));
        app.storage.setValue('baseMain', app.baseMain);
        app.storage.setValue(exercise.get('exercise_id'), exercise);
        log(exercise.get('exercise_id')+' added');
    })

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