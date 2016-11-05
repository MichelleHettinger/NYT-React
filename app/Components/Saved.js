// Include React 
var React = require('react');

// This is the main component. It includes the banner and button.
// Whenever you click the button it will communicate the click event to all other sub components.
var Saved = React.createClass({

	embedArticles: function(){
		var articles = this.props.articles;

		console.log(articles);
	},


	// Here we render the function
	render: function(){

		return(

			<div className="panel-body" id="savedSection">
			</div>

		)
	}
});

// Export the component back for use in other files
module.exports = Saved;