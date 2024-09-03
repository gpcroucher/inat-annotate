const filtersForm = document.getElementById("filtersForm");

filtersForm.addEventListener("submit", handleFiltersForm);

async function handleFiltersForm(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const filters = Object.fromEntries(formData);
  console.log("Filters selected:", filters);

  const response = await fetch(
    `https://api.inaturalist.org/v2/places?q=${filters.place}&order_by=area&geo=false&per_page=1`
  );
  const responseJSON = await response.json();
  console.log("Response JSON:", responseJSON);

  const placeID = responseJSON.results[0].id;
  console.log(placeID);

  if (typeof placeID === "number") {
    console.log("placeID is a number");
    // use placeID in search query
  }
  // todo: a similar check for user
  // fetch autocomplete user name -> id
  // if typeof userID === "number" then use userID in search query

  // todo: also add a taxon filter and do above steps
}
