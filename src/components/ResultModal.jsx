import { forwardRef,useImperativeHandle,useRef } from "react";

const ResultModal = forwardRef(function ResultModal({ result, targetTime }, ref) {
  const dialog=useRef()
  useImperativeHandle(ref,()=>{
    return{
      open(){
        dialog.current.showModal()
      }
    }
  })
  return (
    <dialog ref={dialog} className="result-modal">
      <h2>{result}</h2>
      <p>
        Target time was <strong>{targetTime} seconds</strong>
      </p>
      <p>
        you stop the time with<strong>X seconds left</strong>
      </p>
      <form action="" method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
})

export default ResultModal
