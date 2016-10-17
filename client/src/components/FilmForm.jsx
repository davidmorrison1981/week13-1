var React = require('react');

var FilmForm = React.createClass({
  getInitialState: function(){
    return {title: ''}
  },

  handleTitleChange: function(event){
    this.setState({title: event.target.value})
  },

  handleSubmit: function(event){
    event.preventDefault();
    var title = this.state.title.trim();
    if(!title){
      return;
    }
    this.props.onFilmSubmit({title: title});
    
    this.setState({title: ''});
    
  },

  render: function(){
    return (
      <form className = 'film-form' onSubmit={this.handleSubmit}>
        <input type = 'text' 
        placeholder = "film title"
        value = {this.state.title}
        onChange = {this.handleTitleChange} />
        
        <input type = 'submit' 
        value = 'Save Film'/>
      </form>
      )
  }

});

module.exports = TitleForm;