// index.js
    module.exports = getGithubData
  
    function getGithubData (fy_next) {
		    var data1= [
            {
                "repo": "nicco88/personal-portfolio",
                "url": "https://api.github.com/repos/nicco88/personal-portfolio",
                "username": "ninabreznik",
                "time": "2018-04-01T17:50:29Z"
            },
            {
                  "repo": "freeCodeCamp/devdocs",
                  "url": "https://api.github.com/repos/freeCodeCamp/devdocs",
                  "username": "serapath",
                  "time": "2018-03-27T04:51:07Z"
            }]
            
		    fy_next(data1)
	  }
