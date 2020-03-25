function getDogImage(numOfDogs, breedString) {
  fetch(`https://dog.ceo/api/breed/${breedString}/images/random/${numOfDogs}`)
    .then(response => response.json())
    .then(responseJson =>
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. 404.'));
}

function displayResults(responseJson) {
  console.log(responseJson);
  const tempArr = [];
  responseJson.message.forEach(event => {
    tempArr.push(`<img src="${event}" class="results-img">`);
  });
  const joinArr = tempArr.join('');

  $('.results').html(`<h2>Look at this dog(s)!</h2>
  ${joinArr}`);

  //display the results section
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    const numOfDogs = $(event.currentTarget).find('.user-number').val();
    const breedString = $(event.currentTarget).find('.dog-breed').val();
    getDogImage(numOfDogs, breedString);
  });
}

$(function () {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});