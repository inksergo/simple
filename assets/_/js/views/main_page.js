/**
 * Created with JetBrains PhpStorm.
 * User: Серж
 * Date: 21.09.14
 * Time: 21:06
 * To change this template use File | Settings | File Templates.
 */

    var MainPageView = Backbone.View.extend({

        //template: _.template($('#main-page').html()),
        el: 'body',
        define: function () {
            this.$workout = this.$el.find('#workout-lnk');
            this.$exercises = this.$el.find('#exercise-lnk');
            this.$createProgram = this.$el.find('#create-program-lnk');
            this.$content = this.$el.find('.content-lnk');
        },
        events: {
            'click #workout-lnk': function(){
                //this.$content.html(_.template($('#main-page').html()));
                var ex = new WorkoutPageView();
                this.$content.html(ex.$el);
                console.log('workout');
                console.log(ex);
            },
            'click #exercise-lnk': function(){
                var ex = new ExercisePageView();
                this.$content.html(ex.$el);
            },
            'click #create-program-lnk': function(){
                var ex = new ProgramPageView();
                this.$content.html(ex.$el);
            }
        },
        initialize: function(){
            this.define();
        }
        /*
        render: function(){
            this.$el.html(this.template());
            return this;
        }
        */
    });
