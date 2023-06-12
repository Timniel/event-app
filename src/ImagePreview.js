export function ImagePreview({ image, onRemove }) {
  return (
    <>
      <img
        src={image}
        alt="Uploaded preview"
        width="50"
        height="50"
        className="mr-2"
      />
      <button className="btn btn-danger btn-sm" onClick={onRemove}>
        Remove
      </button>
    </>
  );
}
