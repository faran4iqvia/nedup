import React from 'react';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import * as TabsComponents from 'fumadocs-ui/components/tabs';
import {
  CalloutContainer,
  CalloutTitle,
  CalloutDescription,
} from 'fumadocs-ui/components/callout';
import type { MDXComponents } from 'mdx/types';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardHeader as BaseCardHeader,
  CardTitle as BaseCardTitle,
  CardDescription,
  CardContent as BaseCardContent,
  CardFooter,
} from '@/components/ui/card';
import { Typography } from '@/components/ui/typography';
import { SansBase, SansMd, SansLg } from '@/components/ui/font-text';
import Banner from '@/components/app-ui/banner';
import RefCard from '@/components/app-ui/ref-card';
import DrawerFromVaul from '@/components/app-ui/drawer';
import CardWithBg from '@/components/app-ui/card-with-bg';
import PageActions from '@/components/app-ui/page-actions';
import GridContainer from '@/components/app-ui/grid-container';
import { Steps, Step } from './steps';
import type { HTMLAttributes } from 'react';

const MdxCardHeader = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <BaseCardHeader className={`p-0 mb-3 ${className ?? ''}`} {...props} />
);

const MdxCardTitle = ({
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) => (
  <BaseCardTitle className={`font-bold m-0! ${className ?? ''}`} {...props} />
);

const MdxCardContent = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <BaseCardContent
    className={`p-0! text-justify text-fd-muted-foreground ${className ?? ''}`}
    {...props}
  />
);

const MdxCallout = ({
  title,
  children,
  ...props
}: React.ComponentProps<typeof CalloutContainer> & { title?: string }) => (
  <CalloutContainer {...props} className={`text-base ${props.className ?? ''}`}>
    {title && <CalloutTitle>{title}</CalloutTitle>}
    <CalloutDescription>{children}</CalloutDescription>
  </CalloutContainer>
);

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    ...TabsComponents,

    Steps,
    Step,
    Callout: MdxCallout,
    // Shadcn components
    Button,
    ShadCnCard: Card,
    CardHeader: MdxCardHeader,
    CardTitle: MdxCardTitle,
    CardDescription,
    CardContent: MdxCardContent,
    CardFooter,
    Badge,
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
    // Typography components
    H1: Typography.h1,
    H2: Typography.h2,
    H3: Typography.h3,
    H4: Typography.h4,
    P: Typography.p,
    Blockquote: Typography.blockquote,
    UL: Typography.ul,
    OL: Typography.ol,
    LI: Typography.li,
    Code: Typography.code,
    Pre: Typography.pre,
    Small: Typography.small,
    Strong: Typography.strong,
    // Font Text components
    SansBase,
    SansMd,
    SansLg,
    // app-ui components
    Banner,
    RefCard,
    DrawerFromVaul,
    CardWithBg,
    PageActions,
    GridContainer,
    Image,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
