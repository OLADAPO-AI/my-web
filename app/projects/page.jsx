// 'use client'

// import React from 'react'
// import projects from '@/lib/project-data'
// import Image from 'next/image'
// 'use client'
// import React from 'react'
// import projects from '../data/projects'
// import Image from 'next/image'
// import { motion } from 'framer-motion'

// const ProjectsGrid = () => {
//   return (
//     <section className="py-12 px-4 max-w-7xl mx-auto">
//       <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {projects.map((project, index) => (
//           <motion.div
//             key={project.id}
//             className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//           >
//             <div className="relative h-48 w-full">
//               <Image
//                 src={project.image}
//                 alt={project.title}
//                 fill
//                 className="object-cover"
//               />
//             </div>
//             <div className="p-5">
//               <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
//               <p className="text-gray-600 text-sm mb-4 line-clamp-3">
//                 {project.description}
//               </p>
//               <div className="flex flex-wrap gap-2 mb-4">
//                 {project.technologies.map((tech, idx) => (
//                   <span
//                     key={idx}
//                     className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//               <div className="flex gap-4">
//                 <a
//                   href={project.liveLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-600 text-sm hover:underline"
//                 >
//                   Live Demo
//                 </a>
//                 <a
//                   href={project.repoLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-gray-700 text-sm hover:underline"
//                 >
//                   GitHub
//                 </a>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   )
// }

// export default ProjectsGrid
'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const placeholderProjects = [
  {
    id: 1,
    title: 'Timesheet Generator',
    description:
      'A streamlined app that automates the creation of professional timesheets, perfect for freelancers and remote teams.',
    technologies: ['React', 'Tailwind CSS', 'Node.js'],
    image: '/images/placeholder1.jpg',
    liveLink: 'https://example.com/alpha',
    repoLink: 'https://github.com/username/project-alpha',
  },
  {
    id: 2,
    title: 'A ReactJs Powered Website',
    description:
      'A responsive and interactive website built with ReactJS, showcasing modern design patterns and performance optimization.',
    technologies: ['Vue', 'Firebase', 'Bootstrap'],
    image: '/images/placeholder2.jpg',
    liveLink: 'https://example.com/beta',
    repoLink: 'https://github.com/username/beta-builder',
  },
  {
    id: 3,
    title: 'A Nextjs Website',
    description:
      'A blazing fast static and server-rendered website using Next.js, featuring seamless routing and SEO-ready structure.',
    technologies: ['Angular', 'Chart.js', 'Sass'],
    image: '/images/placeholder3.jpg',
    liveLink: 'https://example.com/gamma',
    repoLink: 'https://github.com/username/gamma-dashboard',
  },
]

const ProjectsGrid = () => {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {placeholderProjects.map((project, index) => (
          <motion.div
            key={project.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="relative h-48 w-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 text-sm hover:underline"
                >
                  Live Demo
                </a>
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 text-sm hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default ProjectsGrid
