import { DoctorLookup } from './../js/doctor-lookup.js';

function clear() {
  $('#results').empty();
}

$(document).ready(function () {
  $('.slider').slider();
  let doctors = new DoctorLookup();

  $(document).ajaxStart(function () {
    $('#load').css('display', 'block');
  });

  $(document).ajaxComplete(function () {
    $('#load').css('display', 'none');
  });

  $('#issue').submit(function (event) {
    event.preventDefault();
    clear();
    let issue = $('#issue-input').val();
    doctors.issue(issue);
  });

  $('#name').submit(function (event) {
    event.preventDefault();
    clear();
    let doctorName = $('#name-input').val();
    doctors.doctorName(doctorName);
  });
});
