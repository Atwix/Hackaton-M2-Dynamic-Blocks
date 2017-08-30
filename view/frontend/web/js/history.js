define(
    [
        'uiComponent',
        'jquery',
        'ko',
        'underscore'
    ],
    function (Component, $, ko, _) {
        return Component.extend({
            sessionKey : 'last_visited_pages',

            numbserOfPages : 5,

            historyItems: ko.observable([]),

            initialize: function() {
                this.initHistoryItems();

                return this._super();
            },

            initHistoryItems: function() {
                var thisUrl = document.URL;
                var thisTitle = document.title;
                var lastPages = $.parseJSON(sessionStorage.getItem(this.sessionKey));
                var currentPage = {title : thisTitle, url : thisUrl};
                if (!lastPages) {
                    lastPages = [];
                }
                //TODO check for duplicated URLs
                lastPages.push(currentPage);
                //Remove the exceeding item from the pages stack
                if (lastPages.length > this.numbserOfPages + 1) {
                    lastPages.shift();
                }
                //Set pages to the session
                sessionStorage.setItem(this.sessionKey, JSON.stringify(lastPages));
                //Remove the current page from the pages array before rendering
                lastPages.pop();

                this.historyItems(lastPages);
            }
        });
    }
);