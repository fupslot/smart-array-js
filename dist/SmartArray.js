/*       
    {
        name:    'Landing page #1',
        actual:  [198, 167, 110, 89, 12],
        compare: [187, 143, 100, 34, 17]
    },
    {
        name:    'Landing page #2',
        actual:  [243, 201, 134, 32, 10],
        compare: [241, 208, 173, 90, 26]
    },
    {
        name:    'Landing page #3',
        actual:  [143, 132, 98, 65, 8],
        compare: [176, 154, 120, 78, 2]
    },
*/
;(function(window, document, undefined) {
    
    function FunnelSmartCollection (events) {
        this._events = _.clone(events);
        this._sections = [];
        // init.call(this);
    }

    FunnelSmartCollection.prototype = {
        push: function (sectionName, eventName, actualValue, compareValue) {
            var sectionIndex
              , eventIndex;

            actualValue  = _.isNumber(actualValue)  ? actualValue  : 0;
            compareValue = _.isNumber(compareValue) ? compareValue : 0;

            sectionIndex = _.pluck(this._sections, 'name').indexOf(sectionName);
            eventIndex = this._getEventIdxByName(eventName);

            if (eventIndex === -1) {
                console.error('Error@FunnelSmartCollection. No '+eventName+' event was found in the collection.');
                return;
            }

            if (sectionIndex === -1) {
                this._insertSection(sectionName, eventIndex, actualValue, compareValue);
            }
            else {
                this._addToSection(sectionIndex, eventIndex, actualValue, compareValue);
            }
        },

        _insertSection: function (sectionName, eventIndex, actual, compare) {
            var section;

            section = {
                name:    sectionName,
                actual:  _.range(0, this._events.length, 0),
                compare: _.range(0, this._events.length, 0)
            };

            section.actual[eventIndex]  = actual;
            section.compare[eventIndex] = compare;

            return this._sections.push(section) - 1;
        },

        _addToSection: function (sectionIndex, eventIndex, actual, compare) {
            var section;

            section = this._sections[sectionIndex];
            section.actual[eventIndex]  = actual;
            section.compare[eventIndex] = compare;
        },

        _getEventIdxByName: function (eventName) {
            return _.indexOf(this._events, eventName);
        },

        toCollection: function () {
            return _.clone(this._sections);
        }
    };

    window['FunnelSmartCollection'] = FunnelSmartCollection;
})(window, document);