import { cn } from '@/utils';

interface ProfileImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  showTerminalFrame?: boolean;
}

export function ProfileImage({ 
  src, 
  alt, 
  className,
  containerClassName,
  showTerminalFrame = true 
}: ProfileImageProps) {
  const imageElement = (
    <img
      src={src}
      alt={alt}
      className={cn('w-full h-auto', className)}
    />
  );

  if (!showTerminalFrame) {
    return imageElement;
  }

  return (
    <div className={cn(
      'bg-[#061b3a] rounded-lg shadow-xl overflow-hidden max-w-md mx-auto',
      containerClassName
    )}>
      <div className="bg-[#0a2550] p-2 flex items-center">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
      </div>
      {imageElement}
    </div>
  );
}