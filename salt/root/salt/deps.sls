the-packages:
  pkg.installed:
    - pkgs:
      - php5
      - php-pear
      - php5-xdebug
      - make
      - g++
      - libv8-dev
      - curl

v8js:
  pecl.installed:
    - version: 0.1.3
    - defaults: Y
    - require:
      - pkg: the-packages

/etc/php5/conf.d/custom.ini:
  file.managed:
    - source: salt://custom.ini
    - require:
      - pkg: the-packages

composer-deps:
  cmd.run:
    - name: curl -sS https://getcomposer.org/installer | php && php composer.phar install && chmod 755 /vagrant/vendor/phpunit/phpunit/composer/bin/phpunit
    - cwd: /vagrant
    - user: vagrant
    - group: vagrant
    - unless: ls /vagrant/vendor
    - require:
      - pkg: the-packages
