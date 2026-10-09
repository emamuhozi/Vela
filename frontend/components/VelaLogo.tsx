export default function VelaLogo() {
  return (
    <div className="flex items-center gap-3">
      <svg
        width="36"
        height="40"
        viewBox="0 0 40 44"
        aria-hidden="true"
      >
        <path d="M22 3 L6 30 H33 Z" fill="#24594F" />
        <path
          d="M5 34 H35 Q29 42 20 42 Q11 42 5 34"
          fill="#24594F"
        />
      </svg>

      <span className="text-2xl font-semibold tracking-tight text-[#102D2A]">
        Vela
      </span>
    </div>
  );
}