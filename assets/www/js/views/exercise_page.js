/**
 * Created with JetBrains PhpStorm.
 * User: Серж
 * Date: 21.09.14
 * Time: 20:57
 * To change this template use File | Settings | File Templates.
 */

var ExercisePageView = Backbone.View.extend({
    el: '<div id="exercise-page">\
            <div class="exercises"></div>\
            <div class="new-item">\
                <input class="input-name-exercises" type="text" /><br/>\
                <button type="button" class="btn btn-success btn-add-exercise">добавить упражнение</button>\
            </div>\
        </div>',

    define: function(){
        this.$exercises = this.$el.find('.exercises');
        this.$inputItem = this.$el.find('.input-name-exercises');
    },

    events: {
        'click .btn-add-exercise' : function(){
            var ex = this.$inputItem.val();
            if(ex != ''){
                this.$inputItem.val('');
                app.collections.exercise.add(new ExerciseModel({exerciseName: ex}));
            }
        }
    },

    initialize: function(){
        this.define();
        this.render();


        app.collections.exercise.on('add', function(model){
            var view = new ExerciseView({model: model});
            this.$exercises.append(view.$el);
        }, this)
    },

    render: function(){
        app.collections.exercise.each(function(model){
            var view = new ExerciseView({model: model});
            this.$exercises.append(view.$el);
        }, this);

    }
});


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

