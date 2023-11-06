import React from 'react'
import Project from '../../components/Project'

function Portfolio() {
    return (
        <div>
            <h4 className="" >Portfolio</h4>
            <section>
                <Project projects={projectArr} />
            </section>
        </div>
    )
}

export default Portfolio