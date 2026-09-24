function DeleteModal({ project, onConfirm, onCancel }) {
  if (!project) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="delete-modal">
        <div className="delete-modal-icon">
          !
        </div>

        <h2>Supprimer ce projet ?</h2>

        <p>
          Le projet <strong>{project.title}</strong> sera
          définitivement supprimé.
        </p>

        <p className="delete-warning">
          Cette action est irréversible.
        </p>

        <div className="delete-modal-actions">
          <button
            className="cancel-button"
            onClick={onCancel}
          >
            Annuler
          </button>

          <button
            className="delete-button"
            onClick={onConfirm}
          >
            Supprimer
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;