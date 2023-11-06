import React from 'react'
import Project from '../../components/Project'


const projects = [
    {
        title: 'Title',
        github: '',
        deployed: '',
        image: '', 
        description: 'Lorem ipsum dolor. '
    },
    {
        title: 'Title2',
        github: '',
        deployed: '',
        image: '', 
        description: 'Lorem ipsum dolor. '
    },
    {
        title: 'Title3',
        github: '',
        deployed: '',
        image: '', 
        description: 'Lorem ipsum dolor. '
    },
    {
        title: 'Title4',
        github: '',
        deployed: '',
        image: '', 
        description: 'Lorem ipsum dolor. '
    },
    {
        title: 'Title5',
        github: '',
        deployed: '',
        image: '', 
        description: 'Lorem ipsum dolor. '
    },
    {
        title: 'Title6',
        github: '',
        deployed: '',
        image: '', 
        description: 'Lorem ipsum dolor. '
    }    
]

function Portfolio() {
    return (
        <div>
            <h4 className="" >Portfolio</h4>
            <section>
                <Project projects={projects} />
            </section>
        </div>
    )
}

export default Portfolio