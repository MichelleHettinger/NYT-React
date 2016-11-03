// Include React 
var React = require('react');

// This is the main component. It includes the banner and button.
// Whenever you click the button it will communicate the click event to all other sub components.
var Search = React.createClass({

	// Here we render the function
	render: function(){

		return(

			// This panel will initially be made up of a panel and wells for each of the articles retrieved
			<div className="panel panel-primary">


				<div className="panel-heading">
					<h3 className="panel-title"><strong><i className="fa fa-table"></i>   Top Articles</strong></h3>
				</div>

				<div className="panel-body" id="wellSection">
				</div>
			</div>

		)
	}
});

// Export the component back for use in other files
module.exports = Search;