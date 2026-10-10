import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "lavender" | "yellow";

type Common = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

type ButtonProps = Common &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type LinkProps = Common &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "children" | "className"> & {
    href: string;
    external?: boolean;
  };

function classes(variant: Variant | undefined, className: string | undefined) {
  return ["btn", `btn--${variant ?? "primary"}`, className].filter(Boolean).join(" ");
}

function isLink(props: ButtonProps | LinkProps): props is LinkProps {
  return typeof props.href === "string";
}

export function Button(props: ButtonProps | LinkProps) {
  if (isLink(props)) {
    const { href, external, children, variant, className, ...rest } = props;
    if (external) {
      return (
        <a
          className={classes(variant, className)}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          {...rest}
        >
          {children}
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      );
    }
    return (
      <a className={classes(variant, className)} href={href} {...rest}>
        {children}
      </a>
    );
  }

  const { children, variant, className, type, ...rest } = props;
  return (
    <button className={classes(variant, className)} type={type ?? "button"} {...rest}>
      {children}
    </button>
  );
}
