Doorman.Schedule.Views = function() {
  this.activateDatePicker = function() {
    $(".datepicker").pickadate( {
      min: new Date(),
      max: new Date(new Date().getTime()+(7*24*60*60*1000)),
      editable: true
    })
  }

  this.renderAllForms = function() {
    console.log('Rendering schedule form')
    var source = $("#schedule-form").html()
    var template = Handlebars.compile(source)
    $(".schedule").append(template)
    this.activateDatePicker()
  }

  this.renderScheduleDetails = function(schedule) {
    console.log('Rendering Schedule Details')
    var start_time = (schedule.delivery_time_start - 12).toString() + " PM"
    var end_time = (schedule.delivery_time_end - 12).toString() + " PM"
    var details = {
      date: schedule.deliver_on,
      time: start_time + " - "+ end_time
    }

    var source = $("#scheduled-date-time").html()
    var template = Handlebars.compile(source)
    var scheduleDetails = template(details)
    $(".schedule-form").append(scheduleDetails)
    this.Editable()
  }

  this.renderUserDetails = function(customer) {
    console.log('Rendering user Details')
    var details = {
      name: customer.name,
      email: customer.email,
      address: customer.address,
      city: customer.city,
      state: customer.state,
      zipcode: customer.zipcode
    }

    var source = $("#customer-details").html()
    var template = Handlebars.compile(source)
    var userDetails = template(details)
    $(".customer").append(userDetails)
    this.Editable()
    this.renderPackages()
  }

  this.renderScheduleForm = function() {
    console.log('Rendering schedule form')
    var source = $("#date-time-form").html()
    var template = Handlebars.compile(source)
    $(".schedule-form").append(template)
    this.activateDatePicker()
  }

  this.renderPackages = function() {
    var source = $("#package-template").html()
    var template = Handlebars.compile(source)
    $(".packages").append(template)
  }

  this.Editable = function() {
    $('#customer-name, #customer-email, #customer-address, #customer-city, #customer-state, #customer-zipcode').editable({
      type: 'text',
      pk: 1,
      url: '/post',
    });
  }

  this.hideCalander = function() {
    $(".schedule-calander").hide()
  }

}