var React = require('react');

var WeatherMessage = React.createClass({
  render: function () {
    return (
      <h3>It is 80 degrees in Los Angeles.</h3>
    );
  }
});

module.exports = WeatherMessage;
