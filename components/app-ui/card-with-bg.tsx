import type { FC, ReactNode } from 'react';

interface CardWithBgProps {
  title: string;
  href?: string;
  icon?: ReactNode;
  bg: string;
  className?: string;
  overlayOpacity?: number;
}

const CardWithBg: FC<CardWithBgProps> = ({
  title,
  href = '#',
  icon = '📖',
  bg,
  className = '',
  overlayOpacity = 40,
}) => {
  return (
    <a
      href={href}
      className={`group block w-full rounded-md transition-transform hover:scale-102 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fd-ring focus-visible:ring-offset-2 focus-visible:ring-offset-fd-background ${className}`}
      aria-label={`Navigate to ${title}`}
    >
      <div
        className="relative h-28 w-full overflow-hidden rounded-md bg-cover bg-center md:h-44"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div
          className="absolute inset-0 transition-opacity group-hover:opacity-50"
          style={{ backgroundColor: `rgba(0, 0, 0, ${overlayOpacity / 100})` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <h3 className="flex items-center justify-center rounded-md bg-black/75 px-2 py-1 text-center text-base font-semibold text-white transition-colors group-hover:bg-black/90 md:py-2 md:text-lg">
            {icon ? (
              <span className="mr-2 inline-block" aria-hidden="true">
                {icon}
              </span>
            ) : null}
            <span>{title}</span>
          </h3>
        </div>
      </div>
    </a>
  );
};

CardWithBg.displayName = 'CardWithBg';

export default CardWithBg;
