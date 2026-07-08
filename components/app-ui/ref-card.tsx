import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import DrawerFromVaul from '@/components/app-ui/drawer';
import { ReactNode } from 'react';

interface RefCardProps {
  cardTitle: string;
  cardContent: string | ReactNode;
  drawerTrigger?: string;
  drawerTitle?: string;
  children?: ReactNode;
  className?: string;
}

const RefCard = ({
  cardTitle,
  cardContent,
  drawerTrigger = 'More Info',
  drawerTitle = 'Details',
  children,
  className = '',
}: RefCardProps) => {
  return (
    <Card
      className={`mx-auto p-4 w-full max-w-sm flex flex-col h-full ${className}`}
    >
      <CardHeader className="p-0! mb-3">
        <CardTitle className="m-0! font-bold">{cardTitle}</CardTitle>
      </CardHeader>
      <CardContent className="text-base p-0! text-justify flex-1">
        {cardContent}
      </CardContent>
      {children && (
        <CardFooter className="w-full p-0! mt-4">
          <DrawerFromVaul
            trigger={drawerTrigger}
            title={drawerTitle}
            aria-label={`${drawerTitle} for ${cardTitle}`}
          >
            {children}
          </DrawerFromVaul>
        </CardFooter>
      )}
    </Card>
  );
};

RefCard.displayName = 'RefCard';

export default RefCard;
