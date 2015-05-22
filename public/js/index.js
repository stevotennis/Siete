var DelphiDemo = DelphiDemo || (function() {
  var self = {};
  var chargeArray = new Array();
  /** 
   * Send an ajax request to the server to retrieve delphi db data.
   */ 
  self.getDelphiData = function() {
    $.getJSON("/delphidata", function(data) {
      var rows = $.map(data, function (item, i) {
      
      	chargeArray.push(item.charge_description);
      	
        return "<tr><td>" + item.agency + "</td><td>" + item.charge_description + "</td><td>" + item.activity_date + "</td><td>" + item.block_address + "</td><td>" + item.zip + "</td><td>" + item.community + "</td></tr>";
      }).join("");
      
      console.log(chargeArray);


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
