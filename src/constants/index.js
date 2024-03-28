import { cpp_exp, java_exp, web_exp, react_exp, python_exp } from "../assets/images";
import {
    c,
    cpp,
    java,
    python,
    car,
    sql,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    postgresql,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    aiimg,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    shirt,
    timer,
    travel,
    scraping,
    todolist,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: c,
        name: "C",
        type: "Programming Language",
    },
    {
        imageUrl: cpp,
        name: "C++",
        type: "Programming Language",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Programming Language",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Programming Language",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    // {
    //     imageUrl: redux,
    //     name: "Redux",
    //     type: "State Management",
    // },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    // {
    //     imageUrl: typescript,
    //     name: "TypeScript",
    //     type: "Frontend",
    // },
    {
        imageUrl: postgresql,
        name: "PostgreSQL",
        type: "Database",
    },
    {
        imageUrl: sql,
        name: "SQL",
        type: "Database",
    },
];

export const experiences = [
    {
        title: "C/C++",
        company_name: " ",
        icon: cpp_exp,
        iconBg: "#accbe1",
        date: "2021 - Present",
        points: [
            "Developed and implemented algorithms using C/C++ for various academic assignments.",
            "Applied data structures and algorithms concepts in real-world scenarios.",
            "Gained proficiency in debugging code written in C/C++ for error identification and resolution.",
            "Explored optimization techniques to improve code efficiency and performance.",
        ],
    },
    {
        title: "Java",
        company_name: " ",
        icon: java_exp,
        iconBg: "#fbc3bc",
        date: "2022 - Present",
        points: [
            "Demonstrated strong proficiency in Java programming language through various assignments.",
            "Applied core Java concepts, including object-oriented programming principles, in practical scenarios.",
            "Applied Java to solve computational and logical challenges effectively."
        ],
    },
    {
        title: "Web Developer",
        company_name: " ",
        icon: web_exp,
        iconBg: "#b7e4c7",
        date: "2020 - Present",
        points: [
            "Proficient in HTML, CSS, and JavaScript for creating responsive and visually appealing user interfaces.",
            "Implemented front-end frameworks such as Bootstrap or Tailwind CSS for efficient styling.",
            "Utilized JavaScript libraries (e.g., jQuery) for DOM manipulation and enhanced interactivity.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
        ],
    },
    {
        title: "React.js Developer",
        company_name: " ",
        icon: react_exp,
        iconBg: "#a2d2ff",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Implemented 3D models in React.js with the enchanting power of Three.js!",
        ],
    },
    {
        title: "Python",
        company_name: " ",
        icon: python_exp,
        iconBg: "#a2d2ff",
        date: "Jan 2021 - Present",
        points: [
            "Understand fundamental concepts like variables, data types, and basic operations.",
            "Explore control flow statements (if, else, loops) for writing logical code.",
            "Understand how to define and call functions in Python.",
            "Developed a web scraping project to extract data from websites and gather valuable information programmatically.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/priyanshutariyal02',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/priyanshu-tariyal-92900021a/',
    }
];

export const projects = [
    {
        iconUrl: shirt,
        theme: 'btn-back-red',
        name: 'Customized Outfits 3D',
        description: 'Developed a user-friendly website that allows users to customize their cloths using different customized options.Utilized advanced web development technologies, including React.js for the front- end and Three.js for 3D rendering.',
        link: 'https://github.com/priyanshutariyal02/Customize-Outfits-3D',
    },
    {
        iconUrl: aiimg,
        theme: 'btn-back-pink',
        name: 'AI Image Generator',
        description: 'Developed an AI image generator where users provide a prompt to generate an image.',
        link: 'https://github.com/priyanshutariyal02/Ai-Image-Generator',
    },
    {
        iconUrl: todolist,
        theme: 'btn-back-orange',
        name: 'TODO List',
        description: 'Developed an TODO List where users Add, Modify, Delete there tasks.',
        link: 'https://github.com/priyanshutariyal02/TODO-List',
    },
    {
        iconUrl: travel,
        theme: 'btn-back-green',
        name: 'Tours and Travels Website',
        description: 'Developed a User-friendly website where users can book their Adi Kailash Parvat trip. The website contains some pages such as Home, Pricing, Gallery, About Us, and Booking form.',
        link: 'https://github.com/priyanshutariyal02/Tours-and-Travels',
    },
    {
        iconUrl: timer,
        theme: 'btn-back-yellow',
        name: 'Timer Challenge Game',
        description: 'This project was developed in React.js. The main purpose of this project is the use of refs and portals.. In this game, the user will see four challenges: easy, medium, hard, and pro. If the user clicks the start challenge button, the challenge will begin, and it must be stopped before the time runs out or the user will lose.',
        link: 'https://github.com/priyanshutariyal02/Timer-Challange-Game',
    },
    {
        iconUrl: scraping,
        theme: 'btn-back-blue',
        name: 'Web Scraping with Python',
        description: 'Developed a web scrapper for extracting valuable data from various websites. Also, apply HTML parsing techniques. The tool used was the Beautiful Soup library.',
        link: 'https://github.com/priyanshutariyal02/Web-scraping-with-python',
    },

];