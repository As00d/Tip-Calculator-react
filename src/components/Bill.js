export default function Bill({ bill, onSetBill }) {
  return (
    <>
      <h2>How much was the bill ?</h2>
      <input
        type="text"
        value={bill}
        onChange={(e) => onSetBill(e.target.value)}
      />
    </>
  );
}
