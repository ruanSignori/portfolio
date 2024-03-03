import "@phosphor-icons/web/bold";

import "./ChangeTheme";
import { HandleResponsiveNavbar } from "./ResponsiveNavbar";
import "./Slider";
import "./AnimationScroll";
import "./InsertContentCard";
import "./HandleSubmit";

import "../styles/index.css";

const client = new HandleResponsiveNavbar();
client.observer();
