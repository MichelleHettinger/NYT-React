// SETUP VARIABLES
// ==========================================================

// This variable will be pre-programmed with our authentication key (the one we received when we registered)
var authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

// These variables will hold the results we get from the user's inputs via HTML
var queryTerm = "";
var numResults = 0;
var startYear = 0;
var endYear = 0;

// Based on the queryTerm we will create a queryURL
var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=";

// Array to hold the various article info
var articleCounter = 0;

// FUNCTIONS
// ==========================================================



// This runQuery function expects two parameters (the number of articles to show and the final URL to download data from)
function runQuery(numResults, queryURL) {

    // The AJAX function uses the URL and Gets the JSON data associated with it. The data then gets stored in the variable called: "NYTData"
    $.ajax({
            url: queryURL,
            method: "GET"
        })
        .done(function(NYTData) {

            // Here we are logging the URL so we have access to it for troubleshooting
            console.log("------------------------------------")
            console.log("URL: " + queryURL);
            console.log("------------------------------------")

            // Here we then log the NYTData to console, where it will show up as an object.
            console.log(NYTData);
            console.log("------------------------------------")

            // Loop through and provide the correct number of articles
            for (var i = 0; i < numResults; i++) {

                // Add to the Article Counter (to make sure we show the right number)
                articleCounter++;

                // Create the HTML Well (Section) and Add the Article content for each
                articleContent = $("<div>");
                articleContent.addClass("well");
                $("#wellSection").append(articleContent);


                // Confirm that the specific JSON for the article isn't missing any details

                // If the article has a headline include the headline in the HTML
                if (NYTData.response.docs[i].headline.main != null) {

                    var headline = NYTData.response.docs[i].headline.main;

                    makeHeadline = $("<h2>");
                    makeHeadline.html(headline);
                    articleContent.append(makeHeadline);

                    console.log(headline)
                    // Log the first article's Headline to console.
                }

                // If the article has a Byline include the byline in the HTML
                if (NYTData.response.docs[i].byline.original != null) {

                    var byline = NYTData.response.docs[i].byline.original;

                    makeByline = $("<h3>");
                    makeByline.html(byline);
                    articleContent.append(makeByline);

                    console.log(byline);
                    // Log the first article's Author to console.
                }

                // Then display the remaining fields in the HTML (Section Name, Date, URL)
                var articleURL = NYTData.response.docs[i].web_url;
                var articleDate = NYTData.response.docs[i].pub_date;
                var sectionName = NYTData.response.docs[i].section_name;

                articleContent.append("<a href=" + articleURL + ">" + articleURL + "</a>");
                articleContent.append("<br>" + articleDate);
                articleContent.append("<br>" + sectionName);

                var saveButton = $("<button>");
                saveButton.addClass("btn-primary");
                saveButton.addClass("pull-right");
                saveButton.text("Save");               
                articleContent.append(saveButton);

                // Log the remaining fields to console as well
                console.log(articleURL + "\n" + articleDate + "\n" + sectionName);

            }
        });

}

// METHODS
// ==========================================================

// On Click button associated with the Search Button
$('#runSearch').on('click', function() {

    // Initially sets the articleCounter to 0
    articleCounter = 0;

    // Empties the region associated with the articles
    $("#wellSection").empty();

    // Search Term
    var searchTerm = $("#searchTerm").val().toString();
    console.log(searchTerm);
    queryTerm = queryURLBase + searchTerm;

    // Num Results
    numResults = 5;

    // Start Year
    startYear = $("#startYear").val().toString();

    // End Year
    endYear = $("#endYear").val().toString();

    console.log(startYear + "_" + endYear);

    // If the user provides a startYear -- the startYear will be included in the queryURL
    if (startYear != ""){
        queryTerm = queryTerm + "&begin_date=" + startYear + "0101";
    }

    // If the user provides a startYear -- the endYear will be included in the queryURL
    if (endYear != ""){
        queryTerm = queryTerm + "&end_date=" + endYear + "0101";
    }
    console.log(queryTerm);
    // Then we will pass the final queryURL and the number of results to include to the runQuery function
    runQuery(numResults, queryTerm);

    // This line allows us to take advantage of the HTML "submit" property. This way we can hit enter on the keyboard and it registers the search (in addition to clicks).
    return false;
});

// This button clears the top articles section
$('#clearAll').on('click', function() {
    articleCounter = 0;
    $("#wellSection").empty();
})
