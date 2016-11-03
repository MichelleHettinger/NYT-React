// Include React 
var React = require('react');

// Here we include all of the sub-components
var Saved = require('./Saved.js');
var Search = require('./Search.js');

// This is the main component. It includes the banner and button.
// Whenever you click the button it will communicate the click event to all other sub components.
var Main = React.createClass({

	// Here we render the function
	render: function(){
		return(

			<div className="container">

				<div className="jumbotron">
					<h1 className="text-center"><strong><i className="fa fa-newspaper-o"></i> New York Times Search</strong></h1>
				</div>

				<div className="row">
					<div className="col-sm-12">
					<br/>
						<div className="panel panel-primary">
							<div className="panel-heading">
								<h3 className="panel-title"><strong><i className="fa  fa-list-alt"></i>   Search Parameters</strong></h3>
							</div>
							<div className="panel-body">

								<form role="form">

								  <div className="form-group">
								    <label for="search">Search Term:</label>
								    <input type="text" className="form-control" id="searchTerm" />
								  </div>

								  <div className="form-group">
								    <label for="startYear">Start Year (Optional):</label>
								    <input type="text" className="form-control" id="startYear" />
								  </div>

								  <div className="form-group">
								    <label for="endYear">End Year (Optional):</label>
								    <input type="text" className="form-control" id="endYear" />
								  </div>

								  <button type="submit" className="btn btn-default" id="runSearch"><i className="fa fa-search"></i> Search</button>
			  					  <button type="button" className="btn btn-default" id="clearAll"><i className="fa fa-trash"></i> Clear Results</button>

								</form>
							</div>
						</div>
					</div>
				</div>




				<div className="row">
					<div className="col-sm-12">
						<br/>
						<Search/>
					</div>
				</div>						


				<div className="row">
					<div className="col-sm-12">
						<br/>
						<Saved/>
					</div>
				</div>




				<div className="row">
					<div className="col-sm-12">
						
						<hr/>
						<h5 className="text-center"><small>Made by Michelle with lots and lots of <i className="fa fa-heart"></i></small></h5>

					</div>
				</div>

			</div>
		)
	}
});

// Export the componen back for use in other files
module.exports = Main;