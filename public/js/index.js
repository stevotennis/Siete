//var arr = new Array();

var DelphiDemo = DelphiDemo || (function() {
  var self = {};
  var distQ;
  var arr = new Array();
  var tmp = {charge:"", freq:0};
  console.log(tmp.charge);
  console.log(tmp.freq);
  /** 
   * Send an ajax request to the server to retrieve delphi db data.
   */ 
  self.getDelphiData = function() {
    $.getJSON("/delphidata", function(data) {
      var rows = $.map(data, function (item, i) {
        //console.log(item.agency);
        //arr.push(item.charge_description);
        return "<tr><td>" + item.agency + "</td><td>" + item.charge_description + "</td><td>" + item.activity_date + "</td><td>" + item.block_address + "</td><td>" + item.zip + "</td><td>" + item.community + "</td></tr>";
      }).join("");
      //console.log(rows);
      
      //console.log(arr);
      $("#delphi-table").append(rows);
    });


  };

  /** 
   * initialize 
   */
  self.init = function() {
    //self.getDelphiData();
  };

  self.getQ = function(){
    console.log("Getting new data from here for D3");
    $.get("/delphidata", function(data) {
      //if(!verifyData(data, zip)) return;
      //console.log("## In getNewData: " + data);
      var rows = $.map(data, function (item, i) {
        //arr.push(item.charge_description);
        tmp.charge = item.charge_description;
        tmp.freq = 0;
        //arr.push(item.charge_description);
        arr.push(tmp);
        //console.log(arr[0]);
        //console.log(arr.length);
        return "<tr><td>" + item.agency + "</td><td>" + item.charge_description + "</td><td>" + item.activity_date + "</td><td>" + item.block_address + "</td><td>" + item.zip + "</td><td>" + item.community + "</td></tr>";
      }).join("");
      //$("#delphi-table").append(rows);
      //console.log(arr);
      }
    );
    return arr;
  };

  // Use user input to render new stuff
  self.getNewData = function(zip){
    console.log("#### In getNewData: " + zip);
    console.log("Getting data");
    //var par = getElementById(delphi-table);
    //par.removeChild(par);
    $.get("/delphidata", zip && {zipcode: zip}, function(data) {
      //if(!verifyData(data, zip)) return;
      //console.log("## In getNewData: " + data);
      var rows = $.map(data, function (item, i) {
        //tmp.charge = item.charge_description;
        //tmp.freq = 0;
        arr.push(item.charge_description);
        return "<tr><td>" + item.agency + "</td><td>" + item.charge_description + "</td><td>" + item.activity_date + "</td><td>" + item.block_address + "</td><td>" + item.zip + "</td><td>" + item.community + "</td></tr>";
      }).join("");
      $("#delphi-table").append(rows);
      }
    );
  };

  self.printQ = function(){
    for(var i = 0; i < arr.length; i++){
        //console.log("The element @ index (" + i + ") is " + arr[i].charge + "with " + arr[i].freq + " happenings.\n");
        console.log("The element @ index (" + i + ") is " + arr[i] + ".\n");
    }
  }

  self.getQ = function(){
    return arr;
  }

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
