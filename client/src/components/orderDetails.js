import './modal.css';

const Modal = ({ handleClose, show, children,test,date }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div class="flex justify-start" className={showHideClassName}>
        <section className="modal-main">
        <div class="px-10 mt-10 mb-6 text-yellow-500  font-bold font-mono text-xl   shadow-2xl ">
        ORDER DETAILS
        </div>
        <div class="">
            <div class="text-xl font-bold">Order Id:   </div>

        </div>

        <div class="text-xl font-bold"> {date}  </div>



        <button type="button" onClick={handleClose}>
          Close
        </button>
      </section>


    </div>
  );
};
export default Modal; 