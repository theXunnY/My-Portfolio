import React, { useEffect, useRef } from 'react'
import { PROJECTS } from '../constants';
import { gsap } from 'gsap'
import{ ScrollTrigger } from "gsap/ScrollTrigger" 
gsap.registerPlugin(ScrollTrigger)

const Projects = () => {

    useEffect(()=>{
        const ctx=gsap.context(()=>{
            gsap.from(".project-card",{
                opacity:0,
                y:50,
                duration:1,
                ease:"power3.out",
                stagger:0.3,
                scrollTrigger:{
                    trigger:projectRef.current,
                    start:"top 80%",
                    toggleActions:"play none none none",
                }
            })
        }, projectRef)
        return ()=>ctx.revert()
    }, [])


    const projectRef=useRef(null);
  return (
    <section className='pt-16 ' id='projects' ref={projectRef}>
        <div className='px-4'>
            <h2 className='mb-8 text-center text-3xl font-medium lg:text-4xl'>
                Projects
            </h2>
            <div className='flex flex-wrap justify-center'>
                {PROJECTS.map((projects)=>(
                    <div key={projects.id} className='project-card flex w-full flex-col p-4 md:w-1/2 lgw-1/3'>
                        <div className='flex-grow overflow-hidden rounded-lg border border-b-purple-300/20' >
                            <a href={projects.link} target='_blank' rel='noopener noreferrer'>
                                <img src={projects.imgSrc} alt={projects.title} className='h-60 w-full object-cover' />
                            </a>
                            <div className='p-6'>
                                <h3 className='mb-2 text-lg font-medium lg:text-2xl '>{projects.title}</h3>
                                <p className='mb-4'>{projects.description}</p>
                                <div className='m-4'>
                                    <strong>Tech Stack</strong>
                                    <ul>
                                        {projects.techStack.map((tech, index)=>(
                                            <li key={index} className='mb-1 mr-2 inline-block rounded-full border-2 border-pink-500/30 px-3 py-1 text-sm font-semibold'>
                                                {tech}
                                            </li>
                                        ))}
                                    </ul>

                                </div>
                                
                            </div>
                        </div>
                    </div>
                ))}

            </div>

        </div>

    </section>
  )
}

export default Projects
