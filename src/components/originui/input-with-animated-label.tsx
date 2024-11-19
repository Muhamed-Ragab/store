import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { useId } from 'react';

type Props = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'placeholder'
> & {
  label: string;
  error?: string;
};

export default function InputWithAnimatedLabel({
  id,
  className,
  label,
  error,
  ...props
}: Props) {
  const inputId = useId();

  return (
    <fieldset>
      <div className="group relative">
        <label
          htmlFor={id || inputId}
          className="origin-start absolute top-1/2 block -translate-y-1/2 cursor-text px-1 text-sm text-muted-foreground/70 transition-all group-focus-within:pointer-events-none group-focus-within:top-0 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium group-focus-within:text-foreground has-[+input:not(:placeholder-shown)]:pointer-events-none has-[+input:not(:placeholder-shown)]:top-0 has-[+input:not(:placeholder-shown)]:cursor-default has-[+input:not(:placeholder-shown)]:text-xs has-[+input:not(:placeholder-shown)]:font-medium has-[+input:not(:placeholder-shown)]:text-foreground"
        >
          <span
            className={cn('inline-flex bg-background px-2', {
              'text-destructive': error,
            })}
          >
            {label}
          </span>
        </label>
        <Input
          id={id || inputId}
          className={cn(className, {
            'border-destructive/80 text-destructive focus-visible:border-destructive/80 focus-visible:ring-destructive/30':
              error,
          })}
          {...props}
          placeholder=""
        />
      </div>
      {error && (
        <p
          className="mt-2 text-xs text-destructive"
          role="alert"
          aria-live="polite"
        >
          {error}
        </p>
      )}
    </fieldset>
  );
}
