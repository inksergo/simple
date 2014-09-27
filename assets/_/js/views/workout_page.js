/**
 * Created with JetBrains PhpStorm.
 * User: Серж
 * Date: 21.09.14
 * Time: 20:57
 * To change this template use File | Settings | File Templates.
 */
var WorkoutPageView = function(){

    var workoutPageView = Backbone.View.extend({
        currentProgram: {
            'name': '',
            'dayList': []
        },
        template: _.template($('#workout-page-template').html()),
        define: function(){
            this.$programs = this.$el.find('.programs');
            //this.$inputItem = this.$el.find('.input-name-exercises');
        },
        _viewCurrentProgram: function(){
            if (!this.currentProgram.name){
                alert('currentProgram not exist');
                return;
            }
            this.$el.html('<div class="in-program"></div>');
            this.$elem = this.$('.in-program');
            this.$elem.append('<h3>' + this.currentProgram.name + '</h3>');
            var day_index = 0;
            this.currentProgram.dayList.forEach(function(day){
                day_index++;
                this.$elem.append('<div>day ' + day_index + '</div>');
                for(var key in day){
                    this.$elem.append('<a href="#" day="' + day_index + '" class="exercise ui-btn ui-corner-all" exercise_id="' + day[key].id + '">' + day[key].get('name') + '</a>');
                }
            }, this)

        },
        _viewExercise: function(exercise){
            this.$el.html('<div class="in-exercise"></div>');
            this.$elem = this.$('.in-exercise');
            this.$elem.append('<h3>' + exercise.get('name') + '</h3>');
        },
        events: {
            'click .program': function(el){
                var program = app.collections.programs.get($(el.currentTarget).attr('prog_id'));
                if (program){
                    this.currentProgram.name = program.get('name');
                    var dayList = program.get('dayList');
                    dayList.forEach(function(day){
                        var exerInDay = [];
                        for(var i=0; i < day.length; i++){
                            exerInDay[day[i]] = app.collections.exercises.get(day[i]);
                        }
                        this.currentProgram.dayList.push(exerInDay);
                    }, this)
                    this._viewCurrentProgram();
                }

            },
            'click .exercise': function(el){
                var day_index = $(el.currentTarget).attr('day') - 1;

                var exercise = this.currentProgram.dayList[day_index][$(el.currentTarget).attr('exercise_id')];

                if (exercise){
                    this._viewExercise(exercise);
                }

            }
        },

        initialize: function(){
            this.$el.html(this.template());
            this.define();
            //console.log(this.template(this.model.toJSON()));
            //this.$el.html(this.template());
            this.render();


            app.collections.programs.on('add', function(model){
                var view = new ProgramView({model: model});
                this.$programs.append(view.$el);
            }, this)
        },

        render: function(){
            app.collections.programs.each(function(model){
                console.log('programm each');
                var view = new ProgramView({model: model});
                this.$programs.append(view.$el);
            }, this);
        }
    });

    var workoutPage = new workoutPageView();

    return workoutPage;
}




var ProgramView = Backbone.View.extend({
    className: 'program-item',
    template: _.template($('#program-item-template').html()),
    templateView: _.template($('#workout-view-exercise').html()),
/*
    events: {
        'click .program': function(){
            var name = this.model.get('name');
            var dayList = this.model.get('dayList');
            for (var i = 0; i < dayList; i++){
                //todo
                var day = dayList[i]
            }
            //this.$el.html(this.templateView(this.model.toJSON()));
        }
    },
*/
    initialize: function(){
        this.render();
    },

    render: function(){
        this.$el.html(this.template({'prog_id':this.model.id,'name': this.model.get('name')}));
    }
})

