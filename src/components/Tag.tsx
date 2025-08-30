import * as React from "react";
import { cn } from "@/lib/utils";

interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {}

const Tag = React.forwardRef<HTMLSpanElement, TagProps>(
  ({ className, children, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(
        "text-xs px-3 py-1 border border-border-color text-muted-foreground bg-transparent rounded-md transition-colors duration-200 hover:border-accent-purple hover:text-accent-purple",
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
);
Tag.displayName = "Tag";

export { Tag };
