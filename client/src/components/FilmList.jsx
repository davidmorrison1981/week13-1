var React = require('react');
var Film = require('./Film');

var FilmList = React.createClass({

  render: function(){
    
    var filmNodes = this.props.data.map(
      function(film, index){
        return (
          <Film author={film.title} key ={film.id}></Film>
          )
    })

    return (
      <div>
        {filmNodes}
      </div>
      )
  }

});

module.exports = FilmList;