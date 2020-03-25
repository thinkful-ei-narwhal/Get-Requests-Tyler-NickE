function getDogImage(numOfDogs) {
  fetch(`https://dog.ceo/api/breeds/image/random/${numOfDogs}`)
    .then(response => response.json())
    .then(responseJson =>
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson);
  const tempArr = [];
  responseJson.message.forEach(event => {
    tempArr.push(`<img src="${event}" class="results-img">`);
  });
  const joinArr = tempArr.join('');
  //replace the existing image with the new one
  $('.results-img').replaceWith(joinArr);

  //display the results section
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    const numOfDogs = $(event.currentTarget).find('.user-number').val();
    console.log(`TESTING ${numOfDogs}`);
    getDogImage(numOfDogs);
  });
}

$(function () {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});