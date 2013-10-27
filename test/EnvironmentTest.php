<?php

class EnvironmentTest extends PHPUnit_Framework_TestCase
{
    public function testAllRunsFineInV8Js()
    {
        $this->assertSame('', Navigator\pageNumbersText(1, 2, 3, 4));
    }
}
