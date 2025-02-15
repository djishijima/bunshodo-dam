import { PAGES } from '@/config/pages';
import { cn } from '@/lib/utils/cn';
import Link from '@/components/atoms/next/link';

export function LoginButton({
  className,
  iconClassName,
}: {
  className?: string;
  iconClassName?: string;
}) {
  return (
    <Link
      aria-label="Filekit Logo"
      href={PAGES.AUTH.LOGIN}
      className={cn(
        'flex items-center text-base font-medium text-white duration-200 hover:text-white/80 gap-2',
        className
      )}
    >
      <LockIcon className={cn('w-6 h-6', iconClassName)} />
      Login
    </Link>
  );
}

function LockIcon(props: React.SVGAttributes<{}>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        opacity="0.2"
        d="M19.5 8.25H4.5C4.30109 8.25 4.11032 8.32902 3.96967 8.46967C3.82902 8.61032 3.75 8.80109 3.75 9V19.5C3.75 19.6989 3.82902 19.8897 3.96967 20.0303C4.11032 20.171 4.30109 20.25 4.5 20.25H19.5C19.6989 20.25 19.8897 20.171 20.0303 20.0303C20.171 19.8897 20.25 19.6989 20.25 19.5V9C20.25 8.80109 20.171 8.61032 20.0303 8.46967C19.8897 8.32902 19.6989 8.25 19.5 8.25ZM12 15C11.6292 15 11.2666 14.89 10.9583 14.684C10.65 14.478 10.4096 14.1851 10.2677 13.8425C10.1258 13.4999 10.0887 13.1229 10.161 12.7592C10.2334 12.3955 10.412 12.0614 10.6742 11.7992C10.9364 11.537 11.2705 11.3584 11.6342 11.286C11.9979 11.2137 12.3749 11.2508 12.7175 11.3927C13.0601 11.5346 13.353 11.775 13.559 12.0833C13.765 12.3916 13.875 12.7542 13.875 13.125C13.875 13.6223 13.6775 14.0992 13.3258 14.4508C12.9742 14.8025 12.4973 15 12 15Z"
        fill="currentColor"
      />
      <path
        d="M19.5 7.5H16.5V5.25C16.5 4.05653 16.0259 2.91193 15.182 2.06802C14.3381 1.22411 13.1935 0.75 12 0.75C10.8065 0.75 9.66193 1.22411 8.81802 2.06802C7.97411 2.91193 7.5 4.05653 7.5 5.25V7.5H4.5C4.10218 7.5 3.72064 7.65804 3.43934 7.93934C3.15804 8.22064 3 8.60218 3 9V19.5C3 19.8978 3.15804 20.2794 3.43934 20.5607C3.72064 20.842 4.10218 21 4.5 21H19.5C19.8978 21 20.2794 20.842 20.5607 20.5607C20.842 20.2794 21 19.8978 21 19.5V9C21 8.60218 20.842 8.22064 20.5607 7.93934C20.2794 7.65804 19.8978 7.5 19.5 7.5ZM9 5.25C9 4.45435 9.31607 3.69129 9.87868 3.12868C10.4413 2.56607 11.2044 2.25 12 2.25C12.7956 2.25 13.5587 2.56607 14.1213 3.12868C14.6839 3.69129 15 4.45435 15 5.25V7.5H9V5.25ZM19.5 19.5H4.5V9H19.5V19.5ZM12 10.5C11.3696 10.5002 10.7604 10.7273 10.2836 11.1397C9.80684 11.552 9.4944 12.1222 9.40339 12.746C9.31238 13.3698 9.44887 14.0055 9.78793 14.5369C10.127 15.0683 10.646 15.46 11.25 15.6403V17.25C11.25 17.4489 11.329 17.6397 11.4697 17.7803C11.6103 17.921 11.8011 18 12 18C12.1989 18 12.3897 17.921 12.5303 17.7803C12.671 17.6397 12.75 17.4489 12.75 17.25V15.6403C13.354 15.46 13.873 15.0683 14.2121 14.5369C14.5511 14.0055 14.6876 13.3698 14.5966 12.746C14.5056 12.1222 14.1932 11.552 13.7164 11.1397C13.2396 10.7273 12.6304 10.5002 12 10.5ZM12 14.25C11.7775 14.25 11.56 14.184 11.375 14.0604C11.19 13.9368 11.0458 13.7611 10.9606 13.5555C10.8755 13.35 10.8532 13.1238 10.8966 12.9055C10.94 12.6873 11.0472 12.4868 11.2045 12.3295C11.3618 12.1722 11.5623 12.065 11.7805 12.0216C11.9988 11.9782 12.225 12.0005 12.4305 12.0856C12.6361 12.1708 12.8118 12.315 12.9354 12.5C13.059 12.685 13.125 12.9025 13.125 13.125C13.125 13.4234 13.0065 13.7095 12.7955 13.9205C12.5845 14.1315 12.2984 14.25 12 14.25Z"
        fill="currentColor"
      />
    </svg>
  );
}
