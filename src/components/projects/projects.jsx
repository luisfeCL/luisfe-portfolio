import './projects.css'
import Card from '../card/card'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Projects(){
    document.body.style.setProperty('--bg-color', 'hsl(0,0%,15%)')
    document.body.style.setProperty('--text-color', 'hsl(52,50%,91%)')

    const[works, setWorks]=useState([])
    useEffect(()=>{
        axios.get('/projects.json')
        .then(response => setWorks(response.data.projects))
    },[])

    return(
        <section className="container">
            <h1 className='title'>Learning by doing.</h1>
            <article className="projects">
                {works.map(work=>
                    <Card icon={work.icon} title={work.title} description={work.description} link={work.link} />
                )}
            </article>
        </section>
    )
}