import React from "react";
import { MapIcon, NoteIcon, StarIcon, TrashIcon } from "../icons";
import SidebarLink from "./SidebarLink";

export type SidebarProps = {};
const Sidebar: React.FC<SidebarProps> = (props) => {
  return (
    <aside className="bg-blue-500">
      <nav>
        <SidebarLink to="recent" label="Recent" icon={<NoteIcon />} />
        <SidebarLink to="drafts" label="Drafts" icon={<NoteIcon />} />
        <SidebarLink to="favorites" label="Favorites" icon={<StarIcon />} />
        <SidebarLink to="map" label="Mind Map" icon={<MapIcon />} />
        <SidebarLink to="trash" label="Trash" icon={<TrashIcon />} />
      </nav>
    </aside>
  );
};

export default Sidebar;
