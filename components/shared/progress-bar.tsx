interface ProgressBarProps {
  value: number;
  max?: number;
  color?: string;
  label?: string;
}

export function ProgressBar({ value, max = 100, color = 'bg-[#6CABDD]', label }: ProgressBarProps) {
  const percentage = (value / max) * 100;

  return (
    <div className="space-y-2">
      {label && (
        <div className="flex items-center justify-between">
          <span className="text-sm text-slate-600">{label}</span>
          <span className="text-sm font-semibold text-[#1C2C5B]">{percentage}%</span>
        </div>
      )}
      <div className="h-2 rounded-full bg-[#D8E8F8]">
        <div
          className={`h-2 rounded-full ${color} transition-all`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
