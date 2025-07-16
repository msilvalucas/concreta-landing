type Props = {
  step: number
}

export const ProgressStepper = ({ step }: Props) => {
  return (
    <div className="flex justify-center gap-2 text-[#0E1022] text-lg font-medium mb-6">
      {[0, 1, 2].map((s) => (
        <div key={s} className="flex items-center">
          <span
            className={`w-6 h-6 rounded-full flex items-center justify-center border
              ${step === s ? 'bg-[#0E1022] text-white' : 'border-[#0E1022] text-[#0E1022]'}`}
          >
            {s + 1}
          </span>
          {s < 2 && <span className="border-t border-[#0E1022] w-6 mt-3" />}
        </div>
      ))}
    </div>
  )
}
