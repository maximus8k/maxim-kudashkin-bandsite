
const link = "https://project-1-api.herokuapp.com/showdates";
const apiKey = "?api_key=3768a2ff-4cf2-4b98-9bb0-80100a1e26ee";

const tableBody = document.querySelector(".table__body");

showTable();
//Function to take data from API
function showTable() {
  const getShows = axios.get(link + apiKey);
  getShows.then((res) => {
    const showsArrey = res.data;
    tableBody.innerHTML = "";
    showsArrey.forEach((show) => {
      const tableRow = document.createElement("div");
      tableRow.classList.add("table__row");
      tableBody.appendChild(tableRow);

      const tableDate = document.createElement("span");
      tableDate.classList.add("table__date");
      tableDate.classList.add("field")
      tableDate.setAttribute("data-label", "date");

      tableDate.innerHTML = new Date(Number(show.date)).toDateString();
      tableRow.appendChild(tableDate);

      const tableVenue = document.createElement("span");
      tableVenue.setAttribute("data-label", "venue");
      tableVenue.classList.add("field")
      tableVenue.innerHTML = show.place;
      tableRow.appendChild(tableVenue);

      const tableCity = document.createElement("span");
      tableCity.setAttribute("data-label", "city");
      tableCity.classList.add("field")
      tableCity.innerHTML = show.location;
      tableRow.appendChild(tableCity);

      const btnField = document.createElement("span");
      btnField.classList.add("field")
      tableRow.appendChild(btnField);

      const tableBtn = document.createElement("button");
      tableBtn.classList.add("button");
      tableBtn.innerHTML = "BUY TICKETS";
      btnField.appendChild(tableBtn);
    });
  });
}

//Function to highlight row
tableBody.addEventListener("click", (event) => {
  const selectedRow = event.target.parentElement;
  const allRows = document.querySelectorAll(".table__row");
  allRows.forEach((row)=>{
    row.classList.remove("table__row--selected");
  })
  selectedRow.classList.add("table__row--selected");
});
