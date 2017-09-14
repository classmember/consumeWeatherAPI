/** @fileoverview consumeWeatherAPI - Displays Weather Data
 *  @author Kolby Heacock
 *  @version 1.0
 *  @requires jQuery
 */

$(document).ready(function(){
  $('#get-weather-button').on('click', function (e) {
    $.getJSON('src/example-forecast.json', function(result){
      $('#weather-view').html(
        '<h2>Weather Report</h2>' +
        '<table>' +
        '<tr>' + 
        '<td>Description</td>' +
        '<td>' + result['list']['0']['weather']['0']['description'] + '</td>' +
        '</tr>' +
        '<tr>' + 
        '<td>Temperature</td>' +
        '<td>' + result['list']['0']['main']['temp'] + '°F' + '</td>' +
        '</tr>' +
        '<tr>' + 
        '<td>Humidity</td>' +
        '<td>' + result['list']['0']['main']['humidity'] + '%' + '</td>' +
        '</tr>' +
        '<tr>' + 
        '<td>Wind Speed</td>' +
        '<td>' + result['list']['0']['wind']['speed'] + 'mph' + '</td>' +
        '</tr>' +
        '<tr>' + 
        '<td>Barometric Pressure</td>' +
        '<td>' + result['list']['0']['main']['pressure'] + '</td>' +
        '</tr>' +
        '</table>');
    });
  });
});
