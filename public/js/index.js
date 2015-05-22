var DelphiDemo = DelphiDemo || (function() {
  var self = {};
  var chargeArray = new Array();
  var distinct;//use for bar chart x-axis
  
  /** 
   * Send an ajax request to the server to retrieve delphi db data.
   */ 
  self.getDelphiData = function() {
    $.getJSON("/delphidata", function(data) {
      var rows = $.map(data, function (item, i) {
      	
      	//Array of ALL charge descriptions for peticular zip code from app.js query
      	chargeArray.push(item.charge_description);
      
      	//Distinct array of charge descriptions
      	//Remove duplicate charge descriptions 
      	distinct = chargeArray.filter(function(elem, pos) {
		  	return chargeArray.indexOf(elem) == pos;
		});
      	
      	
      	
        return "<tr><td>" + item.agency + "</td><td>" + item.charge_description + "</td><td>" + item.activity_date + "</td><td>" + item.block_address + "</td><td>" + item.zip + "</td><td>" + item.community + "</td></tr>";
      }).join("");
      
      console.log("chargeArray " + chargeArray);
      console.log("chargeArray LENGTH " + chargeArray.length);
      
      console.log("distinct " + distinct);
      console.log("distinct LENGTH " + distinct.length);



      $("#delphi-table").append(rows);
    });
  };

  /** 
   * initialize 
   */
  self.init = function() {
    self.getDelphiData();
  };
  

  return self;
})();

$(document).ready(function() {
  DelphiDemo.init();
});
