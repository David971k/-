var form = document.querySelector('.form')
var validateBtn = form.querySelector('.validateBtn')
var userName = form.querySelector('.userName')
var userEmail = form.querySelector('.userEmail')
var message = form.querySelector('.custom-select')
var fields = form.querySelectorAll('.field')



var generateError = function (text) {
  var error = document.createElement('div')
  error.className = 'error'
  error.style.color = 'red'
  error.innerHTML = text
  return error
}

var removeValidation = function () {
  var errors = form.querySelectorAll('.error')

  for (var i = 0; i < errors.length; i++) {
    errors[i].remove()
  }
}

var checkFieldsPresence = function () {
  for (var i = 0; i < fields.length; i++) {
    if (!fields[i].value) {
      console.log('field is blank', fields[i])
      var error = generateError('Cannot be blank')
      form[i].parentElement.insertBefore(error, fields[i])
    }
  }
}



form.addEventListener('submit', function (event) {
  event.preventDefault()
  console.log(5);
  removeValidation()

  checkFieldsPresence()

})