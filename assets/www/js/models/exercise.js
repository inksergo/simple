/**
 * Created with JetBrains PhpStorm.
 * User: Серж
 * Date: 21.09.14
 * Time: 20:53
 * To change this template use File | Settings | File Templates.
 */

    var ExerciseModel = Backbone.Model.extend({
        defaults: {
            'exerciseName' : 'default name exercise',
            'sets' : 'default set'
        }
    });