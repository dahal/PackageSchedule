Doorman.Schedule.Controller = function(model, views) {
  this.model = model
  this.views = views

  this.initialize = function() {
    this.getSchedule()
    // this.activateDatePicker()
    // this.views.Editable()
  }

  this.getSchedule = function() {
    var schedule = this.model.getCustomerSchedule()

    if (schedule.status == 200) {
      if (schedule.user != undefined && schedule.delivery_schedule != undefined) {
        this.views.renderUserDetails(schedule.user)
        this.views.renderScheduleDetails(schedule.delivery_schedule)
        this.activateRescheduleButton()
      } else if (schedule.user != undefined && schedule.delivery_schedule == undefined) {
        this.views.renderUserDetails(schedule.user)
        this.views.renderScheduleForm()
      }
    } else {
      this.views.renderAllForms()
    }
  }

  this.activateRescheduleButton = function() {
    $(".btn-reschedule").click(function() {
      this.views.hideCalander()
      this.views.renderScheduleForm()
    }.bind(this))
  }

}