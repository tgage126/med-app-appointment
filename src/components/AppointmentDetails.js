import moment from "moment";
import { Title } from "../styles/AppointmentDetailsStyles";
import { useDispatch } from "react-redux";
import { deleteAppointment } from "../redux/appointment/appointmentActions";

const AppointmentDetails = ({ selectedEvent }) => {
  // Use useDispatch hook to dispatch actions
  const dispatch = useDispatch();

  const startDateTime = selectedEvent.start;
  const endDateTime = selectedEvent.end;
  const formattedStartDate = moment(startDateTime).utc().format("DD MMMM YYYY");
  const formattedStartTime = moment(startDateTime).local().format("hh:mm a");
  const formattedEndTime = moment(endDateTime).local().format("hh:mm a");

  return (
    <div>
      {selectedEvent ? (
        <div>
          <Title>Appointment for {selectedEvent.patient}</Title>
          <div>Practioner: {selectedEvent.practioner}</div>
          <div>Reason for Appointment: {selectedEvent.reason}</div>
          <div>Date: {formattedStartDate}</div>
          <div>Start Time: {formattedStartTime}</div>
          <div>End Time: {formattedEndTime}</div>
          <button onClick={() => dispatch(deleteAppointment(selectedEvent.id))}>
            Delete Appointment
          </button>
        </div>
      ) : (
        <div>Error Getting Data</div>
      )}
    </div>
  );
};

export default AppointmentDetails;


