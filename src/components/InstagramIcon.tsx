type InstagramIconProps = {
  className?: string;
};

const InstagramIcon = ({ className }: InstagramIconProps) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4.25" />
    <circle cx="17.4" cy="6.6" r="0.75" fill="currentColor" stroke="none" />
  </svg>
);

export default InstagramIcon;
