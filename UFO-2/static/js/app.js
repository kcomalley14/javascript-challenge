// from data.js
var tableData = data;

// Variables or objects
let tableBody = d3.select('tbody');
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"];
let inputFilterDate = d3.select('#datetime');
let inputFilterCity = d3.select('#city');
let inputFilterState = d3.select('#state');
let inputFilterCountry = d3.select('#country');
let inputFilterShape = d3.select('#shape');
const button = d3.select('#filter-btn');

// Adding data to html as table
let addData = (createTable) => {
  createTable.forEach(ufo => {
      var row = tableBody.append("tr");
      columns.forEach(column => row.append("td").text(ufo[column]))
  });
}

addData(tableData);

button.on("click", function() {
    d3.event.preventDefault();

    tableBody.html("");

    let date = inputFilterDate.property("value");
    let city = inputFilterCity.property("value");
    let state = inputFilterState.property("value");
    let country = inputFilterCountry.property("value");
    let shape = inputFilterShape.property("value");

    var dataFiltered = tableData.filter(ufo => ufo.datetime === date ||
                                        ufo.city === city ||
                                        ufo.state === state ||
                                        ufo.country === country ||
                                        ufo.shape === shape);
    addData(dataFiltered);
    
    let response = {
        dataFiltered
    }
    if (response.dataFiltered.length !== 0) {
        addData(dataFiltered);
    }
    else {
        tableBody.append("tr").text("No sightings found for this criteria");
    }

});
