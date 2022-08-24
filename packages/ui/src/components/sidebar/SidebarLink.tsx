import { Link, LinkProps } from "@tanstack/react-location";
import React, { ReactNode } from "react";
import clsx from "clsx";
export type SidebarLinkProps = LinkProps & {
  icon: ReactNode;
  label: string;
};

const SidebarLink: React.FC<SidebarLinkProps> = ({
  label,
  icon,
  className,
  ...linkProps
}) => {
  return (
    <Link {...linkProps}>
      {({ isActive }) => (
        <div className="pb-px">
          <div
            className={clsx(
              "flex items-center px-2 py-1 gap-2 rounded-md",
              {
                "bg-neutral-200 dark:bg-neutral-700": isActive,
                "hover:bg-neutral-200/50 dark:hover:bg-neutral-700/50 active:bg-neutral-200 dark:active:bg-neutral-700":
                  !isActive,
              },
              className
            )}
          >
            <span className="text-xl">{icon}</span>
            <p className="flex-1 truncate">{label}</p>
          </div>
        </div>
      )}
    </Link>
  );
};

export default SidebarLink;
