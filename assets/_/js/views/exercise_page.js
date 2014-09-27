/**
 * Created with JetBrains PhpStorm.
 * User: Серж
 * Date: 21.09.14
 * Time: 20:57
 * To change this template use File | Settings | File Templates.
 */

var ExercisePageView = Backbone.View.extend({
/*
    el: '<div id="exercise-page">\
            <div data-role="main" class="ui-content">\
                <div class="exercises"></div>\
                <div class="new-item">\
                    <input class="input-name-exercises" type="text" placeholder="Новое упражнение.." /><br/>\
                    <a href="#" class="btn-add-exercise ui-btn ui-btn-b">добавить</a>\
                </div>\
            </div>\
        </div>',
    */
    //el: '#exercise-page',
    templateMain: _.template($('#exercise-page-template').html()),
    define: function(){
        this.$exercises = this.$el.find('.exercises');
        this.$inputItem = this.$el.find('.input-name-exercises');
    },

    events: {
        'click .btn-add-exercise' : function(){
            console.log('____!!!! click btn-add-exercise');
            var ex = this.$inputItem.val();
            if(ex != ''){
                this.$inputItem.val('');
                app.collections.exercises.add(new ExerciseModel({'exercise_id': 'exercise_'+app.getIndex(), 'name': ex}));
            } else {
                alert('поле ввода пусто');
            }
        }
    },

    initialize: function(){
        this.$el.html(this.templateMain());
        this.define();
        //console.log(this.template(this.model.toJSON()));
        //this.$el.html(this.template());
        this.render();


        app.collections.exercises.on('add', function(model){
            var view = new ExerciseView({model: model});
            this.$exercises.append(view.$el);
        }, this)
    },

    render: function(){
        app.collections.exercises.each(function(model){
            var view = new ExerciseView({model: model});
            this.$exercises.append(view.$el);
        }, this);

    }
});


var ExerciseView = Backbone.View.extend({
    className: 'exercise-item',
    template: _.template($('#exercise-item-template').html()),
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

