import axios from "axios";

const getAllProjects = async () => {
  const url = 'https://api.github.com/users/ruanSignori/repos';
  const { data } = await axios.get(url);

  if (data === null) return;
  
  return data;
};

const getAllThumbs = async (repoId, tokenImg) => {
  const url = `https://repository-images.githubusercontent.com/${repoId}/${tokenImg}`
  const { data } = await axios.get(url);

  
}

getAllProjects();