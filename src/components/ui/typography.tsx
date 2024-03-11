import { cn } from "../../lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}
export function H1({ children, className }: Props) {
  return (
    <h1
      className={cn(
        "text-4xl font-extrabold tracking-tight lg:text-5xl",
        className
      )}
    >
      {children}
    </h1>
  );
}

export function H2({ children, className }: Props) {
  return (
    <h2 className={cn("text-3xl font-semibold tracking-tight", className)}>
      {children}
    </h2>
  );
}

export function H3({ children, className }: Props) {
  return (
    <h3 className={cn("text-2xl font-semibold tracking-tight", className)}>
      {children}
    </h3>
  );
}

export function H4({ children, className }: Props) {
  return (
    <h4 className={cn("text-xl font-semibold tracking-tight", className)}>
      {children}
    </h4>
  );
}

export function Paragraph({ children, className }: Props) {
  return (
    <p className={cn("leading-7 text-slate-600", className)}>{children}</p>
  );
}
