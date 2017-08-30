define(
    [
        'uiComponent',
        'jquery',
        'ko',
        'underscore'
    ],
    function (Component, $, ko, _) {
        return Component.extend({
            historyItems: ko.observable([]),

            initialize: function() {
                this.initHistoryItems();

                return this._super();
            },

            initHistoryItems: function() {
                this.historyItems = ["Hello", "World"];
            }
        });
    }
);