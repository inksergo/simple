/**
 * Created with JetBrains PhpStorm.
 * User: Серж
 * Date: 21.09.14
 * Time: 20:58
 * To change this template use File | Settings | File Templates.
 */

    var ProgramModel = Backbone.Model.extend({
        defaults: {
            'programName' : 'default program name',
            'workOutDayList': []
        }
    });
