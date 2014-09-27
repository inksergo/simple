/**
 * Created with JetBrains PhpStorm.
 * User: Серж
 * Date: 21.09.14
 * Time: 20:58
 * To change this template use File | Settings | File Templates.
 */

    var ProgramModel = Backbone.Model.extend({
        idAttribute: 'program_id',
        defaults: {
            'program_id': null,
            'name': 'default program name',
            'dayList': []
        }
    });
