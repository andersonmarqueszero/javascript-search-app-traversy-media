import { setSearchFocus } from "./searchBar.js";
import { buildSearchResults} from "./searchResults.js";
import { getSearchTerm } from "./dataFunctions.js";
import { retrieveSearchResults} from "./dataFunctions.js";

document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        initApp();
    }
});

const initApp = () => {
    // set the focus
    setSearchFocus();
    // TODO: 3 listeners clear text

    const form = document.getElementById("searchBar");
    form.addEventListener("submit", submitTheSearch);
};

// Procedural "workflow" function
const submitTheSearch = (event) => {
    event.preventDefault();
    // TODO: delete search results
    // process the search
    processTheSearch();
    // set the focus
    setSearchFocus();
};

// Procedure
const processTheSearch = async () => {
    // TODO: clear the stats line
    const searchTerm = getSearchTerm();
    if (searchTerm === "") return;
    const resultArray = await retrieveSearchResults(searchTerm);
    if (resultArray.length) buildSearchResults(resultArray);
    // TODO: set stats line
};