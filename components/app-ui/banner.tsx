import React, { FC } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface BannerProps {
  children: React.ReactNode;
  title?: string;
  emoji?: string;
  type?: 'default' | 'info' | 'warning' | 'error' | 'success';
  dir?: 'ltr' | 'rtl';
  lang?: 'en' | 'ar' | 'ur';
  className?: string;
}

const typeConfig = {
  default: {
    bg: 'border-fd-border bg-fd-secondary',
    text: 'text-fd-secondary-foreground',
    title: 'text-fd-secondary-foreground',
  },
  info: {
    bg: 'border-blue-200 bg-blue-50 dark:border-blue-900 dark:bg-blue-950/50',
    text: 'text-blue-900 dark:text-blue-100',
    title: 'text-blue-950 dark:text-blue-50',
  },
  warning: {
    bg: 'border-amber-200 bg-amber-50 dark:border-amber-900 dark:bg-amber-950/50',
    text: 'text-amber-950 dark:text-amber-100',
    title: 'text-amber-950 dark:text-amber-50',
  },
  error: {
    bg: 'border-red-200 bg-red-50 dark:border-red-900 dark:bg-red-950/50',
    text: 'text-red-950 dark:text-red-100',
    title: 'text-red-950 dark:text-red-50',
  },
  success: {
    bg: 'border-emerald-200 bg-emerald-50 dark:border-emerald-900 dark:bg-emerald-950/50',
    text: 'text-emerald-950 dark:text-emerald-100',
    title: 'text-emerald-950 dark:text-emerald-50',
  },
} as const;

const langToDir = {
  en: 'ltr' as const,
  ar: 'rtl' as const,
  ur: 'rtl' as const,
};

const langToFont = {
  en: 'font-sans',
  ar: 'font-arabic',
  ur: 'font-urdu',
};

const langToTitleSize = {
  en: 'text-xl',
  ar: 'text-3xl',
  ur: 'text-3xl',
};

const langToContentSize = {
  en: 'text-base',
  ar: 'text-2xl',
  ur: 'text-2xl leading-relaxed',
};

const Banner: FC<BannerProps> = ({
  title,
  emoji,
  children,
  type = 'default',
  dir = 'ltr',
  lang = 'en',
  className = '',
}) => {
  const config = typeConfig[type];
  const finalLang = lang || 'en';
  const finalDir = dir || langToDir[finalLang];
  const fontClass = langToFont[finalLang];
  const titleSize = langToTitleSize[finalLang];
  const contentSize = langToContentSize[finalLang];

  return (
    <Card
      className={`banner ${config.bg} ${fontClass} w-full gap-2 px-4 py-2 ${className}`}
      role="region"
      aria-label={title || `${type} notice`}
      dir={finalDir}
      lang={finalLang}
    >
      {title && (
        <CardHeader className="p-0 pb-2">
          <CardTitle
            className={`m-0 mt-2 flex items-center ${titleSize} ${config.title}`}
          >
            {emoji && <span aria-hidden="true">{emoji}&nbsp;&nbsp;&nbsp;</span>}
            {title}
          </CardTitle>
        </CardHeader>
      )}
      <CardContent className={`p-0 pb-2 m-0 ${contentSize} ${config.text}`}>
        {children}
      </CardContent>
    </Card>
  );
};

Banner.displayName = 'Banner';

export default Banner;
