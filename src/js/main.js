// Fontes hospedadas junto com o site (apenas o subconjunto "latin" e os pesos utilizados)
import "@fontsource/ubuntu/latin-400";
import "@fontsource/ubuntu/latin-500";
import "@fontsource/ubuntu/latin-700";
import "@fontsource/jetbrains-mono/latin-400";
import "@fontsource/jetbrains-mono/latin-500";

import "./ChangeTheme";
import { HandleResponsiveNavbar } from "./ResponsiveNavbar";
import "./AnimationScroll";
import "./InsertContentCard";
import { InfiniteSlider } from "./components/InfiniteSlider";
import "./components/ProjectCard";
import "./HandleSubmit";
import "./LazyLottie";
import "./Analytics";
import "./CurrentYear";
import "../styles/index.css";

new HandleResponsiveNavbar().observer();

new InfiniteSlider();
