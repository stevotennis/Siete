console.log("In index.js");

var low;
var med;
var high;



var DelphiDemo = DelphiDemo || (function() {
  var self = {};
  var chargeArray = new Array();
  var distinct;//use for bar chart x-axis
  
  /** 
   * Send an ajax request to the server to retrieve delphi db data.
   */ 
  self.getDelphiData = function() {
    $.getJSON("/delphidata", function(data) {
    
    console.log("DATA " + data);
    console.log("DATA LENGTH " + data.length);
    
    
    
    
      var rows = $.map(data, function (item, i) {
      
      	
      	//Array of ALL charge descriptions for peticular zip code from app.js query
      	chargeArray.push(item.charge_description);
      
      	//Distinct array of charge descriptions
      	//Remove duplicate charge descriptions 
      	distinct = chargeArray.filter(function(elem, pos) {
		  	return chargeArray.indexOf(elem) == pos;
		});
		

      	
      	//dashboard('#dashboard',freqData); //does it everytime per row
      	
        return "<tr><td>" + item.agency + "</td><td>" + item.charge_description + "</td><td>" + item.activity_date + "</td><td>" + item.block_address + "</td><td>" + item.zip + "</td><td>" + item.community + "</td></tr>";
      }).join("");
      
      
      
      
      console.log("chargeArray " + chargeArray);
      console.log("chargeArray LENGTH " + chargeArray.length);
      
      console.log("distinct " + distinct);
      console.log("distinct LENGTH " + distinct.length);



      $("#delphi-table").append(rows);
      
      
      
      //////////////////////////////////////////////////////////////////////////
      
      
      
      
      
      
      //////////////////////////////////////////////////////////////////////////

    });
    
  };//close self.getDelphiData = function

  /** 
   * initialize 
   */
  self.init = function() {
    //self.getDelphiData();
  };
  
  self.getNewData = function(zip){
    console.log("#### In getNewData: " + zip);
    console.log("Getting data");
    $.get("/delphidata", zip && {zipcode: zip}, function(data) {
      //if(!verifyData(data, zip)) return;
      //console.log("## In getNewData: " + data);
      var rows = $.map(data, function (item, i) {
        //arr.push(item.charge_description);
        return "<tr><td>" + item.agency + "</td><td>" + item.charge_description + "</td><td>" + item.activity_date + "</td><td>" + item.block_address + "</td><td>" + item.zip + "</td><td>" + item.community + "</td></tr>";
      }).join("");
      $("#delphi-table").append(rows);
      }
    );
  };
  

  return self;
})();

$(document).ready(function() {
  DelphiDemo.init();

  // Event handler for zip code input box
  $('#custom-zip').submit(function(evt) {
    var value = $(evt.target).find('.target').val();
    if(!isNaN(parseFloat(value)) && isFinite(value)) {
      console.log(value);
      DelphiDemo.getNewData(value);
    }
    evt.preventDefault();
  });
});