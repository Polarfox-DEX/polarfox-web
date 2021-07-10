import { ReactNode } from 'react';

interface WithBackGroundImageProps {
  imageUrl: string;
  children: ReactNode;
}

export function WithBackgroundImage({
  imageUrl,
  children,
}: WithBackGroundImageProps) {
  return (
    <div
      className="flex justify-center items-center"
      style={{
        height: '100vh',
        minHeight: '100vh',
        width: '100%',
        backgroundImage: `url('${imageUrl}')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {children}
    </div>
  );
}
