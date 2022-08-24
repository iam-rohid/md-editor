import { Link, LinkProps } from "@tanstack/react-location";
import React, { ReactNode } from "react";

export type SidebarLinkProps = LinkProps & {
  icon: ReactNode;
  label: string;
};

const SidebarLink: React.FC<SidebarLinkProps> = ({
  label,
  icon,
  ...linkProps
}) => {
  return (
    <Link {...linkProps}>
      <span>{icon}</span>
      <p>{label}</p>
    </Link>
  );
};

export default SidebarLink;
