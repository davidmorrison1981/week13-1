var React = require('react');
var FilmList = require('./FilmList')
var FilmForm = require('./FilmForm')

var filmData = [{id:1, title: "Troll"},{id:2, title: "Jack Reacher: Never Go Back"},{id:2, title: "Ouiju: Origin of Evil"}];

var FilmBox = React.createClass({
  
  getInitialState: function(){
    return {data: filmData}    
  },

  handleFilmSubmit: function(film){
    film.id = Date.now();

    var newFilm = this.state.data.concat([film]);

    this.setState({data: newFilm});

  },
  render: function(){
    return (
      <div className="film-box">
      <h2>UK Opening this Week</h2>

      <CommentForm onFilmSubmit={this.handleFilmSubmit}/>
      <CommentList data = {this.state.data}/>
      </div>
      )
  }

})