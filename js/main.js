var $belowHeading = $('<h1>');
var $body = $('body');
var $belowList = $('<ul>');
var $aboveHeading = $('<h1>');
var $aboveList = $('<ul>');


$belowHeading.html('Below ground veggies');

$body.append($belowHeading);

$body.append($belowList);

$aboveHeading.html('Above ground veggies');

$body.append($aboveHeading);

$body.append($aboveList);

$('ul li').each(function () {
  if ($(this).hasClass('below')) {
    $belowList.append($(this));
  } else {
    $aboveList.append($(this));
  }
});
