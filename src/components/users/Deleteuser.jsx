"use client";

function Deleteuser({ deleteAction, userId }) {
  const modalId = `my_modal_${userId}`;
  const openmodal = () => document.getElementById(modalId).showModal();

  const handleDelete = async (e) => {
    const id = e.currentTarget.id;
    const result = await deleteAction(id);

    console.log(result);
  };

  return (
    <>
      <button onClick={openmodal} className=" text-red-500 font-medium">
        Delete
      </button>
      <dialog id={modalId} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Are you sure you want to delete this user</p>
          <div className="modal-action">
            <form className=" flex gap-4" method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-secondary">Close</button>
              <button
                id={userId}
                onClick={handleDelete}
                className="btn btn-error"
              >
                Delete
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default Deleteuser;
