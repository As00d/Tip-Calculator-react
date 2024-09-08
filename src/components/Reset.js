export default function Reset({ onSetBill }) {
  return (
    <button
      style={{ display: "block", marginTop: "20px" }}
      onClick={() => onSetBill("")}
    >
      Reset
    </button>
  );
}
