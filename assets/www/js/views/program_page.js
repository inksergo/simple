/**
 * Created with JetBrains PhpStorm.
 * User: Серж
 * Date: 21.09.14
 * Time: 20:57
 * To change this template use File | Settings | File Templates.
 */

var ProgramPageView = Backbone.View.extend({
    el: '<div id="program-page">\
            <div class="how-days">\
                <div class="btn-two-day">2</div>\
                <div class="btn-three-day">3</div>\
            </div>\
            <div class="program"></div>\
        </div>',

    define: function(){
        this.$program = this.$el.find('.program');
        //this.$inputItem = this.$el.find('.input-name-exercises');
    },

    events: {
        'click .btn-two-day' : function(){
            this.$program.html();
            var selectTag = '<select>';
            app.collections.exercise.each(function(model){
                selectTag = selectTag+'<option>'+model.get('exerciseName')+'</option>';
                //arr.push(model.get('exerciseName'));
            }, this);
            selectTag = selectTag+'</select>';
            for (var i = 1; i <=2; i++){
                this.$program.append('<div class="day'+i+'">'+selectTag+'</div>');
            };
        },
        'click .btn-three-day' : function(){
            this.$program.html();
            var selectTag = '<select>';
            app.collections.exercise.each(function(model){
                selectTag = selectTag+'<option>'+model.get('exerciseName')+'</option>';
                //arr.push(model.get('exerciseName'));
            }, this);
            selectTag = selectTag+'</select>';
            for (var i = 1; i <=3; i++){
                this.$program.append('<div class="day'+i+'">'+selectTag+'</div>');
            };
        }
    },

    initialize: function(){
        this.define();
        this.render();


        /*
        app.collections.exercise.on('add', function(model){
            var view = new ExerciseView({model: model});
            this.$exercises.append(view.$el);
        }, this)
        */
    },

    /*
    render: function(){
        app.collections.exercise.each(function(model){
            var view = new ExerciseView({model: model});
            this.$exercises.append(view.$el);
        }, this);

    }
    */
});

/*
var ExerciseView = Backbone.View.extend({
    className: 'exercise-item btn btn-info',
    template: _.template($('#exercise-list-template').html()),
    events: {
        'click .exercise': function(){
            alert('_)(*');
        }
    },
    initialize: function(){
        this.render();
    },

    render: function(){
        this.$el.html(this.template(this.model.toJSON()));
    }
})
*/

