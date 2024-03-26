import { forwardRef,useImperativeHandle,useRef } from "react";

const ResultModal = forwardRef(function ResultModal({ remainingTime, targetTime, onReset }, ref) {
  const dialog=useRef()
  useImperativeHandle(ref,()=>{
    return{
      open(){
        dialog.current.showModal()
      }
    }
  })
  const userLost = remainingTime <= 0
  const formattedRemainingTime = (remainingTime/1000).toFixed(2)
  const score = Math.round((1 - remainingTime/(targetTime*1000))*100)
  
  return (
    <dialog ref={dialog} className="result-modal">
      {userLost && <h2>You Lost</h2>}
      {!userLost && <h2> Your Score {score}</h2>}
      <p>
        Target time was <strong>{targetTime} seconds</strong>
      </p>
      <p>
        you stop the time with <strong>{formattedRemainingTime} seconds left</strong>
      </p>
      <form action="" method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>
  );
})

export default ResultModal
