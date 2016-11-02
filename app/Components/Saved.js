// Include React 
var React = require('react');

// This is the main component. It includes the banner and button.
// Whenever you click the button it will communicate the click event to all other sub components.
var Main = React.createClass({

	// Here we render the function
	render: function(){

		return(

				// This row will handle all of the saved articles -->
				<div className="row">
					<div className="col-sm-12">
					<br>

						// This panel will initially be made up of a panel and wells for each of the articles saved -->
						<div className="panel panel-primary">

							// Panel Heading for the saved articles box -->
							<div className="panel-heading">
								<h3 className="panel-title"><strong><i className="fa fa-table"></i>   Saved Articles</strong></h3>
							</div>

							// This main panel will hold each of the saved articles -->
							<div className="panel-body" id="wellSection">
							</div>
						</div>
					</div>
				</div>

		)
	}
});

// Export the componen back for use in other files
module.exports = Saved;