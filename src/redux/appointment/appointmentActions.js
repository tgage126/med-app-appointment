import {ADD_APPOINTMENT, SEARCH_APPOINTMENT, DELETE_APPOINTMENT} from "./appointmentTypes";

// Action creators list. All action creator functions are listed here.

// add_appointment action creator
// function returns an action object
export const add_appointment = (appointmentData) => dispatch => {
    dispatch({
        type: ADD_APPOINTMENT,
        payload: appointmentData,
    });
    return Promise.resolve();
}

// search appointment with ID
export const search_appointment = (id) => {
    return {
        type: SEARCH_APPOINTMENT,
        payload: id,
    }
}

export const deleteAppointment = (id) => {
  // Call an action to delete the appointment from the Redux store
  return dispatch => {
    dispatch({
      type: DELETE_APPOINTMENT,
      payload: id
    });

    // Delete the appointment from local storage
    if ("appointments" in localStorage) {
      let localStorageArray = JSON.parse(localStorage.getItem("appointments"));
      let updatedArray = localStorageArray.filter((appointment) => appointment.id !== id);
      localStorage.setItem("appointments", JSON.stringify(updatedArray));
    }

    // Refresh the display by calling the search_appointment action with the same ID
    dispatch(search_appointment(id));
  }
};
