var apiKey = require('./../.env').apiKey;

export class DoctorLookup {
  issue(issue) {
    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${issue}&location=47.6062, -122.3321,100&skip=0&limit=100&user_key=${apiKey}`)
    .then(function (response) {
      let doctors = response.data;
      if (typeof doctors[0] !== 'undefined') {
        doctors.forEach(function (doctor) {
          $('#results').append(
            `<li>
                <div class=col m4'>
                  <div class='card'>
                    <div class='card-image'>
                      <img src=${doctor.profile.image_url}>
                      <span class='card-title'>${doctor.profile.first_name} ${doctor.profile.last_name}</span>
                    </div>
                    <div class='card-content'>
                      <p>${doctor.practices[0].visit_address.street}</p> <p>${doctor.practices[0].visit_address.city},${doctor.practices[0].visit_address.state} ${doctor.practices[0].visit_address.zip}</p>
                      <p>${doctor.practices[0].phones[0].number}</p>
                    </div>
                    <div class='card-action'>
                      <a href=${doctor.practices[0].website}>Doctors Website</a>
                    </div>
                  </div> 
                </div> 
            </li>`);
        });
      } else {
        $('#results').append(`<li>Sorry, we're currently unable to find doctors who can work with that issue.</li>`);
      }
    }).fail(function (error) {
      $('#results').append(`There was an error processing your request: ${error.responseText}. Please try again!`);
    });
  }

  doctorName(name) {
    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&location=47.6062, -122.3321,100&skip=0&limit=40&user_key=${apiKey}`)
    .then(function (response) {
      let doctors = response.data;
      if (typeof doctors[0] !== 'undefined') {
        doctors.forEach(function (doctor) {
          $('#results').append(
            `<li>
                <div class=col m4'>
                  <div class='card'>
                    <div class='card-image'>
                      <img src=${doctor.profile.image_url}>
                      <span class='card-title'>${doctor.profile.first_name} ${doctor.profile.last_name}</span>
                    </div>
                    <div class='card-content'>
                      <p>${doctor.practices[0].visit_address.street}</p> <p>${doctor.practices[0].visit_address.city},${doctor.practices[0].visit_address.state} ${doctor.practices[0].visit_address.zip}</p>
                      <p>${doctor.practices[0].phones[0].number}</p>
                    </div>
                    <div class='card-action'>
                      <a href=${doctor.practices[0].website}>Doctors Website</a>
                    </div>
                  </div> 
                </div> 
            </li>`);
        });
      } else {
        $('#results').append(`<li>Sorry, we're currently unable to find doctors with that name</li>`);
      }
    }).fail(function (error) {
      $('#results').append(`There was an error processing your request: ${error.responseText}. Please try again!`);
    });
  }
}
