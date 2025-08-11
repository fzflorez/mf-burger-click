const tipOptions = [
  {
    id: "tip-10",
    value: 0.1,
    label: "10%",
  },
  {
    id: "tip-20",
    value: 0.2,
    label: "20%",
  },
  {
    id: "tip-50",
    value: 0.5,
    label: "50%",
  },
];

type TipPrecentajeFormProps = {
  tip: number;
  setTip: React.Dispatch<React.SetStateAction<number>>;
};

export default function TipPrecentajeForm({
  tip,
  setTip,
}: TipPrecentajeFormProps) {
  return (
    <div className="space-y-2 border-b-2 border-gray-300 py-6">
      <h2 className="text-xl font-bold sm:text-2xl">Propina:</h2>

      <form className="flex gap-2">
        {tipOptions.map((option) => (
          <label
            key={option.id}
            htmlFor={option.id}
            className={`cursor-pointer rounded-lg px-8 py-2 text-sm sm:text-base font-semibold transition
            ${
              tip === option.value
                ? "bg-orange-500 text-white"
                : "bg-gray-200 text-gray-900"
            }`}
          >
            <input
              id={option.id}
              type="radio"
              name="tip"
              value={option.value}
              checked={tip === option.value}
              onChange={() => setTip(option.value)}
              className="sr-only"
            />
            <span>{option.label}</span>
          </label>
        ))}
      </form>
    </div>
  );
}
