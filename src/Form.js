import { useState } from "react";
import { ImagePreview } from "./ImagePreview";

export function Form({
  onHandleData,
  name,
  setName,
  description,
  setDescription,
  image,
  setImage,
  date,
  setDate,
}) {
  const [imageKey, setImageKey] = useState(0);

  // Set default value for the date input using a new Date object and toISOString() method
  function handlePost(e) {
    e.preventDefault();

    if (!name || !description) return;

    onHandleData({ name, description, date, image });
    setName("");
    setDescription("");
    setDate(new Date().toISOString().slice(0, 10));
    setImage("");
    setImageKey((prevKey) => prevKey + 1);
  }
  function handleImageUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  }
  function removeImage() {
    setImage("");
    setImageKey((prevKey) => prevKey + 1);
  }
  return (
    <form onSubmit={handlePost}>
      <div className="form-group my-3">
        <label>Event Name:</label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group my-3">
        <label>Description:</label>
        <textarea
          type="text"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="form-group my-3">
        <label className="">Image:</label>
        <br />
        <input
          type="file"
          className="form-control-file"
          accept="image/*"
          key={imageKey}
          onChange={(e) => handleImageUpload(e)}
        />
        {image && <ImagePreview image={image} onRemove={() => removeImage()} />}
      </div>
      <div className="form-group my-3">
        <label>Event Date:</label>
        <input
          type="date"
          className="form-control"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <button className="btn btn-primary mt-1 mb-3">Post</button>
    </form>
  );
}
