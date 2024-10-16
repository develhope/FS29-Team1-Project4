import jsIcon from "./assets/js-brands-solid.svg";
import pythonIcon from "./assets/python-5.svg";
import htmlIcon from "./assets/html5-brands-solid.svg";
import cssIcon from "./assets/css3-alt-brands-solid.svg";
import reactIcon from "./assets/react.svg";
import typescriptIcon from "./assets/typescript.svg";
import cPlusPlusIcon from "./assets/c++.svg";
import githubIcon from "./assets/github.svg";
import cSharpIcon from "./assets/cSharp.svg";
import javaIcon from "./assets/java-14.svg";
import nodeIcon from "./assets/nodejs.svg";
import blenderIcon from "./assets/blender-2.svg";
import rhinoIcon from "./assets/icons8-rhinoceros-6.svg";
import unityIcon from "./assets/unity-69.svg";
import iconX from "./assets/xmark-solid.svg";

export const DATA = [
  {
    id: 1,
    username: "Giuseppe",
    password: "peppe",
    email: "esempio@gmail.com",
    isPro: true,
    isAdmin: true,
    job: ["Full-stack", "Front-end", "Back-end"],
    image:
      "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quaerat unde quibusdam et facere quas magni molestias enim dolore dignissimos harum!",
    program: [
      { name: "JS", icon: jsIcon },
      { name: "HTML", icon: htmlIcon },
      { name: "CSS", icon: cssIcon },
      { name: "REACT", icon: reactIcon },
      { name: "TS", icon: typescriptIcon },
      { name: "GITHUB", icon: githubIcon },
      { name: "NODE", icon: nodeIcon },
    ],
    project: [
      {
        name: "Project 1",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
      {
        name: "Project 2",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
      {
        name: "Project 3",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
      {
        name: "Project 4",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
      {
        name: "Project 5",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
    ],
    someExperience: [
      "Experience 1",
      "Experience 2",
      "Experience 3",
      "Experience 4",
      "Experience 5",
      "Experience 6",
      "Experience 7",
    ],
    price: { max: 10000, min: 100 },
    luogo: "Roma",
    transfert: true,
    contact: [
      {
        tipo: "email",
        name: "example@gmail.com",
      },
      {
        tipo: "twitter",
        name: "tizio twitter",
      },
      {
        tipo: "linkedin",
        name: "link",
      },
    ],
    general: {
      firstName: "Kevin",
      surName: "Bacher",
      annoNascita: 1999,
      luogoNascita: "Londra",
    },
    reviews: 4.5,
    comments: ["good", "Very good", "Molto premuroso"],
  },
  {
    id: 2,
    username: "Paolo",
    password: "L0Ndra",
    email: "esempio@gmail.com",
    isPro: true,
    isAdmin: false,
    job: ["Back-end", "Web Developer"],
    image:
      "https://th.bing.com/th/id/OIP.UEmMR4OfczDvWIUratzGkQHaFD?pid=ImgDet&rs=1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quaerat unde quibusdam et facere quas magni molestias enim dolore dignissimos harum!",
    program: [
      { name: "Python", icon: pythonIcon },
      { name: "C++", icon: cPlusPlusIcon },
      { name: "GITHUB", icon: githubIcon },
      { name: "C#", icon: cSharpIcon },
    ],
    project: [
      {
        name: "Project 1",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
      {
        name: "Project 2",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
      {
        name: "Project 3",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
      {
        name: "Project 4",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
      {
        name: "Project 5",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
    ],
    someExperience: [
      "Experience 1",
      "Experience 2",
      "Experience 3",
      "Experience 4",
    ],
    price: { max: 10000, min: 100 },
    luogo: "Roma",
    transfert: true,
    contact: [
      {
        tipo: "telefono",
        name: 45756874,
      },
      {
        tipo: "email",
        name: "example@gmail.com",
      },
    ],
    general: {
      firstName: "Kevin",
      surName: "Bacher",
      annoNascita: 2000,
      sedeLegale: "Londra",
    },
    reviews: 4.5,
    comments: ["good", "Very good", "Molto premuroso"],
  },
  {
    id: 3,
    username: "Luca",
    password: "L0Ndra",
    email: "esempio@gmail.com",
    isPro: true,
    isAdmin: false,
    job: ["Full-stack", "Front-end", "Back-end", "Software Engineer"],
    image:
      "https://th.bing.com/th/id/R.b1dca103a08fb09ab6093c1843206e62?rik=poC1LUfrAnasRg&riu=http%3a%2f%2fthesaturnherald.com%2fwp-content%2fuploads%2f2019%2f08%2fThe-Beatles.png&ehk=fRCOKcIZLuTKJTDe5UT%2fU0FlIEhc5Cv3L6jFWg5Rwmk%3d&risl=&pid=ImgRaw&r=0",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quaerat unde quibusdam et facere quas magni molestias enim dolore dignissimos harum!",
    program: [
      { name: "HTML", icon: htmlIcon },
      { name: "CSS", icon: cssIcon },
      { name: "REACT", icon: reactIcon },
      { name: "TS", icon: typescriptIcon },
      { name: "C++", icon: cPlusPlusIcon },
      { name: "GITHUB", icon: githubIcon },
      { name: "C#", icon: cSharpIcon },
      { name: "JAVA", icon: javaIcon },
      { name: "NODE", icon: nodeIcon },
      { name: "BLENDER", icon: blenderIcon },
      { name: "RHINO 3D", icon: rhinoIcon },
      { name: "UNITY", icon: unityIcon },
    ],
    project: [
      {
        name: "Project 1",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
      {
        name: "Project 2",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
      {
        name: "Project 3",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
      {
        name: "Project 4",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
      {
        name: "Project 5",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
    ],
    someExperience: [
      "Experience 1",
      "Experience 2",
      "Experience 3",
      "Experience 4",
      "Experience 5",
      "Experience 6",
      "Experience 7",
    ],
    price: { max: 10000, min: 100 },
    luogo: "Roma",
    transfert: true,
    contact: [
      {
        tipo: "telefono",
        name: 45756874,
      },
      {
        tipo: "email",
        name: "example@gmail.com",
      },
      {
        tipo: "facebook",
        name: "tizio facebook",
      },
      {
        tipo: "twitter",
        name: "tizio twitter",
      },
      {
        tipo: "instagram",
        name: "tizio instagram",
      },
      {
        tipo: "linkedin",
        name: "link",
      },
    ],
    general: {
      firstName: "Kevin",
      surName: "Bacher",
      annoNascita: 2000,
      luogoNascita: "Londra",
    },
    reviews: 4.5,
    comments: ["good", "Very good", "Molto premuroso"],
  },
  {
    id: 4,
    username: "Francesco",
    password: "L0Ndra",
    email: "esempio@gmail.com",
    isPro: true,
    isAdmin: false,
    job: ["Front-end", "Web Designer"],
    image:
      "https://th.bing.com/th/id/OIP.o2UpCnJR1l2GyvdN3wBcqwHaJL?pid=ImgDet&rs=1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quaerat unde quibusdam et facere quas magni molestias enim dolore dignissimos harum!",
    program: [
      { name: "JS", icon: jsIcon },
      { name: "Python", icon: pythonIcon },
      { name: "HTML", icon: htmlIcon },
      { name: "CSS", icon: cssIcon },
      { name: "REACT", icon: reactIcon },
      { name: "TS", icon: typescriptIcon },
      { name: "C++", icon: cPlusPlusIcon },
      { name: "GITHUB", icon: githubIcon },
      { name: "C#", icon: cSharpIcon },
      { name: "JAVA", icon: javaIcon },
      { name: "NODE", icon: nodeIcon },
      { name: "BLENDER", icon: blenderIcon },
      { name: "RHINO 3D", icon: rhinoIcon },
      { name: "UNITY", icon: unityIcon },
    ],
    project: [
      {
        name: "Project 1",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
      {
        name: "Project 2",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
      {
        name: "Project 3",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
      {
        name: "Project 4",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
      {
        name: "Project 5",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
    ],
    someExperience: [
      "Experience 1",
      "Experience 2",
      "Experience 3",
      "Experience 4",
      "Experience 5",
      "Experience 6",
      "Experience 7",
    ],
    price: { max: 25050, min: 250 },
    luogo: "Roma",
    transfert: true,
    contact: [
      {
        tipo: "telefono",
        name: 45756874,
      },
      {
        tipo: "email",
        name: "example@gmail.com",
      },
      {
        tipo: "facebook",
        name: "tizio facebook",
      },
      {
        tipo: "twitter",
        name: "tizio twitter",
      },
      {
        tipo: "instagram",
        name: "tizio instagram",
      },
      {
        tipo: "linkedin",
        name: "link",
      },
    ],
    general: {
      firstName: "Kevin",
      surName: "Bacher",
      annoNascita: 1984,
      sedeLegale: "Londra",
    },
    reviews: 4.5,
    comments: ["good", "Very good", "Molto premuroso"],
  },
  {
    id: 5,
    username: "Fabrizio",
    password: "ciao",
    email: "esempio@gmail.com",
    isPro: true,
    isAdmin: false,
    job: ["3D Designer"],
    image:
      "https://th.bing.com/th/id/R.ddf77b58ca5a464ab8beb0576111a2a1?rik=pQSCB0LH8fslzA&pid=ImgRaw&r=0",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quaerat unde quibusdam et facere quas magni molestias enim dolore dignissimos harum!",
    program: [
      { name: "JS", icon: jsIcon },
      { name: "Python", icon: pythonIcon },
      { name: "HTML", icon: htmlIcon },
      { name: "CSS", icon: cssIcon },
      { name: "REACT", icon: reactIcon },
      { name: "TS", icon: typescriptIcon },
      { name: "C++", icon: cPlusPlusIcon },
      { name: "GITHUB", icon: githubIcon },
      { name: "C#", icon: cSharpIcon },
      { name: "JAVA", icon: javaIcon },
      { name: "NODE", icon: nodeIcon },
      { name: "BLENDER", icon: blenderIcon },
      { name: "RHINO 3D", icon: rhinoIcon },
      { name: "UNITY", icon: unityIcon },
    ],
    project: [
      {
        name: "Project 1",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
        isVisible: true,
      },
      {
        name: "Project 2",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
        isVisible: true,
      },
      {
        name: "Project 3",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
        isVisible: true,
      },
      {
        name: "Project 4",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
        isVisible: true,
      },
      {
        name: "Project 5",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
        isVisible: true,
      },
      {
        name: "Project 6",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
        isVisible: false,
      },
      {
        name: "Project 7",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
        isVisible: false,
      },
    ],
    someExperience: [
      { name: "Experience 1", isVisible: true },
      { name: "Experience 2", isVisible: true },
      { name: "Experience 3", isVisible: true },
      { name: "Experience 4", isVisible: true },
      { name: "Experience 5", isVisible: true },
      { name: "Experience 6", isVisible: true },
      { name: "Experience 7", isVisible: true },
      { name: "Experience 8", isVisible: false },
      { name: "Experience 9", isVisible: false },
    ],
    price: { max: 25050, min: 250 },
    luogo: "Roma",
    transfert: false,
    contact: [
      {
        tipo: "telefono",
        name: 45756874,
      },
      {
        tipo: "email",
        name: "example@gmail.com",
      },
      {
        tipo: "facebook",
        name: "tizio facebook",
      },
      {
        tipo: "twitter",
        name: "tizio twitter",
      },
      {
        tipo: "instagram",
        name: "tizio instagram",
      },
      {
        tipo: "linkedin",
        name: "link",
      },
    ],
    general: {
      firstName: "Kevin",
      surName: "Bacher",
      annoNascita: 1984,
      luogoNascita: "Londra",
    },
    reviews: 4.5,
    comments: ["good", "Very good", "Molto premuroso"],
  },
  {
    id: 6,
    username: "Azienda 1",
    password: "azienda_1",
    email: "recruiting@azienda1.com",
    isPro: false,
    isAdmin: false,
    job: ["Graphic 3D", "Web Development", "Customer Support"],
    image:
      "https://www.gazabhindi.com/wp-content/uploads/2018/05/%E0%A4%95%E0%A4%82%E0%A4%AA%E0%A5%8D%E0%A4%AF%E0%A5%82%E0%A4%9F%E0%A4%B0.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quaerat unde quibusdam et facere quas magni molestias enim dolore dignissimos harum!",
    program: [
      { name: "JS", icon: jsIcon },
      { name: "Python", icon: pythonIcon },
      { name: "HTML", icon: htmlIcon },
      { name: "CSS", icon: cssIcon },
      { name: "REACT", icon: reactIcon },
      { name: "TS", icon: typescriptIcon },
      { name: "C++", icon: cPlusPlusIcon },
      { name: "GITHUB", icon: githubIcon },
      { name: "C#", icon: cSharpIcon },
      { name: "JAVA", icon: javaIcon },
      { name: "NODE", icon: nodeIcon },
      { name: "BLENDER", icon: blenderIcon },
      { name: "RHINO 3D", icon: rhinoIcon },
      { name: "UNITY", icon: unityIcon },
    ],
    project: [
      {
        name: "Project 1",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
      {
        name: "Project 2",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
      {
        name: "Project 3",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
      {
        name: "Project 4",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
      {
        name: "Project 5",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
    ],
    someExperience: [
      "Experience 1",
      "Experience 2",
      "Experience 3",
      "Experience 4",
      "Experience 5",
      "Experience 6",
      "Experience 7",
    ],
    price: { max: 2000, min: 1200 },
    luogo: "Roma",
    contact: [
      {
        tipo: "telefono",
        name: 45756874,
      },
      {
        tipo: "email",
        name: "example@gmail.com",
      },
      {
        tipo: "facebook",
        name: "tizio facebook",
      },
      {
        tipo: "twitter",
        name: "tizio twitter",
      },
      {
        tipo: "instagram",
        name: "tizio instagram",
      },
      {
        tipo: "linkedin",
        name: "link",
      },
    ],
    general: {
      pIVA: 12345678901,
      annoNascita: 1984,
      sedeLegale: "Londra",
    },
    reviews: 4.5,
    comments: ["Good", "Very good", "Ben strutturata"],
  },
  {
    id: 7,
    username: "Simone",
    password: "L0Ndra",
    email: "esempio@gmail.com",
    isPro: true,
    isAdmin: false,
    job: ["Full-stack", "Front-end", "Back-end"],
    image:
      "https://th.bing.com/th/id/R.a5723d93d4ac34f1a415fabd37b0ea61?rik=VtrekwI2noLTUA&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f1%2fDas-Keyboard-Professional-PNG.png&ehk=E7qV2x5dcZ%2f%2baJbMCCQkADCLW1MBNMRqDWwqjJSISDY%3d&risl=&pid=ImgRaw&r=0",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quaerat unde quibusdam et facere quas magni molestias enim dolore dignissimos harum!",
    program: [
      { name: "JS", icon: jsIcon },
      { name: "Python", icon: pythonIcon },
      { name: "HTML", icon: htmlIcon },
      { name: "CSS", icon: cssIcon },
      { name: "REACT", icon: reactIcon },
      { name: "TS", icon: typescriptIcon },
      { name: "C++", icon: cPlusPlusIcon },
      { name: "GITHUB", icon: githubIcon },
      { name: "C#", icon: cSharpIcon },
      { name: "JAVA", icon: javaIcon },
      { name: "NODE", icon: nodeIcon },
      { name: "BLENDER", icon: blenderIcon },
      { name: "RHINO 3D", icon: rhinoIcon },
      { name: "UNITY", icon: unityIcon },
    ],
    project: [
      {
        name: "Project 1",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
      {
        name: "Project 2",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
      {
        name: "Project 3",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
      {
        name: "Project 4",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
      {
        name: "Project 5",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
    ],
    someExperience: [
      "Experience 1",
      "Experience 2",
      "Experience 3",
      "Experience 4",
      "Experience 5",
      "Experience 6",
      "Experience 7",
    ],
    price: { max: 25050, min: 45 },
    luogo: "Roma",
    transfert: true,
    contact: [
      {
        tipo: "telefono",
        name: 45756874,
      },
      {
        tipo: "email",
        name: "example@gmail.com",
      },
      {
        tipo: "facebook",
        name: "tizio facebook",
      },
      {
        tipo: "twitter",
        name: "tizio twitter",
      },
      {
        tipo: "instagram",
        name: "tizio instagram",
      },
      {
        tipo: "linkedin",
        name: "link",
      },
    ],
    general: {
      firstName: "Kevin",
      surName: "Bacher",
      annoNascita: 1984,
      luogoNascita: "Londra",
    },
    reviews: 4.5,
    comments: ["good", "Very good", "Molto premuroso"],
  },
  {
    id: 8,
    username: "Domenico",
    password: "L0Ndra",
    email: "esempio@gmail.com",
    isPro: true,
    isAdmin: false,
    job: ["Full-stack", "Front-end", "Back-end"],
    image:
      "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quaerat unde quibusdam et facere quas magni molestias enim dolore dignissimos harum!",
    program: [
      { name: "JS", icon: jsIcon },
      { name: "Python", icon: pythonIcon },
      { name: "HTML", icon: htmlIcon },
      { name: "CSS", icon: cssIcon },
      { name: "REACT", icon: reactIcon },
      { name: "TS", icon: typescriptIcon },
      { name: "C++", icon: cPlusPlusIcon },
      { name: "GITHUB", icon: githubIcon },
      { name: "C#", icon: cSharpIcon },
      { name: "JAVA", icon: javaIcon },
      { name: "NODE", icon: nodeIcon },
      { name: "BLENDER", icon: blenderIcon },
      { name: "RHINO 3D", icon: rhinoIcon },
      { name: "UNITY", icon: unityIcon },
      { name: "MySQL", icon: iconX },
    ],
    project: [
      {
        name: "Project 1",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
      {
        name: "Project 2",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
      {
        name: "Project 3",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
      {
        name: "Project 4",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
      {
        name: "Project 5",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
    ],
    someExperience: [
      "Experience 1",
      "Experience 2",
      "Experience 3",
      "Experience 4",
      "Experience 5",
      "Experience 6",
      "Experience 7",
    ],
    price: { max: 25050, min: 149 },
    luogo: "Torino",
    transfert: true,
    contact: [
      {
        tipo: "telefono",
        name: 45756874,
      },
      {
        tipo: "email",
        name: "example@gmail.com",
      },
      {
        tipo: "facebook",
        name: "tizio facebook",
      },
      {
        tipo: "twitter",
        name: "tizio twitter",
      },
      {
        tipo: "instagram",
        name: "tizio instagram",
      },
      {
        tipo: "linkedin",
        name: "link",
      },
    ],
    general: {
      firstName: "Kevin",
      surName: "Bacher",
      annoNascita: 1984,
      luogoNascita: "Londra",
    },
    reviews: 4.5,
    comments: ["good", "Very good", "Molto premuroso"],
  },
  {
    id: 9,
    username: "Pierdavide",
    password: "L0Ndra",
    email: "esempio@gmail.com",
    isPro: true,
    isAdmin: false,
    job: ["Full-stack", "Front-end", "Back-end"],
    image:
      "https://th.bing.com/th/id/OIP.UEmMR4OfczDvWIUratzGkQHaFD?pid=ImgDet&rs=1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quaerat unde quibusdam et facere quas magni molestias enim dolore dignissimos harum!",
    program: [
      { name: "JS", icon: jsIcon },
      { name: "Python", icon: pythonIcon },
      { name: "HTML", icon: htmlIcon },
      { name: "CSS", icon: cssIcon },
      { name: "REACT", icon: reactIcon },
      { name: "TS", icon: typescriptIcon },
      { name: "C++", icon: cPlusPlusIcon },
      { name: "GITHUB", icon: githubIcon },
      { name: "C#", icon: cSharpIcon },
      { name: "JAVA", icon: javaIcon },
      { name: "NODE", icon: nodeIcon },
      { name: "BLENDER", icon: blenderIcon },
      { name: "RHINO 3D", icon: rhinoIcon },
      { name: "UNITY", icon: unityIcon },
    ],
    project: [
      {
        name: "Project 1",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
      {
        name: "Project 2",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
      {
        name: "Project 3",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
      {
        name: "Project 4",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
      {
        name: "Project 5",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
    ],
    someExperience: [
      "Experience 1",
      "Experience 2",
      "Experience 3",
      "Experience 4",
      "Experience 5",
      "Experience 6",
      "Experience 7",
    ],
    price: { max: 25050, min: 250 },
    luogo: "Parigi",
    transfert: true,
    contact: [
      {
        tipo: "telefono",
        name: 45756874,
      },
      {
        tipo: "email",
        name: "example@gmail.com",
      },
      {
        tipo: "facebook",
        name: "tizio facebook",
      },
      {
        tipo: "twitter",
        name: "tizio twitter",
      },
      {
        tipo: "instagram",
        name: "tizio instagram",
      },
      {
        tipo: "linkedin",
        name: "link",
      },
    ],
    general: {
      firstName: "Kevin",
      surName: "Bacher",
      annoNascita: 1984,
      luogoNascita: "Londra",
    },
    reviews: 4.5,
    comments: ["good", "Very good", "Molto premuroso"],
  },
  {
    id: 10,
    username: "Lucia",
    password: "L0Ndra",
    email: "esempio@gmail.com",
    isPro: true,
    isAdmin: false,
    job: ["Full-stack", "Front-end", "Back-end"],
    image:
      "https://th.bing.com/th/id/R.b1dca103a08fb09ab6093c1843206e62?rik=poC1LUfrAnasRg&riu=http%3a%2f%2fthesaturnherald.com%2fwp-content%2fuploads%2f2019%2f08%2fThe-Beatles.png&ehk=fRCOKcIZLuTKJTDe5UT%2fU0FlIEhc5Cv3L6jFWg5Rwmk%3d&risl=&pid=ImgRaw&r=0",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quaerat unde quibusdam et facere quas magni molestias enim dolore dignissimos harum!",
    program: [
      { name: "JS", icon: jsIcon },
      { name: "Python", icon: pythonIcon },
      { name: "HTML", icon: htmlIcon },
      { name: "CSS", icon: cssIcon },
      { name: "REACT", icon: reactIcon },
      { name: "TS", icon: typescriptIcon },
      { name: "C++", icon: cPlusPlusIcon },
      { name: "GITHUB", icon: githubIcon },
      { name: "C#", icon: cSharpIcon },
      { name: "JAVA", icon: javaIcon },
      { name: "NODE", icon: nodeIcon },
      { name: "BLENDER", icon: blenderIcon },
      { name: "RHINO 3D", icon: rhinoIcon },
      { name: "UNITY", icon: unityIcon },
    ],
    project: [
      {
        name: "Project 1",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
      {
        name: "Project 2",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
      {
        name: "Project 3",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
      {
        name: "Project 4",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
      {
        name: "Project 5",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
    ],
    someExperience: [
      "Experience 1",
      "Experience 2",
      "Experience 3",
      "Experience 4",
      "Experience 5",
      "Experience 6",
      "Experience 7",
    ],
    price: { max: 25050, min: 250 },
    luogo: "Parlermo",
    transfert: true,
    contact: [
      {
        tipo: "telefono",
        name: 45756874,
      },
      {
        tipo: "email",
        name: "example@gmail.com",
      },
      {
        tipo: "facebook",
        name: "tizio facebook",
      },
      {
        tipo: "twitter",
        name: "tizio twitter",
      },
      {
        tipo: "instagram",
        name: "tizio instagram",
      },
      {
        tipo: "linkedin",
        name: "link",
      },
    ],
    general: {
      firstName: "Kevin",
      surName: "Bacher",
      annoNascita: 1984,
      luogoNascita: "Londra",
    },
    reviews: 4.5,
    comments: ["good", "Very good", "Molto premuroso"],
  },
  {
    id: 11,
    username: "Elena",
    password: "L0Ndra",
    email: "esempio@gmail.com",
    isPro: true,
    isAdmin: false,
    job: ["Full-stack", "Front-end", "Back-end"],
    image:
      "https://th.bing.com/th/id/OIP.o2UpCnJR1l2GyvdN3wBcqwHaJL?pid=ImgDet&rs=1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quaerat unde quibusdam et facere quas magni molestias enim dolore dignissimos harum!",
    program: [
      { name: "JS", icon: jsIcon },
      { name: "Python", icon: pythonIcon },
      { name: "HTML", icon: htmlIcon },
      { name: "CSS", icon: cssIcon },
      { name: "REACT", icon: reactIcon },
      { name: "TS", icon: typescriptIcon },
      { name: "C++", icon: cPlusPlusIcon },
      { name: "GITHUB", icon: githubIcon },
      { name: "C#", icon: cSharpIcon },
      { name: "JAVA", icon: javaIcon },
      { name: "NODE", icon: nodeIcon },
      { name: "BLENDER", icon: blenderIcon },
      { name: "RHINO 3D", icon: rhinoIcon },
      { name: "UNITY", icon: unityIcon },
    ],
    project: [
      {
        name: "Project 1",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
      {
        name: "Project 2",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
      {
        name: "Project 3",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
      {
        name: "Project 4",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
      {
        name: "Project 5",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
    ],
    someExperience: [
      "Experience 1",
      "Experience 2",
      "Experience 3",
      "Experience 4",
      "Experience 5",
      "Experience 6",
      "Experience 7",
    ],
    price: { max: 25050, min: 250 },
    luogo: "Berlino",
    transfert: true,
    contact: [
      {
        tipo: "telefono",
        name: 45756874,
      },
      {
        tipo: "email",
        name: "example@gmail.com",
      },
      {
        tipo: "facebook",
        name: "tizio facebook",
      },
      {
        tipo: "twitter",
        name: "tizio twitter",
      },
      {
        tipo: "instagram",
        name: "tizio instagram",
      },
      {
        tipo: "linkedin",
        name: "link",
      },
    ],
    general: {
      firstName: "Kevin",
      surName: "Bacher",
      annoNascita: 1984,
      luogoNascita: "Londra",
    },
    reviews: 4.5,
    comments: ["good", "Very good", "Molto premuroso"],
  },
  {
    id: 12,
    username: "Giorgia",
    password: "L0Ndra",
    email: "esempio@gmail.com",
    isPro: true,
    isAdmin: false,
    job: ["Full-stack", "Front-end", "Back-end"],
    image:
      "https://th.bing.com/th/id/R.ddf77b58ca5a464ab8beb0576111a2a1?rik=pQSCB0LH8fslzA&pid=ImgRaw&r=0",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quaerat unde quibusdam et facere quas magni molestias enim dolore dignissimos harum!",
    program: [
      { name: "JS", icon: jsIcon },
      { name: "Python", icon: pythonIcon },
      { name: "HTML", icon: htmlIcon },
      { name: "CSS", icon: cssIcon },
      { name: "REACT", icon: reactIcon },
      { name: "TS", icon: typescriptIcon },
      { name: "C++", icon: cPlusPlusIcon },
      { name: "GITHUB", icon: githubIcon },
      { name: "C#", icon: cSharpIcon },
      { name: "JAVA", icon: javaIcon },
      { name: "NODE", icon: nodeIcon },
      { name: "BLENDER", icon: blenderIcon },
      { name: "RHINO 3D", icon: rhinoIcon },
      { name: "UNITY", icon: unityIcon },
    ],
    project: [
      {
        name: "Project 1",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
      {
        name: "Project 2",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
      {
        name: "Project 3",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
      {
        name: "Project 4",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
      {
        name: "Project 5",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
    ],
    someExperience: [
      "Experience 1",
      "Experience 2",
      "Experience 3",
      "Experience 4",
      "Experience 5",
      "Experience 6",
      "Experience 7",
    ],
    price: { max: 25050, min: 250 },
    luogo: "Madrid",
    transfert: true,
    contact: [
      {
        tipo: "whatsapp",
        name: 45756874,
      },
      {
        tipo: "email",
        name: "example@gmail.com",
      },
      {
        tipo: "facebook",
        name: "tizio facebook",
      },
      {
        tipo: "twitter",
        name: "tizio twitter",
      },
      {
        tipo: "telegram",
        name: "tizio telegram",
      },
      {
        tipo: "instagram",
        name: "tizio instagram",
      },
      {
        tipo: "linkedin",
        name: "link",
      },
    ],
    general: {
      firstName: "Kevin",
      surName: "Bacher",
      annoNascita: 1984,
      luogoNascita: "Londra",
    },
    reviews: 4.5,
    comments: ["good", "Very good", "Molto premuroso"],
  },
  {
    id: 13,
    username: "Sara",
    password: "L0Ndra",
    email: "esempio@gmail.com",
    isPro: true,
    isAdmin: false,
    job: ["Full-stack", "Front-end", "Back-end"],
    image:
      "https://www.gazabhindi.com/wp-content/uploads/2018/05/%E0%A4%95%E0%A4%82%E0%A4%AA%E0%A5%8D%E0%A4%AF%E0%A5%82%E0%A4%9F%E0%A4%B0.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quaerat unde quibusdam et facere quas magni molestias enim dolore dignissimos harum!",
    program: [
      { name: "JS", icon: jsIcon },
      { name: "Python", icon: pythonIcon },
      { name: "HTML", icon: htmlIcon },
      { name: "CSS", icon: cssIcon },
      { name: "REACT", icon: reactIcon },
      { name: "TS", icon: typescriptIcon },
      { name: "C++", icon: cPlusPlusIcon },
      { name: "GITHUB", icon: githubIcon },
      { name: "C#", icon: cSharpIcon },
      { name: "JAVA", icon: javaIcon },
      { name: "NODE", icon: nodeIcon },
      { name: "BLENDER", icon: blenderIcon },
      { name: "RHINO 3D", icon: rhinoIcon },
      { name: "UNITY", icon: unityIcon },
    ],
    project: [
      {
        name: "Project 1",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
      {
        name: "Project 2",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
      {
        name: "Project 3",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
      {
        name: "Project 4",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
      {
        name: "Project 5",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
    ],
    someExperience: [
      "Experience 1",
      "Experience 2",
      "Experience 3",
      "Experience 4",
      "Experience 5",
      "Experience 6",
      "Experience 7",
    ],
    price: { max: 25050, min: 250 },
    luogo: "Roma",
    transfert: true,
    contact: [
      {
        tipo: "telefono",
        name: 45756874,
      },
      {
        tipo: "email",
        name: "example@gmail.com",
      },
      {
        tipo: "facebook",
        name: "tizio facebook",
      },
      {
        tipo: "twitter",
        name: "tizio twitter",
      },
      {
        tipo: "instagram",
        name: "tizio instagram",
      },
      {
        tipo: "linkedin",
        name: "link",
      },
    ],
    general: {
      firstName: "Kevin",
      surName: "Bacher",
      annoNascita: 1984,
      luogoNascita: "Londra",
    },
    reviews: 4.5,
    comments: ["good", "Very good", "Molto premuroso"],
  },
  {
    id: 14,
    username: "Lorenzo",
    password: "L0Ndra",
    email: "esempio@gmail.com",
    isPro: true,
    isAdmin: false,
    job: ["Full-stack", "Front-end", "Back-end"],
    image:
      "https://th.bing.com/th/id/R.a5723d93d4ac34f1a415fabd37b0ea61?rik=VtrekwI2noLTUA&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f1%2fDas-Keyboard-Professional-PNG.png&ehk=E7qV2x5dcZ%2f%2baJbMCCQkADCLW1MBNMRqDWwqjJSISDY%3d&risl=&pid=ImgRaw&r=0",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quaerat unde quibusdam et facere quas magni molestias enim dolore dignissimos harum!",
    program: [
      { name: "JS", icon: jsIcon },
      { name: "Python", icon: pythonIcon },
      { name: "HTML", icon: htmlIcon },
      { name: "CSS", icon: cssIcon },
      { name: "REACT", icon: reactIcon },
      { name: "TS", icon: typescriptIcon },
      { name: "C++", icon: cPlusPlusIcon },
      { name: "GITHUB", icon: githubIcon },
      { name: "C#", icon: cSharpIcon },
      { name: "JAVA", icon: javaIcon },
      { name: "NODE", icon: nodeIcon },
      { name: "BLENDER", icon: blenderIcon },
      { name: "RHINO 3D", icon: rhinoIcon },
      { name: "UNITY", icon: unityIcon },
    ],
    project: [
      {
        name: "Project 1",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
      {
        name: "Project 2",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
      {
        name: "Project 3",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
      {
        name: "Project 4",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
      {
        name: "Project 5",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
    ],
    someExperience: [
      "Experience 1",
      "Experience 2",
      "Experience 3",
      "Experience 4",
      "Experience 5",
      "Experience 6",
      "Experience 7",
    ],
    price: { max: 25050, min: 250 },
    luogo: "Roma",
    transfert: true,
    contact: [
      {
        tipo: "telefono",
        name: 45756874,
      },
      {
        tipo: "email",
        name: "example@gmail.com",
      },
      {
        tipo: "facebook",
        name: "tizio facebook",
      },
      {
        tipo: "twitter",
        name: "tizio twitter",
      },
      {
        tipo: "instagram",
        name: "tizio instagram",
      },
      {
        tipo: "linkedin",
        name: "link",
      },
    ],
    general: {
      firstName: "Kevin",
      surName: "Bacher",
      annoNascita: 1984,
      luogoNascita: "Londra",
    },
    reviews: 4.5,
    comments: ["good", "Very good", "Molto premuroso"],
  },
  {
    id: 15,
    username: "Giulia",
    password: "L0Ndra",
    email: "esempio@gmail.com",
    isPro: true,
    isAdmin: false,
    job: ["Full-stack", "Front-end", "Back-end"],
    image:
      "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quaerat unde quibusdam et facere quas magni molestias enim dolore dignissimos harum!",
    program: [
      { name: "JS", icon: jsIcon },
      { name: "Python", icon: pythonIcon },
      { name: "HTML", icon: htmlIcon },
      { name: "CSS", icon: cssIcon },
      { name: "REACT", icon: reactIcon },
      { name: "TS", icon: typescriptIcon },
      { name: "C++", icon: cPlusPlusIcon },
      { name: "GITHUB", icon: githubIcon },
      { name: "C#", icon: cSharpIcon },
      { name: "JAVA", icon: javaIcon },
      { name: "NODE", icon: nodeIcon },
      { name: "BLENDER", icon: blenderIcon },
      { name: "RHINO 3D", icon: rhinoIcon },
      { name: "UNITY", icon: unityIcon },
    ],
    project: [
      {
        name: "Project 1",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
      {
        name: "Project 2",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
      {
        name: "Project 3",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
      {
        name: "Project 4",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
      {
        name: "Project 5",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
    ],
    someExperience: [
      "Experience 1",
      "Experience 2",
      "Experience 3",
      "Experience 4",
      "Experience 5",
      "Experience 6",
      "Experience 7",
    ],
    price: { max: 25050, min: 250 },
    luogo: "Roma",
    transfert: true,
    contact: [
      {
        tipo: "telefono",
        name: 45756874,
      },
      {
        tipo: "email",
        name: "example@gmail.com",
      },
      {
        tipo: "facebook",
        name: "tizio facebook",
      },
      {
        tipo: "twitter",
        name: "tizio twitter",
      },
      {
        tipo: "instagram",
        name: "tizio instagram",
      },
      {
        tipo: "linkedin",
        name: "link",
      },
    ],
    general: {
      firstName: "Kevin",
      surName: "Bacher",
      annoNascita: 1984,
      luogoNascita: "Londra",
    },
    reviews: 4.5,
    comments: ["good", "Very good", "Molto premuroso"],
  },
  {
    id: 16,
    username: "Bernard",
    password: "L0Ndra",
    email: "esempio@gmail.com",
    isPro: true,
    isAdmin: false,
    job: ["Full-stack", "Front-end", "Back-end"],
    image:
      "https://th.bing.com/th/id/OIP.UEmMR4OfczDvWIUratzGkQHaFD?pid=ImgDet&rs=1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quaerat unde quibusdam et facere quas magni molestias enim dolore dignissimos harum!",
    program: [
      { name: "JS", icon: jsIcon },
      { name: "Python", icon: pythonIcon },
      { name: "HTML", icon: htmlIcon },
      { name: "CSS", icon: cssIcon },
      { name: "REACT", icon: reactIcon },
      { name: "TS", icon: typescriptIcon },
      { name: "C++", icon: cPlusPlusIcon },
      { name: "GITHUB", icon: githubIcon },
      { name: "C#", icon: cSharpIcon },
      { name: "JAVA", icon: javaIcon },
      { name: "NODE", icon: nodeIcon },
      { name: "BLENDER", icon: blenderIcon },
      { name: "RHINO 3D", icon: rhinoIcon },
      { name: "UNITY", icon: unityIcon },
    ],
    project: [
      {
        name: "Project 1",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
      {
        name: "Project 2",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
      {
        name: "Project 3",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
      {
        name: "Project 4",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
      {
        name: "Project 5",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
    ],
    someExperience: [
      "Experience 1",
      "Experience 2",
      "Experience 3",
      "Experience 4",
      "Experience 5",
      "Experience 6",
      "Experience 7",
    ],
    price: { max: 25050, min: 250 },
    luogo: "Roma",
    transfert: true,
    contact: [
      {
        tipo: "telefono",
        name: 45756874,
      },
      {
        tipo: "email",
        name: "example@gmail.com",
      },
      {
        tipo: "facebook",
        name: "tizio facebook",
      },
      {
        tipo: "twitter",
        name: "tizio twitter",
      },
      {
        tipo: "instagram",
        name: "tizio instagram",
      },
      {
        tipo: "linkedin",
        name: "link",
      },
    ],
    general: {
      firstName: "Kevin",
      surName: "Bacher",
      annoNascita: 1984,
      luogoNascita: "Londra",
    },
    reviews: 4.5,
    comments: ["good", "Very good", "Molto premuroso"],
  },
  {
    id: 17,
    username: "Alessia",
    password: "L0Ndra",
    email: "esempio@gmail.com",
    isPro: true,
    isAdmin: false,
    job: ["Full-stack", "Front-end", "Back-end"],
    image:
      "https://th.bing.com/th/id/R.b1dca103a08fb09ab6093c1843206e62?rik=poC1LUfrAnasRg&riu=http%3a%2f%2fthesaturnherald.com%2fwp-content%2fuploads%2f2019%2f08%2fThe-Beatles.png&ehk=fRCOKcIZLuTKJTDe5UT%2fU0FlIEhc5Cv3L6jFWg5Rwmk%3d&risl=&pid=ImgRaw&r=0",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quaerat unde quibusdam et facere quas magni molestias enim dolore dignissimos harum!",
    program: [
      { name: "JS", icon: jsIcon },
      { name: "Python", icon: pythonIcon },
      { name: "HTML", icon: htmlIcon },
      { name: "CSS", icon: cssIcon },
      { name: "REACT", icon: reactIcon },
      { name: "TS", icon: typescriptIcon },
      { name: "C++", icon: cPlusPlusIcon },
      { name: "GITHUB", icon: githubIcon },
      { name: "C#", icon: cSharpIcon },
      { name: "JAVA", icon: javaIcon },
      { name: "NODE", icon: nodeIcon },
      { name: "BLENDER", icon: blenderIcon },
      { name: "RHINO 3D", icon: rhinoIcon },
      { name: "UNITY", icon: unityIcon },
    ],
    project: [
      {
        name: "Project 1",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
      {
        name: "Project 2",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
      {
        name: "Project 3",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
      {
        name: "Project 4",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
      {
        name: "Project 5",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
    ],
    someExperience: [
      "Experience 1",
      "Experience 2",
      "Experience 3",
      "Experience 4",
      "Experience 5",
      "Experience 6",
      "Experience 7",
    ],
    price: { max: 25050, min: 250 },
    luogo: "Roma",
    transfert: true,
    contact: [
      {
        tipo: "telefono",
        name: 45756874,
      },
      {
        tipo: "email",
        name: "example@gmail.com",
      },
      {
        tipo: "facebook",
        name: "tizio facebook",
      },
      {
        tipo: "twitter",
        name: "tizio twitter",
      },
      {
        tipo: "instagram",
        name: "tizio instagram",
      },
      {
        tipo: "linkedin",
        name: "link",
      },
    ],
    general: {
      firstName: "Kevin",
      surName: "Bacher",
      annoNascita: 1984,
      luogoNascita: "Londra",
    },
    reviews: 4.5,
    comments: ["good", "Very good", "Molto premuroso"],
  },
  {
    id: 18,
    username: "Mauro",
    password: "L0Ndra",
    email: "esempio@gmail.com",
    isPro: true,
    isAdmin: false,
    job: ["Full-stack", "Front-end", "Back-end"],
    image:
      "https://th.bing.com/th/id/OIP.o2UpCnJR1l2GyvdN3wBcqwHaJL?pid=ImgDet&rs=1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quaerat unde quibusdam et facere quas magni molestias enim dolore dignissimos harum!",
    program: [
      { name: "JS", icon: jsIcon },
      { name: "Python", icon: pythonIcon },
      { name: "HTML", icon: htmlIcon },
      { name: "CSS", icon: cssIcon },
      { name: "REACT", icon: reactIcon },
      { name: "TS", icon: typescriptIcon },
      { name: "C++", icon: cPlusPlusIcon },
      { name: "GITHUB", icon: githubIcon },
      { name: "C#", icon: cSharpIcon },
      { name: "JAVA", icon: javaIcon },
      { name: "NODE", icon: nodeIcon },
      { name: "BLENDER", icon: blenderIcon },
      { name: "RHINO 3D", icon: rhinoIcon },
      { name: "UNITY", icon: unityIcon },
    ],
    project: [
      {
        name: "Project 1",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
      {
        name: "Project 2",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
      {
        name: "Project 3",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
      {
        name: "Project 4",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
      {
        name: "Project 5",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
    ],
    someExperience: [
      "Experience 1",
      "Experience 2",
      "Experience 3",
      "Experience 4",
      "Experience 5",
      "Experience 6",
      "Experience 7",
    ],
    price: { max: 25050, min: 250 },
    luogo: "Roma",
    transfert: true,
    contact: [
      {
        tipo: "telefono",
        name: 45756874,
      },
      {
        tipo: "email",
        name: "example@gmail.com",
      },
      {
        tipo: "facebook",
        name: "tizio facebook",
      },
      {
        tipo: "twitter",
        name: "tizio twitter",
      },
      {
        tipo: "instagram",
        name: "tizio instagram",
      },
      {
        tipo: "linkedin",
        name: "link",
      },
    ],
    general: {
      firstName: "Kevin",
      surName: "Bacher",
      annoNascita: 1984,
      luogoNascita: "Londra",
    },
    reviews: 4.5,
    comments: ["good", "Very good", "Molto premuroso"],
  },
  {
    id: 19,
    username: "Giuliano",
    password: "L0Ndra",
    email: "esempio@gmail.com",
    isPro: true,
    isAdmin: false,
    job: ["Full-stack", "Front-end", "Back-end"],
    image:
      "https://th.bing.com/th/id/R.ddf77b58ca5a464ab8beb0576111a2a1?rik=pQSCB0LH8fslzA&pid=ImgRaw&r=0",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quaerat unde quibusdam et facere quas magni molestias enim dolore dignissimos harum!",
    program: [
      { name: "JS", icon: jsIcon },
      { name: "Python", icon: pythonIcon },
      { name: "HTML", icon: htmlIcon },
      { name: "CSS", icon: cssIcon },
      { name: "REACT", icon: reactIcon },
      { name: "TS", icon: typescriptIcon },
      { name: "C++", icon: cPlusPlusIcon },
      { name: "GITHUB", icon: githubIcon },
      { name: "C#", icon: cSharpIcon },
      { name: "JAVA", icon: javaIcon },
      { name: "NODE", icon: nodeIcon },
      { name: "BLENDER", icon: blenderIcon },
      { name: "RHINO 3D", icon: rhinoIcon },
      { name: "UNITY", icon: unityIcon },
    ],
    project: [
      {
        name: "Project 1",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
      {
        name: "Project 2",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
      {
        name: "Project 3",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
      {
        name: "Project 4",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
      {
        name: "Project 5",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
    ],
    someExperience: [
      "Experience 1",
      "Experience 2",
      "Experience 3",
      "Experience 4",
      "Experience 5",
      "Experience 6",
      "Experience 7",
    ],
    price: { max: 25050, min: 250 },
    luogo: "Roma",
    transfert: true,
    contact: [
      {
        tipo: "telefono",
        name: 45756874,
      },
      {
        tipo: "email",
        name: "example@gmail.com",
      },
      {
        tipo: "facebook",
        name: "tizio facebook",
      },
      {
        tipo: "twitter",
        name: "tizio twitter",
      },
      {
        tipo: "instagram",
        name: "tizio instagram",
      },
      {
        tipo: "linkedin",
        name: "link",
      },
    ],
    general: {
      firstName: "Kevin",
      surName: "Bacher",
      annoNascita: 1984,
      luogoNascita: "Londra",
    },
    reviews: 4.5,
    comments: ["good", "Very good", "Molto premuroso"],
  },
  {
    id: 20,
    username: "Miriam",
    password: "L0Ndra",
    email: "esempio@gmail.com",
    isPro: true,
    isAdmin: false,
    job: ["Full-stack", "Front-end", "Back-end"],
    image:
      "https://www.gazabhindi.com/wp-content/uploads/2018/05/%E0%A4%95%E0%A4%82%E0%A4%AA%E0%A5%8D%E0%A4%AF%E0%A5%82%E0%A4%9F%E0%A4%B0.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quaerat unde quibusdam et facere quas magni molestias enim dolore dignissimos harum!",
    program: [
      { name: "JS", icon: jsIcon },
      { name: "Python", icon: pythonIcon },
      { name: "HTML", icon: htmlIcon },
      { name: "CSS", icon: cssIcon },
      { name: "REACT", icon: reactIcon },
      { name: "TS", icon: typescriptIcon },
      { name: "C++", icon: cPlusPlusIcon },
      { name: "GITHUB", icon: githubIcon },
      { name: "C#", icon: cSharpIcon },
      { name: "JAVA", icon: javaIcon },
      { name: "NODE", icon: nodeIcon },
      { name: "BLENDER", icon: blenderIcon },
      { name: "RHINO 3D", icon: rhinoIcon },
      { name: "UNITY", icon: unityIcon },
    ],
    project: [
      {
        name: "Project 1",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
      {
        name: "Project 2",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
      {
        name: "Project 3",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
      {
        name: "Project 4",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
      {
        name: "Project 5",
        image:
          "https://wallpaperheart.com/wp-content/uploads/2018/08/bike-wallpaper-12.jpg",
      },
    ],
    someExperience: [
      "Experience 1",
      "Experience 2",
      "Experience 3",
      "Experience 4",
      "Experience 5",
      "Experience 6",
      "Experience 7",
    ],
    price: { max: 25050, min: 250 },
    luogo: "Roma",
    transfert: true,
    contact: [
      {
        tipo: "telefono",
        name: 45756874,
      },
      {
        tipo: "email",
        name: "example@gmail.com",
      },
      {
        tipo: "facebook",
        name: "tizio facebook",
      },
      {
        tipo: "twitter",
        name: "tizio twitter",
      },
      {
        tipo: "instagram",
        name: "tizio instagram",
      },
      {
        tipo: "linkedin",
        name: "link",
      },
    ],
    general: {
      firstName: "Kevin",
      surName: "Bacher",
      annoNascita: 1984,
      luogoNascita: "Londra",
    },
    reviews: 4.5,
    comments: ["good", "Very good", "Molto premuroso"],
  },
];
