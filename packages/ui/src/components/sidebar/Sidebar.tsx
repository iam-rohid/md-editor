import React from "react";
import { MapIcon, NoteIcon, RecentIcon, StarIcon, TrashIcon } from "../icons";
import SearchButton from "./SearchButton";
import SidebarGroup from "./SidebarGroup";
import SidebarLink from "./SidebarLink";

export type SidebarProps = {};
const Sidebar: React.FC<SidebarProps> = (props) => {
  return (
    <aside
      className="bg-neutral-50 dark:bg-neutral-800 flex flex-col h-full"
      style={{
        width: `${220}px`,
      }}
    >
      <nav className="flex-1 overflow-y-auto w-full h-full px-2 py-4 space-y-4">
        <SearchButton />
        <ul>
          <SidebarLink to="recent" label="Recent" icon={<RecentIcon />} />
          <SidebarLink to="drafts" label="Drafts" icon={<NoteIcon />} />
          <SidebarLink to="favorites" label="Favorites" icon={<StarIcon />} />
          <SidebarLink to="map" label="Mind Map" icon={<MapIcon />} />
          <SidebarLink to="trash" label="Trash" icon={<TrashIcon />} />
        </ul>
        <SidebarGroup title="Notebooks">
          <ul>
            <SidebarLink to="recent" label="Recent" icon={<RecentIcon />} />
            <SidebarLink to="drafts" label="Drafts" icon={<NoteIcon />} />
            <SidebarLink to="favorites" label="Favorites" icon={<StarIcon />} />
            <SidebarLink to="map" label="Mind Map" icon={<MapIcon />} />
            <SidebarLink to="trash" label="Trash" icon={<TrashIcon />} />
          </ul>
        </SidebarGroup>
      </nav>
    </aside>
  );
};

export default Sidebar;
