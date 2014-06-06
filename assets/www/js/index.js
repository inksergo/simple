(function($){
	$(function(){

		var ExerciseModel = Backbone.Model.extend({
			defaults: {
				'exerciseName' : 'default name exercise',
				'sets' : []
			}
		});

		var ExerciseCollection = Backbone.Collection.extend({
			model : ExerciseModel,
			localStorage: new Backbone.LocalStorage('exercise')
		})

		var exerciseList = new ExerciseCollection();

		var ExerciseView = Backbone.View.extend({
			tagName: 'li',
			template: _.template($('#exercise-list-template').html()),

			initialize: function(){
				this.model.bind('change', this.render, this);
				this.model.bind('destroy', this.remove, this);
			},

			render: function(){
				this.$el.html(this.template(this.model.toJSON()));
				return this;
			}
		})

		var ProgramModel = Backbone.Model.extend({
			defaults: {
				'programName' : 'default program name',
				'workOutDayList': [],
			}
		})


		var MainPageView = Backbone.View.extend({
			template: _.template($('#main-page').html()),
			render: function(){
				this.$el.html(this.template());
				return this;
			}			
		});


		var ExercisePageView = Backbone.View.extend({
			template: _.template($('#exercise-page').html()),
			events: {
				'click button#addNew' : 'addInList',
				'click button#testbutton' : 'testFunc'
			},

			render: function(){
				var self = this;
				this.$el.html(this.template());
				exerciseList.each(function(elem){
					var view = new ExerciseView({model: elem});
					self.$el.find('ul#exercise-list').append(view.render().el);
				});
				console.log('render exercise');
				return this;
			},

			initialize: function(){
				_.bindAll(this, 'render');
				exerciseList.bind('add', this.addNewView);
				exerciseList.fetch();
			},

			addInList: function(){
				
				exerciseList.create({
					exerciseName: $('#exercise-name').val()
				});
				$('#exercise-name').val('');
			},
			//trable-----------------
			addNewView: function(mod){
				console.log(this.$el);
				var view = new ExerciseView({model: mod});		
				$('ul#exercise-list').append(view.render().el);
			},
			//--------------------

			testFunc: function(){
				//this.tt++;
				console.log(this.tt);
			}

		});



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
/*
var ttt = new ExerciseView({model: new ExerciseModel()})
		$('#fortest').append(ttt.render().el);
		*/

	})
}(jQuery))