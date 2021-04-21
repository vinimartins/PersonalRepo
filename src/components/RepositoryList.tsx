import { useEffect, useState } from "react";
import { RepositoryItem } from "./RepositoryItem";
import "../styles/repositories.scss";

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  //jamais deixaras sem o segundo param
  useEffect(() => {
    fetch("https://api.github.com/orgs/vinimanara/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);
  console.log(repositories);

  return (
    <section className="repository-list">
      <h1>Lista de Repositorios</h1>

      <ul>
        {repositories.map((repo) => {
          return <RepositoryItem key={repo.name} repository={repo} />;
        })}
      </ul>
    </section>
  );
}
