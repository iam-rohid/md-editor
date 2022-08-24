import React, { ReactNode, useState } from "react";
import { ExpandMoreIcon } from "../icons";

export interface SidebarGroupProps {
  children: ReactNode;
  initCollapsed?: boolean;
  title: string;
  actions?: {
    label: string;
    icon: ReactNode;
    onClick?: () => void;
  }[];
}

const SidebarGroup: React.FC<SidebarGroupProps> = (props) => {
  const { children, initCollapsed, title, actions } = props;
  const [collapsed, setCollapsed] = useState(initCollapsed);
  return (
    <div>
      <div className="flex items-center gap-2 py-1">
        <button className="w-6 h-6 flex items-center justify-center hover:bg-neutral-200/50 active:bg-neutral-200 dark:hover:bg-neutral-700/50 dark:active:bg-neutral-700 rounded-md">
          <span className="text-xl">
            <ExpandMoreIcon />
          </span>
        </button>
        <p className="flex-1 truncate">{title}</p>
        {actions?.map((action, i) => (
          <button
            key={i}
            onClick={action.onClick}
            title={action.label}
            className="w-6 h-6 flex items-center justify-center hover:bg-neutral-200/50 active:bg-neutral-200 dark:hover:bg-neutral-700/50 dark:active:bg-neutral-700 rounded-md"
          >
            <span className="text-xl">{action.icon}</span>
          </button>
        ))}
      </div>
      {!collapsed && children}
    </div>
  );
};

export default SidebarGroup;
