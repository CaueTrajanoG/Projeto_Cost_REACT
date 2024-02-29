import style from "./Projects.module.css";
import { useLocation } from "react-router-dom";
import Message from "../layout/Message";
import Container from "../layout/Container";
import Loading from "../layout/Loading";
import LinkButton from "../layout/LinkButton";

import ProjectCard from "../project/ProjectCard";
import { useState, useEffect } from "react";


function Projects() {
  const [ projects, setProjects ] = useState();
  const [ removeLoading, setRemoveLoading ] = useState(false);

  const location = useLocation();
  let message = '';
  if (location.state) {
    message = location.state.message;
  }

  useEffect(() => {
    setTimeout(() =>
    fetch('http://localhost:5000/projects', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        
      },
    }).then(resp => resp.json())
      .then(data => {
        setProjects(data)
        setRemoveLoading(true)
      })
      .catch((err) => console.log(err)),1000)
  }, [])

  function removeProject(id) {    
    fetch(`http://localhost:5000/projects/${id}`, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
    })
      .then(resp => resp.json())
      .then(data => {
        setProjects(projects.filter((project) => project.id !== id))
        //mensagem de remoção
      })
      .catch((err)=>console.log(err))
  }

  return (
    <div>
      <div className={style.title}>
        <h1>Meus projetos</h1>
        <LinkButton to="/newproject" text="Novo Projeto" />
      </div>
      {message && <Message msg={message} type="sucess" />}
      <Container customClass="start">        
        {projects && projects.length > 0 && projects.map(
          (project) =>
          (<ProjectCard
            id = {project.id}
            name={project.name}
            budget={project.budget}
            category={project.category_id.name}
            key={project.id}
            handleRemove={removeProject}
          />)
        )}
        {!removeLoading && <Loading />}
        {removeLoading && projects.length === 0 && (
          <p>Não há projetos no momento.</p>
        )}
      </Container>
    </div>
  );
}
export default Projects;
