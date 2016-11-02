// Include React 
var React = require('react');

// Here we include all of the sub-components
var Saved = require('./Saved');
var Search = require('./Search');

// This is the main component. It includes the banner and button.
// Whenever you click the button it will communicate the click event to all other sub components.
var Main = React.createClass({

	// Here we render the function
	render: function(){

		return(

			<div className="container">

				// Jumbotron for Title
				<div className="jumbotron" style="background-color: #20315A ; color: white;">
					<h1 className="text-center"><strong><i className="fa fa-newspaper-o"></i> New York Times Search</strong></h1>
				</div>

				// Row for Searching New York Times
				<div className="row">
					<div className="col-sm-12">
					<br>
						// First panel is for handling the search parameters -->
						<div className="panel panel-primary">
							<div className="panel-heading">
								<h3 className="panel-title"><strong><i className="fa  fa-list-alt"></i>   Search Parameters</strong></h3>
							</div>
							<div className="panel-body">

								// Here we create an HTML Form for handling the inputs-->
								<form role="form">

							  	  // Here we create the text box for capturing the search term-->
								  <div className="form-group">
								    <label for="search">Search Term:</label>
								    <input type="text" className="form-control" id="searchTerm">
								  </div>

							  	  // Here we capture the Start Year Parameter-->
								  <div className="form-group">
								    <label for="startYear">Start Year (Optional):</label>
								    <input type="text" className="form-control" id="startYear">
								  </div>

							  	  // Here we capture the End Year Parameter -->
								  <div className="form-group">
								    <label for="endYear">End Year (Optional):</label>
								    <input type="text" className="form-control" id="endYear">
								  </div>

								  // Here we have our final submit button -->
								  <button type="submit" className="btn btn-default" id="runSearch"><i className="fa fa-search"></i> Search</button>
			  					  <button type="button" className="btn btn-default" id="clearAll"><i className="fa fa-trash"></i> Clear Results</button>

								</form>
							</div>
						</div>
					</div>
				</div>

				// This row will handle all of the retrieved articles -->


				// This row will handle all of the saved articles -->



				// Footer Region -->
				<div className="row">
					<div className="col-sm-12">
						
						// Line Break followed by closing -->
						<hr>
						<h5 className="text-center"><small>Made by Ahmed with lots and lots of <i className="fa fa-heart"></i></small></h5>

					</div>
				</div>

			</div>
		)
	}
});

// Export the componen back for use in other files
module.exports = Main;