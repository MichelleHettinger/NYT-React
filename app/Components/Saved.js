// Include React 
var React = require('react');

// This is the main component. It includes the banner and button.
// Whenever you click the button it will communicate the click event to all other sub components.
var Saved = React.createClass({

	// Here we render the function
	render: function(){

		console.log("Rendering");

		if (!this.props.articles) {
			console.log("Not loaded yet");

			var ok = "ok"

			return (
				<h3>Save an article {ok}</h3>
			)
		}
		else {
			var articles = this.props.articles;
			var title;
			var url;
			var date;

			//Mapping the array of articles breaks the array into its individual objects.
			articles.map(function(article, i){

				console.log(article);

				//Then we get the values for every key in the object and turn it into an array of those values
				var rawValues = Object.values(article);
				console.log(rawValues);

				//Since we only want title, url and date
				title = rawValues[1];
				url = rawValues[2];
				date = rawValues[3];

				var artValues = [title, url, date];

				console.log(title);

				return(
					<div className="well">
						<li>
						    
						<h3>
						    <span><em>{article.title}</em></span>

						    <span className="btn-group pull-right">
						        <a href={article.url} target="_blank"><button className="btn btn-default">View Article</button></a>
						    </span> 
						</h3>

						<p>Date Published: {article.date}</p>

						</li>
					</div>
				);		
			}.bind(this))
		}
	}
});

// Export the component back for use in other files
module.exports = Saved;