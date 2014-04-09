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
    
    function FunnelSmartCollection (eventCount) {
        this._eventCount = eventCount;
        this._sections = [];
    }

    FunnelSmartCollection.prototype = {
        push: function (stepId, sectionName, eventName, actualValue, compareValue) {
            var isNewStep
              , sectionIndex;

            actualValue  = _.isNumber(actualValue)  ? actualValue  : 0;
            compareValue = _.isNumber(compareValue) ? compareValue : 0;

            sectionIndex = _.pluck(this._sections, 'name').indexOf(sectionName);

            if (stepId > this._eventCount) {
                console.error('Error@FunnelSmartCollection. The stepId is out of the range 0-'+this._eventCount);
                return;
            }

            if (sectionIndex === -1) {
                this._insertSection(sectionName, stepId - 1, actualValue, compareValue);
            }
            else {
                this._addToSection(sectionIndex, stepId - 1, actualValue, compareValue);
            }
        },

        _insertSection: function (sectionName, stepId, actual, compare) {
            var section;

            section = {
                name:    sectionName,
                actual:  _.range(0, this._eventCount, 0),
                compare: _.range(0, this._eventCount, 0)
            };

            section.actual[stepId]  = actual;
            section.compare[stepId] = compare;

            return this._sections.push(section) - 1;
        },

        _addToSection: function (sectionIndex, stepId, actual, compare) {
            var section;

            section = this._sections[sectionIndex];
            section.actual[stepId]  = actual;
            section.compare[stepId] = compare;
        },

        toCollection: function () {
            return _.clone(this._sections);
        }
    };

    window['FunnelSmartCollection'] = FunnelSmartCollection;
})(window, document);