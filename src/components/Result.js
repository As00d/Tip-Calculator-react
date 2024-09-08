export default function Result({ bill, percentage1, percentage2 }) {
  const averagePerc = (+percentage1 + +percentage2) / 2;
  const result = Number((bill * averagePerc) / 100) + Number(bill);
  console.log(result);
  return (
    bill && (
      <h2>
        You Pay ${result} (${bill} + ${averagePerc} tip)
      </h2>
    )
  );
}
