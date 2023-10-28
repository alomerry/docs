import { type DefaultTheme } from 'vitepress'
import knowledge from "./knowledge.js"
import { BaGuZh, BaGu } from "./8gu/index.js"
import { IOIZh, IOI } from "./ioi/index.js"

export enum SidebarType {
  BaGu, BaGuZh,
  Knowledge, KnowledgeZh,
  IOI, IOIZh,
}

const Sidebar = new Map<SidebarType, DefaultTheme.SidebarItem[]>([
  [SidebarType.BaGu, [...BaGu()]],
  [SidebarType.BaGuZh, [...BaGuZh()]],
  [SidebarType.Knowledge, [...knowledge.Sidebar()]],
  [SidebarType.KnowledgeZh, [...knowledge.SidebarZh()]],
  [SidebarType.IOI, [...IOI()]],
  [SidebarType.IOIZh, [...IOIZh()]],
])

export function SGet(sidebarType: SidebarType): DefaultTheme.SidebarItem[] {
  return Sidebar.get(sidebarType) || [] as DefaultTheme.SidebarItem[];
}
