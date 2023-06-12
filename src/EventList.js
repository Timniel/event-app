export function EventList({
  eventData,
  onDeleteEvent,
  onEditEvent,
  onSortByDate,
  onHandleClear,
}) {
  return (
    <div>
      {eventData.length > 0 && (
        <>
          <h1 className="">
            Upcoming Event(s)
            <button
              className="btn btn-success"
              style={{ margin: 10 }}
              onClick={(e) => onSortByDate()}
            >
              sort by date
            </button>
            <button onClick={onHandleClear} className="btn btn-danger">
              Clear
            </button>
          </h1>
        </>
      )}
      {eventData.map((event, index) => (
        <div key={index} className="border-top pt-1 mt-1">
          <h3 className="my-2">{event.name}</h3>
          <img
            src={event.image}
            width="100"
            height="100"
            className="rounded my-2"
            alt={event.name}
          />

          <p>{event.description}</p>

          <p>
            <strong>Date:</strong> {event.date}
            <button
              onClick={(e) => onEditEvent(index)}
              style={{ margin: 10 }}
              className="btn btn-info btn-sm "
            >
              <i className="fa fa-pencil"></i>
            </button>
            <button
              onClick={(e) => onDeleteEvent(index)}
              className="btn btn-danger btn-sm"
            >
              <i className="fa fa-trash"></i>
            </button>
          </p>
        </div>
      ))}
    </div>
  );
}
