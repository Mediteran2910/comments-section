export default function EditIcon({ handleEdit }) {
  return (
    <div className="edit-icon" onClick={handleEdit}>
      <img src="/images/icon-edit.svg" alt="" />
    </div>
  );
}
