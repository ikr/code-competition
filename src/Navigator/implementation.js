(function () {
    'use strict';

    var pageInterval = function (intervalMiddle, maxIntervalSize, maxPage) {
            var radius = Math.floor(maxIntervalSize / 2),

                result = [
                    intervalMiddle - radius + (maxIntervalSize + 1) % 2,
                    intervalMiddle + radius
                ];

            if (0 === maxPage) {
                return [1, 1];
            }

            if (result[0] < 1) {
                result[1] = result[1] - result[0] + 1;
                result[0] = 1;
            }

            if (result[1] > maxPage) {
                result[0] = result[0] - (result[1] - maxPage);
                result[1] = maxPage;
            }

            return result;
        },

        pageIntervalText = function (firstPage, lastPage, currentPage) {
            var numbers = [], i;

            for (i = firstPage; i <= lastPage; i = i + 1) {
                numbers.push(
                    (i === currentPage) ? ('[' + i + ']') : i
                );
            }

            return numbers.join(' ');
        },

        maxPage = function (total, rowsPerPage) {
            return Math.ceil(total / rowsPerPage);
        },

        currentPage = function (offset, rowsPerPage) {
            return Math.ceil(offset / rowsPerPage) + 1;
        },

        pageNumbersText = function (offset, total, rowsPerPage, maxNavigatorSize) {
            var pi = pageInterval(
                    currentPage(offset, rowsPerPage),
                    maxNavigatorSize,
                    maxPage(total, rowsPerPage)
                );

            return pageIntervalText(pi[0], pi[1], currentPage(offset, rowsPerPage));
        },

//--------------------------------------------------------------------------------------------------

        runTests = function () {
            var assertEq = function (actual, expected, message) {
                    if (actual !== expected) {
                        throw [actual, expected, message].join(' / ');
                    }
                };

            (function (msg) {
                assertEq(currentPage(0, 10), 1, msg);
            }('currentPage for row 0 must be 1'));

            (function (msg) {
                assertEq(currentPage(10, 10), 2, msg);
            }('currentPage for row 10 must be 2 if page size is 10'));

            (function (msg) {
                assertEq(maxPage(1004, 10), 101, msg);
            }('maxPage for 1004 rows must be 101 if page size is 10'));

            (function (msg) {
                assertEq(pageIntervalText(3, 6, 4), '3 [4] 5 6', msg);
            }('pageIntervalText from 3 to 6 with 4 selected must be "3 [4] 5 6"'));

            (function (msg) {
                assertEq(pageInterval(4, 3, 100).join(), '3,5', msg);
            }('pageInterval in the middel is correct for odd diameter'));

            (function (msg) {
                assertEq(pageInterval(4, 4, 100).join(), '3,6', msg);
            }('pageInterval in the middel is correct for even diameter'));

            (function (msg) {
                assertEq(pageInterval(1, 5, 100).join(), '1,5', msg);
            }('pageInterval for the head is correct'));

            (function (msg) {
                assertEq(pageInterval(6, 5, 6).join(), '2,6', msg);
            }('pageInterval for the tail is correct'));

            (function (msg) {
                assertEq(pageInterval(2, 7, 8).join(), '1,7', msg);
            }('pageInterval for a partial head intersection is correct'));

            (function (msg) {
                assertEq(pageInterval(1, 1, 1).join(), '1,1', msg);
            }('pageInterval must work in degenerate case'));

            (function (msg) {
                assertEq(pageInterval(1, 0, 0).join(), '1,1', msg);
            }('pageInterval must work in empty case'));

            (function (msg) {
                assertEq(pageNumbersText(10, 101, 10, 3), '1 [2] 3', msg);
            }('pageNumbersTest wires all up alright'));
        };

    runTests();

    module.exports = pageNumbersText;
}());
