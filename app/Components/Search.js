// Include React 
var React = require('react');

// This is the main component. It includes the banner and button.
// Whenever you click the button it will communicate the click event to all other sub components.
var Search = React.createClass({

	// Here we render the function
	render: function(){

		return (
			<div className="row">
				<div className="col-sm-12">
					<br/>
					<div className="panel panel-primary">
						<div className="panel-heading">
							<h3 className="panel-title"><strong><i className="fa fa-table"></i>   Top Articles</strong></h3>
						</div>
						<div className="panel-body" id="wellSection">
						</div>
					</div>
				</div>
			</div>					
		)
	}
});

// Export the component back for use in other files
module.exports = Search;