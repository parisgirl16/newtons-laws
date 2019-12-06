var law = {law: "\"Whenever one object exerts a force on a second object, the second object exerts an equal and opposite force on the first object.\""}
function divappend(law) {
  $('.law').append(`<p>${law.law}</p>`);
}
