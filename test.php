<?php
require 'calculadora.php';
class CalculatorTests extends PHPUnit_Framework_TestCase
{
private $calculator;
protected function setUp()
{
$this->calculator= new Calculator();
}
public function testAdd()
{
$result=$this->calculator->add(1,2);
$this->assertEquals(3,$result);
}
}