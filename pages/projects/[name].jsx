import React from 'react';
import projects from  '../../public/data/projects.js'

export const getStaticPaths = () => {

    const paths = projects.map(project => {
        return{
            params: {name: project.name.toString()}
        }
    })

    return{
        paths,
        fallback: false
    }

}

export const getStaticProps = async (context) => {
const name = context.params.name

let filteredProjects = projects.filter(function (project) {
    return project.name === name;
});

return{
    props: { project: filteredProjects[0]}
};

}

const Name = ({project}) => {
   
    return (
        <div>
            {project.name}
        </div>
    );
}

export default Name;
