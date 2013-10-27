(function () {
    'use strict';

    var pageIntervalText = function (firstPage, lastPage, currentPage) {
            var numbers = [], i;

            for (i = firstPage; i <= lastPage; i = i + 1) {
                numbers.push(
                    (i === currentPage) ? ('[' + i + ']') : i
                );
            }

            return numbers.join(' ');
        },

        currentPage = function (offset, rowsPerPage) {
            return Math.ceil(offset / rowsPerPage);
        },

        pageNumbersText = function (offset, total, rowsPerPage, maxNavigatorSize) {
            return '';
        },

        runTests = function () {
            var assert = function (predicate, message) {
                    if (!predicate) {
                        throw message;
                    }
                };

            (function (msg) {
                assert(currentPage(0, 10) === 0, msg);
            }('currentPage for row 0 must be 0'));

            (function (msg) {
                assert(currentPage(100, 10) === 10, msg);
            }('currentPage for row 100 must be 10 if page size is 10'));

            (function (msg) {
                assert(pageIntervalText(3, 6, 4) === '3 [4] 5 6', msg);
            }('pageIntervalText from 3 to 6 with 4 selected must be "3 [4] 5 6"'));
        };

    runTests();

    module.exports = pageNumbersText;
}());
