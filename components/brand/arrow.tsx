export function Arrow({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="28"
      height="12"
      viewBox="0 0 28 12"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M0 6h21.5M18 1.5 24.5 6 18 10.5"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
