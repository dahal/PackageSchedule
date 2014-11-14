$(document).ready(function() {
  var scheduleModel = new Doorman.Schedule.Model()
  var scheduleViews = new Doorman.Schedule.Views()
  var scheduleController = new Doorman.Schedule.Controller(scheduleModel, scheduleViews)
  scheduleController.initialize()
})