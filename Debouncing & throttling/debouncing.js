let timeout = null;
document.getElementById("search").addEventListener("input", () => {
    clearTimeout(timeout);
    let query = document.getElementById("search").value;

    timeout = setTimeout(function() {
        searchMeal(query);
    }, 1000);
});

function searchMeal(query) {
    fetch(`https://themealdb.com/api/json/v1/1/search.php?s=${query}`)
    .then(response => response.json())
    .then(data => {
        displayMeals(data.meals);
    })
    .catch((error) => {
        console.log(error);
    })
}

function displayMeals(meals) {
    let list = document.getElementById("recipeList");
    if (meals) {
        list.innerHTML = '';
        meals.forEach(recipe => {
            list.innerHTML += `
                <div>
                    <h3>${recipe.strMeal}</h3>
                    <img src="${recipe.strMealThumb}" alt="logo" width="200px">
                </div>`;
        });
    } else {
        list.innerHTML = "<p>No meals found</p>";
    }
}
