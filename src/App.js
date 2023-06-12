import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "./Form";
import { EventList } from "./EventList";

export default function App() {
  const [eventData, setEventData] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  function handleData(data) {
    setEventData((event) => [data, ...event]);
    console.log(eventData);
  }
  function handleClear() {
    setEventData([]);
  }

  function deleteEvent(indexToDelete) {
    setEventData(eventData.filter((event, index) => index !== indexToDelete));
  }

  function sortByDate() {
    setEventData(
      [...eventData].sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
      )
    );
  }

  function editEvent(indexToEdit) {
    eventData.map((event, index) => {
      if (index === indexToEdit) {
        setName(event.name);
        setDate(event.date);
        setDescription(event.description);
        setImage(event.image);
      }
    });
    setEventData(eventData.filter((event, index) => index !== indexToEdit));
  }

  return (
    <div className="container mt-4">
      <h1 className="mb-4"> My Event Lister</h1>
      <div className="row">
        <div className="col-md-6">
          <Form
            onHandleData={handleData}
            name={name}
            setName={setName}
            description={description}
            setDescription={setDescription}
            image={image}
            setImage={setImage}
            date={date}
            setDate={setDate}
          />
        </div>
        <div className="col-md-6">
          <EventList
            eventData={eventData}
            onDeleteEvent={deleteEvent}
            onEditEvent={editEvent}
            onSortByDate={sortByDate}
            onHandleClear={handleClear}
          />
        </div>
      </div>
    </div>
  );
}
