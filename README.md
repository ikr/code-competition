This solution's metrics

[![Scrutinizer Quality Score](https://scrutinizer-ci.com/g/ikr/code-competition/badges/quality-score.png?s=425109351a8488b0b72903e0132a4cd07fb39c5f)](https://scrutinizer-ci.com/g/ikr/code-competition/) [![Code Coverage](https://scrutinizer-ci.com/g/ikr/code-competition/badges/coverage.png?s=2202d932963da16b3956425579078cc8356e148d)](https://scrutinizer-ci.com/g/ikr/code-competition/)

Code beauty contest
===================

XIAG is running the first Code Beauty Contest to encourage a good coding style.


Rules
=====

- A participant must have a [GitHub](https://github.com) account
- Forking this repository declares the contest participation
- Your code must pass `./acceptance_test.php`; please replace the `doTest()` function to invoke your
  own implementation
- Test coverage is calculated by [PHPUnit](http://www.phpunit.de); the tests must reside in `./test`
- The solutions' _beauty_ is rated based on an open voting, and on the formal metrics provided by
  [Scrutinizer](https://scrutinizer-ci.com/g/Magomogo/code-competition/) -- the participants have to
  enable their repositories at [scrutinizer-ci](https://scrutinizer-ci.com/), and update the metrics
  links in this document
- Any GitHub users can vote by starring the participant's repository

Installation
============

    vagrant up && vagrant ssh

    composer install --dev
    ./acceptance_test.php
    ./vendor/bin/phpunit

Problem
=======

Implement a rows list pagination navigator

## Input:

- `$offset` index of the first displayed row
- `$total` total amount of rows in the list
- `$rowsPerPage` maximum page size
- `$maxNavigatorSize` how many page numbers the navigator should display

## Output:

A string of text with page numbers, where the current page is wrapped into square brackets:

    3 4 [5] 6 7

Voting
======

After the problem is solved, the participant makes a pull request. The solutions are accessible for
voting in the [pull requests list](https://github.com/Magomogo/code-competition/pulls).
