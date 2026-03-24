export default function FlowDiagram() {
  const steps = [
    { label: 'Research', color: '#e0e7ff', textColor: '#4338ca' },
    { label: 'Insights', color: '#ddd6fe', textColor: '#5b21b6' },
    { label: 'PRD', color: '#c7d2fe', textColor: '#3730a3' },
    { label: 'Tickets', color: '#a5b4fc', textColor: '#312e81' },
    { label: 'Track', color: '#818cf8', textColor: '#ffffff' },
  ];

  return (
    <div className="w-full overflow-x-auto py-4">
      <div className="flex items-center justify-center gap-0 min-w-[480px]">
        {steps.map((step, i) => (
          <div key={step.label} className="flex items-center">
            <div
              className="flex flex-col items-center justify-center rounded-xl px-6 py-4 min-w-[90px] text-center shadow-sm"
              style={{ backgroundColor: step.color }}
            >
              <span
                className="text-[13px] font-semibold uppercase tracking-wide"
                style={{ color: step.textColor }}
              >
                {step.label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <svg
                width="28"
                height="16"
                viewBox="0 0 28 16"
                fill="none"
                className="flex-shrink-0"
              >
                <path
                  d="M0 8 H20 M16 4 L24 8 L16 12"
                  stroke="#a5b4fc"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
