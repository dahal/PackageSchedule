// Conditions ****************************************************
  // If we do not have customer on database
  // We obviously wont have schedule

// SCHEDULE = {
//   "status": 404,
//   "message": "The customer has not scheduled yet"
// }

// Conditions ****************************************************
  // If we have customer on database
  // If we do now have schedule on database

  // SCHEDULE = {
  //   "status": 200,
  //   "user": {
  //     "name": "John Doe",
  //     "email": "john@doe.com",
  //     "address": "123 Main Street",
  //     "city": "San Francisco",
  //     "state": "CA",
  //     "zipcode": "99999"
  //   },

  //   "packages": [
  //     {
  //       "description": "Red Pants",
  //       "sender_description": "Pants Inc.",
  //       "courier_tracking_number": "2482349329424",
  //       "notes": "Special Instructions go here",
  //       "doorman_tracking": true,
  //       "adult_signature": true,
  //       "alcohol": true
  //     }
  //   ]
  // }

// Conditions ****************************************************
  // If we have customer on database
  // If we have schedule on database

SCHEDULE = {
  "status": 200,
  "user": {
    "name": "John Doe",
    "email": "john@doe.com",
    "address": "123 Main Street",
    "city": "San Francisco",
    "state": "CA",
    "zipcode": "99999"
  },

  "packages": [
    {
      "description": "Red Pants",
      "sender_description": "Pants Inc.",
      "courier_tracking_number": "2482349329424",
      "notes": "Special Instructions go here",
      "doorman_tracking": true,
      "adult_signature": true,
      "alcohol": true
    }
  ],

  "delivery_schedule": {
    "delivery_time_start": 18,
    "delivery_time_end": 20,
    "deliver_on": "2014-11-13"
  }
}

