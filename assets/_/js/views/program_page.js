/**
 * Created with JetBrains PhpStorm.
 * User: Серж
 * Date: 21.09.14
 * Time: 20:57
 * To change this template use File | Settings | File Templates.
 */

var ProgramPageView = Backbone.View.extend({
    program_name: '',
    days_count: 0,
    now_day: 1,
    excercise_program: [],
    templateMain: _.template($('#program-page-chose-days').html()),
    templateAddExcercise: _.template($('#program-page-add-excercise').html()),
    _createProgramName: function(){
        this.program_name = this.$el.find('.program-name').val();
        if (this.program_name != ''){
            this.$el.find('.program-name').val('')
            return true;
        }
        return false;
    },
    _createExcerciseList: function(name_of_day){
        var ex = '';
        app.collections.exercises.each(function(model){
            ex += '<label><input type="checkbox" value="'+model.id+'"/>'+model.get('name')+'</label>';
        }, this);
        /*
        for (var i = 0; i < app.collections.exercises.length; i++){
            var exercise = app.collections.exercises.at(i);
            ex += '<label><input type="checkbox" name="ex_name_'+i+'" value="'+i+'"/>'+exercise.get('name')+'</label>';
        }
        */
        this.$el.html(this.templateAddExcercise({'excercises': ex, 'name_of_day': name_of_day}));
    },
    /*
    define: function(){
        //this.$program = this.$el.find('.program');
        //this.$inputItem = this.$el.find('.input-name-exercises');

    },
*/
    events: {
        'click .btn-two-days' : function(){
            this.days_count = 2;
            if (!this._createProgramName()){
                this.$el.html(this.templateMain());
                return;
            }
            this._createExcerciseList('Упражнения первого дня:');
        },
        'click .btn-three-days' : function(){
            this.days_count = 3;
            if (!this._createProgramName()){
                this.$el.html(this.templateMain());
                return;
            }
            this._createExcerciseList('Упражнения первого дня:');
        },
        'click .btn-add-exercise': function(){
            var day = [];
            this.$el.find('.add-exercise input:checked').each(function(){
                day.push($(this).val());
            });
            this.excercise_program.push(day);
            console.log('____!!!! day');
            console.log(day);
            this.days_count--;
            if (!this.days_count){
                this.$el.html('Программа создана!');
                app.collections.programs.add(new ProgramModel({'program_id': 'program_'+app.getIndex(), 'name': this.program_name, 'dayList': this.excercise_program}));
                this.excercise_program = [];
                return;
            }
            this._createExcerciseList('Следующий день:');
        }
    },

    initialize: function(){
        this.$el.html(this.templateMain());
        //this.define();
    }

});
