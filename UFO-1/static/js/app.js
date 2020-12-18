// from data.js
var tableData = data;

// Variables or objects
let tableBody = d3.select('tbody');
const columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"];
let inputFilter = d3.select('#datetime');
const button = d3.select('#filter-btn');

// Adding data to html as table
let addData = (createTable) => {
  createTable.forEach(ufo => {
      var row = tableBody.append("tr");
      columns.forEach(column => row.append("td").text(ufo[column])
      )
  });
}

addData(tableData);

// Filter by Date when button clicked

button.on("click", function() {
  d3.event.preventDefault();

  // make input a value
  let inputDate = inputFilter.property('value');
  let filterDatetime = tableData.filter(tableData => tableData.datetime === inputDate);

  tableBody.html("");

  let filterResponse = {
    filterDatetime
  }
  if (filterResponse.filterDatetime.length !== 0) {
    addData(filterDatetime);
  }
  else {
    tableBody.append("tr").text("No sightings on this date")
  }
});