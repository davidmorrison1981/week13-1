var React = require('react');

var Film = React.createClass({

  render: function(){
    return (
      <div className = "film">
        <h4 className = "FilmTitle">
        {this.props.title}
        </h4>
        {this.props.children}
      </div>
      )
  }

});

module.exports = Film;