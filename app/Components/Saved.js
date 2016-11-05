// Include React 
var React = require('react');

// This is the main component. It includes the banner and button.
// Whenever you click the button it will communicate the click event to all other sub components.
var Saved = React.createClass({

	getInitialState: function(){
		return {
			articles: this.props.articles,
		}
	},

	embedArticles: function(){

		console.log("Embedding articles.");

		var allArticles = this.state.articles;

		// for (var i=0; i<allArticles.length; i++){

			mapObject(allArticles[0], function(key, value){
				return <div> {key} {value} </div>
			});
		// }
	},

	// Here we render the function
	render: function(){

		return(
			<div className="row">
				<div className="col-sm-12">
					<br/>
					<div className="panel panel-primary">
						<div className="panel-heading">
							<h3 className="panel-title"><strong><i className="fa fa-table"></i>   Saved Articles</strong></h3>
						</div>

						<div className="panel-body" id="savedSection" onLoad={this.embedArticles}>

						{this.state.articles}
						{this.embedArticles}
						</div>


					</div>
				</div>
			</div>	

		)
	}
});

// Export the component back for use in other files
module.exports = Saved;