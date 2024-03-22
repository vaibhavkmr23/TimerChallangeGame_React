export default function ResultModal({ result, targetTime }) {
  return (
    <dialog className="result-modal" open>
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
}
