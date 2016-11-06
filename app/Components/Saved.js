// Include React 
var React = require('react');
var axios = require('axios');

// This is the main component. It includes the banner and button.
// Whenever you click the button it will communicate the click event to all other sub components.
var Saved = React.createClass({

	// Here we set a generic state associated with the saved articles
	getInitialState: function(){
		return {
			articles: ""
		}
	},

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

	deleteSaved: function(article){

		console.log("Deleting: " + article._id);

		var artID = article._id;

		axios.delete('/api/saved', {
			params: {
			    'id': article._id
			}
		})
		.then(function(data){

			axios.get('/api/saved').then(function(results){

				console.log("Fetched users articles");
				console.log(results.data);

				if (results.data){

					this.setState({
						articles: results.data
					});

				}
				else {
					this.setState({
						articles: null
					});
				}

			}.bind(this));

		}.bind(this))
	},

	// Here we render the function
	render: function(){

		if (!this.state.articles) {
			console.log("Not loaded yet");

			var ok = "ok"

			return (
				<h3>Save an article {ok}</h3>
			)
		}
		else {

			//Mapping the array of articles breaks the array into its individual objects.
			var articles = this.state.articles.map(function(article, i){

				return(
					<div className="well" key={i}>
						<li>
						    
						<h3>
						  	<span><em>{article.title}</em></span>
							<span className="btn-group pull-right" >
								<a href={article.url} target="_blank"><button className="btn btn-default ">View Article</button></a>
								<button className="btn btn-primary" onClick={this.deleteSaved.bind(this, article)}>Delete</button>
							</span>
						</h3>

						<p>Date Published: {article.date}</p>

						</li>
					</div>
				);	

			}.bind(this))
		}

		return (
			<div className="row" onLoad={this.componentDidMount}>
				<div className="col-sm-12">
					<br/>
					<div className="panel panel-primary">
						<div className="panel-heading">
							<h2 className="panel-title"><i className="fa fa-table"></i>   Saved Articles</h2>
						</div>
						<div className="panel-body" id="savedSection">

						<ul>{articles}</ul>

						</div>
					</div>
				</div>
			</div>	
		);
	}

});

// Export the component back for use in other files
module.exports = Saved;