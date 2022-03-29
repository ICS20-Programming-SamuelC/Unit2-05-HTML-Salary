// Copyright (c) 2022 Samuel Carlson All rights reserved
//
// Created by: Samuel Carlson
// Created on: March 2022
// This file contains the JS functions for index.html

"use strict";
/**
 * This function your pay and the amount the gouvernament will take.
 */
function calculate () {
  // input
  let length = parseInt(document.getElementById('hours-worked').value);
  let width = parseInt(document.getElementById('hourly-pay').value);

  // process
  let pay = hours worked * hourly pay;
  let amount the government will take = 0.18 * (hours worked * hourly pay);

  // output
  document.getElementById('area').innerHTML = 'Pay is: ' + pay + ' $'
  document.getElementById('perimeter').innerHTML = 'Amount the government will take is: ' + amount the government will take + ' $'
}