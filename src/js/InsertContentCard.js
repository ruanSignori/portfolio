import { cardProjectData } from "../utils/CardContext";
import { CreateProjectCard } from "./components/ProjectCard";

cardProjectData.forEach((project) => {
    new CreateProjectCard(
        project.thumb,
        project.title,
        project.description,
        project.category,
        project.siteProject,
        project.linkRepo,
        project.toolsUsed
    );
});