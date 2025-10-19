import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import {motion} from 'motion/react'

const About = ({isDarkMode}) => {
  return (
    <motion.div 
    initial={{opacity: 0 }}
    whileInView={{opacity: 1}}
    transition={{duration: 1}}
    
    id='about' className='w-full py-10 scroll-mt-20'>
        {/* Mobile Layout */}
        <div className='block lg:hidden px-4'>
            <motion.h4
            initial={{opacity: 0, y: -20 }}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: 0.3}}
            className='text-center mb-2 text-lg font-Ovo'>
                Introduction
            </motion.h4>
            <motion.h2 
            initial={{opacity: 0, y: -20 }}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.8}}
            className='text-center text-3xl font-Ovo mb-8'>About me</motion.h2>
        </div>

        {/* Desktop Layout */}
        <div className='hidden lg:block px-12 xl:px-[12%] max-w-7xl mx-auto'>
            <motion.h4
            initial={{opacity: 0, y: -20 }}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: 0.3}}
            className='text-center mb-2 text-lg font-Ovo'>
                Introduction
            </motion.h4>
            <motion.h2 
            initial={{opacity: 0, y: -20 }}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.8}}
            className='text-center text-5xl font-Ovo mb-8'>About me</motion.h2>
        </div>


        {/* Mobile Content Layout */}
        <div className='block lg:hidden px-4'>
            <motion.div 
            initial={{opacity: 0 }}
            whileInView={{opacity: 1}}
            transition={{duration: 0.5, delay: 0.5}}
            className='flex flex-col items-center gap-8 my-12'>
                <motion.div
                initial={{opacity: 0, scale: 0.9 }}
                whileInView={{opacity: 1, scale: 1}}
                transition={{duration: 0.6}}
                 className='w-48 rounded-3xl'>
                    <Image src={assets.user_image} alt='user' loading='lazy' className='w-full rounded-3xl'/>
                </motion.div>
                <motion.div 
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 0.6, delay: 0.8}}
                className='w-full text-center'>
                    <p className='mb-8 max-w-2xl font-Ovo text-sm mx-auto leading-relaxed'>
                     
                    Frontend Engineer with 4+ years of experience building scalable fintech and SaaS applications
using React, Next.js, and TypeScript. Skilled at delivering responsive, accessible, and
high-performance user interfaces, integrating complex APIs, and collaborating across teams to
deliver impactful products. Passionate about leveraging modern frameworks and best practices
to deliver exceptional user experiences.
                    </p>
                    <motion.ul 
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{duration: 0.8, delay: 1}}
                    className='grid grid-cols-1 gap-4 max-w-2xl mx-auto'>
                        {infoList.map(({icon, iconDark, title, description}, index)=> (
                            <motion.li
                            whileInView={{scale: 1.05}}
                             key={index} className='border-[0.5px] border-gray-400 rounded-xl p-4 
                            cursor-pointer hover:bg-lighHover hover:-translate-y-1 duration-500 hover:shadow-black
                            dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50 text-center'> 
                                <Image src={isDarkMode ? iconDark  : icon} alt={title} loading='lazy' className='w-6 mt-3 mx-auto'/>
                                <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                                <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>
                            </motion.li>
                        ))}
                    </motion.ul>
                    <motion.h4 
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{duration: 0.6, delay: 1.5}}
                    className='my-6 text-gray-700 font-Ovo dark:text-white text-center'> Tools I use </motion.h4>
                    <motion.ul
                    initial={{opacity: 0, y: -20 }}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay: 0.5}}
                    className='flex items-center justify-center gap-3 flex-wrap'>
                        {toolsData.map((tool,index)=>(
                            <motion.li
                            whileHover={{scale:  1.05}}
                             key={index} 
                            className='flex items-center justify-center w-10 aspect-square border
                             border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
                                  <Image src={tool} alt='tool' loading='lazy' className='w-4'/>  
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.div>
            </motion.div>
        </div>

        {/* Desktop Content Layout */}
        <div className='hidden lg:block px-12  max-w-7xl mx-auto'>
            <motion.div 
            initial={{opacity: 0 }}
            whileInView={{opacity: 1}}
            transition={{duration: 0.5, delay: 0.5}}
            className='flex w-full flex-row items-center gap-20 my-20'>
                <motion.div
                initial={{opacity: 0, scale: 0.9 }}
                whileInView={{opacity: 1, scale: 1}}
                transition={{duration: 0.6}}
                 className='w-80 rounded-3xl'>
                    <Image src={assets.user_image} alt='user' loading='lazy' className='w-full rounded-3xl'/>
                </motion.div>
                <motion.div 
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 0.6, delay: 0.8}}
                className='flex-1 w-full text-left'>
                    <p className='mb-10 max-w-2xl font-Ovo text-base leading-relaxed'>
                     
                    Frontend Engineer with 4+ years of experience building scalable fintech and SaaS applications
using React, Next.js, and TypeScript. Skilled at delivering responsive, accessible, and
high-performance user interfaces, integrating complex APIs, and collaborating across teams to
deliver impactful products. Passionate about leveraging modern frameworks and best practices
to deliver exceptional user experiences.
                    </p>
                    <motion.ul 
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{duration: 0.8, delay: 1}}
                    className='grid grid-cols-3 gap-6 max-w-2xl'>
                        {infoList.map(({icon, iconDark, title, description}, index)=> (
                            <motion.li
                            whileInView={{scale: 1.05}}
                             key={index} className='border-[0.5px] border-gray-400 rounded-xl p-6 
                            cursor-pointer hover:bg-lighHover hover:-translate-y-1 duration-500 hover:shadow-black
                            dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50 text-left'> 
                                <Image src={isDarkMode ? iconDark  : icon} alt={title} loading='lazy' className='w-7 mt-3'/>
                                <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                                <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>
                            </motion.li>
                        ))}
                    </motion.ul>
                    <motion.h4 
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{duration: 0.6, delay: 1.5}}
                    className='my-6 text-gray-700 font-Ovo dark:text-white text-left'> Tools I use </motion.h4>
                    <motion.ul
                    initial={{opacity: 0, y: -20 }}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay: 0.5}}
                    className='flex items-center gap-5 flex-wrap'>
                        {toolsData.map((tool,index)=>(
                            <motion.li
                            whileHover={{scale:  1.05}}
                             key={index} 
                            className='flex items-center justify-center w-14 aspect-square border
                             border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
                                  <Image src={tool} alt='tool' loading='lazy' className='w-7'/>  
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.div>
            </motion.div>
        </div>
    </motion.div>
  )
}

export default About