const tipOptions = [
  {
    id: 'tip-10',
    value: .10,
    label: '10%'
  },
  {
    id: 'tip-20',
    value: .20,
    label: '20%'
  },
  {
    id: 'tip-50',
    value: .50,
    label: '50%'
  },
]

type TipPrecentajeFormProps = {
  setTip: React.Dispatch<React.SetStateAction<number>>
}

export default function TipPrecentajeForm({setTip} : TipPrecentajeFormProps) {
  return (
    <div className=" space-y-2 px-2">
      <h2 className=' text-2xl font-bold md:text-3xl'>Propina:</h2>

      <form>
        {tipOptions.map( tip => (
          <div key={tip.id} className=" flex gap-2">
            <label htmlFor={tip.id}>{tip.label}</label>
            <input 
              type="radio" 
              id={tip.id}
              value={tip.value}
              name="tip"
              onChange={e => setTip(+e.target.value)}
            />
          </div>
        ))}
      </form>
    </div>
  )
}
