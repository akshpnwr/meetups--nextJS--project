import NewMeetupForm from '../../components/meetups/NewMeetupForm';

export default function NewMeeupPage() {
  function addMeetupHandler(enteredMeetupData) {
    console.log(enteredMeetupData);
  }

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}
