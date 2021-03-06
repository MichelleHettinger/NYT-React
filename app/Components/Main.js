// Include React and axios
var React = require('react');
var axios = require('axios');

// Here we include all of the sub-components
var Saved = require('./Saved.js');
var Search = require('./Search.js');

// This is the main component. It includes the banner and button.
// Whenever you click the button it will communicate the click event to all other sub components.
var Main = React.createClass({

	// This function grabs the saved articles from database and saves them to this state
	componentDidMount: function(){
		axios.get('/api/saved').then(function(results){

			console.log("Fetched users articles");
			console.log(results.data);

			this.setState({
				articles: results.data
			});

		}.bind(this));
	},

	// Here we render the entire contents of the app
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

								  <button type="submit" className="btn btn-primary" id="runSearch"><i className="fa fa-search"></i> Search</button>
			  					  <button type="button" className="btn btn-primary" id="clearAll"><i className="fa fa-trash"></i> Clear Results</button>

								</form>
							</div>
						</div>
					</div>
				</div>

			    {/* Render search results here */}
				<Search/>

				{/* Render saved articles here */}
				<Saved />


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