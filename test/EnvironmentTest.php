<?php

class EnvironmentTest extends PHPUnit_Framework_TestCase
{
    public function testAllRunsFineInV8Js()
    {
        $this->assertSame('[1]', Navigator\pageNumbersText(0, 0, 0, 0));
    }
}
