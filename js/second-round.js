 var el = document.querySelector("#clipchamp-button");
  // For more customization options refer to our Documentation.
  var options = {
      output: "azure",
        style: {
            url:   "https://api.clipchamp.com/static/button/themes/modern-dark.css"
       }
  };
  clipchamp(el, options);