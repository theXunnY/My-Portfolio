import { RiCodeAiFill, RiGithubFill, RiInstagramLine, RiLinkedinFill, RiMessage2Fill } from '@remixicon/react';
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import{ ScrollTrigger } from "gsap/ScrollTrigger" 
gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
        const contactRef=useRef(null);
    
        useEffect(() => {
            const ctx = gsap.context(() => {
                gsap. from(".contact-item", {
                    opacity: 0,
                    y: 30,
                    duration: 1,
                    ease: "power3.out",
                    stagger: 0.3,
                    scrollTrigger: {
                        trigger: contactRef.current,
                        start: "top 80%",
                        toggleActions:"play none none none",
                    }
                })

                gsap.from(".contact-icon",{
                    opacity: 0,
                    y: 20,
                    duration: 1,
                    ease: "power3.out",
                    stagger: 0.4,
                    scrollTrigger: {
                        trigger: contactRef.current,
                        start: "top 80%",
                        toggleActions:"play none none none",
                    }
                })

            }, contactRef)
            return ()=>ctx.revert()
        }, [])





  return (
    <section className='py-16' id='contact' ref={contactRef} >
        <div className='px-4 text-center'>
            <h2 className=' contact-item mb-8 text-3xl font-medium lg:text-4xl'>Contact Me  </h2>
            <p className='contact-item mb-4 text-lg lg:text-xl'>
                feel free to reachout to me via email : {" "}
                <a href="mailto:thesunnypawar16@gmail.com" className='border-b'>
                Contact Me
                </a>
            </p>
            <div className='mt-8 flex justify-center space-x-6'>
                <a href="/" className='contact-icon flex flex-col justify-center items-center '
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Visit My LinkedIn Profile'>
                    <RiLinkedinFill/>
                    LinkedIn
                </a>
                <a href="https://www.linkedin.com/in/thesunnypawar16/" className='contact-icon flex flex-col justify-center items-center '
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Visit My GitHub Profile'>
                    <RiGithubFill/>
                    GitHub
                </a>
                <a href="https://leetcode.com/u/theXunnY/" className='contact-icon flex flex-col justify-center items-center '
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Visit My LeetCode Profile'>
                    <RiCodeAiFill/>
                    LeetCode
                </a>
                <a href="https://www.instagram.com/cursed_wolff/#" className='contact-icon flex flex-col justify-center items-center '
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Visit My LinkedIn Profile'>
                    <RiInstagramLine/>
                    Instagram
                </a>
            </div>

        </div>


    </section>
  )
}

export default Contact