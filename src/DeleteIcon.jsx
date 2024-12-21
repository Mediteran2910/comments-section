export default function DeleteIcon({ handleDelete }) {
  return (
    <div className="delete-wrapper" onClick={handleDelete}>
      <img src="/images/icon-delete.svg" alt="trash can icon for deleting" />
    </div>
  );
}
