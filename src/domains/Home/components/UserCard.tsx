import { ReactNode } from 'react';
import { Card, Text } from '@/shared/ui';

interface UserCardProps {
  title: string;
  description?: string;
  content?: ReactNode;
  bottom?: ReactNode;
}

export default function UserCard({
  title,
  description,
  content,
  bottom,
}: UserCardProps) {
  return (
    <Card>
      <Card.Header>
        {title && <Text title={title} as="title" />}
        {description && <Text title={description} as="description" />}
      </Card.Header>
      <Card.Content>{content}</Card.Content>
      <Card.Bottom>{bottom}</Card.Bottom>
    </Card>
  );
}
