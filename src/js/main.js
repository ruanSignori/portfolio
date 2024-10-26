import "@phosphor-icons/web/bold";
import "devicon";

import "./ChangeTheme";
import { HandleResponsiveNavbar } from "./ResponsiveNavbar";
import "./AnimationScroll";
import "./InsertContentCard";
import { InfiniteSlider } from "./components/InfiniteSlider";
import "./components/ProjectCard";
import "./HandleSubmit";
import "../styles/index.css";

new HandleResponsiveNavbar().observer();

new InfiniteSlider();