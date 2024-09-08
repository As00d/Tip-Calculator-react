export default function Service({ text, percentage, setPercentage }) {
  return (
    <>
      <h2>{text}</h2>
      <select
        value={percentage}
        onChange={(e) => setPercentage(e.target.value)}
      >
        <option value="0">Dissatisfied (0%) </option>
        <option value="5">It was Ok (5%) </option>
        <option value="10">It was good (10%) </option>
        <option value="20">Absolutely Amazing! (20%) </option>
      </select>
    </>
  );
}
