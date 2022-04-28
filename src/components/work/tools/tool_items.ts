import angular from 'assets/logos/angular.svg';
import java from 'assets/logos/java.png';
import python from 'assets/logos/python.png';
import oracle from 'assets/logos/oracle.png';
import windows from 'assets/logos/windows.png';
import typescript from 'assets/logos/typescript.png';
import docker from 'assets/logos/docker.png';
import c from 'assets/logos/c.png';
import sass from 'assets/logos/sass.png';
import node from 'assets/logos/node.png';
import mongo from 'assets/logos/mongo.png';
import csharp from 'assets/logos/csharp.png';
import asp from 'assets/logos/asp.png';
import unix from 'assets/logos/unix.png';

export interface Tool {
  id: string;
  name: string;
  src: string;
  description?: string[];
}

const Tools: { [tool: string]: Tool } = {
  Angular: {
    id: 'angular',
    name: 'Angular',
    src: angular,
    description: [
      'Built various applications with Angular 6 through 9',
      'Experience with ngx-translate, ngx-bootstrap, jasmine unit testing and more',
    ],
  },
  Java: {
    id: 'java',
    name: 'Java',
    src: java,
    description: [
      'Developed middleware with Java Spring Boot',
      'Experience in consuming APIs from .NET backend, and exposing API endpoints to Angular front-end',
      'Integrated with other libraries such as MongoDB and Redis',
      'Experience with MVC, CompleteableFutures, and JUnit',
    ],
  },
  Python: {
    id: 'python',
    name: 'Python',
    src: python,
    description: [
      'Periodic writing and maintaining of batch scripts for data visualization using Spark dataframes',
    ],
  },
  Oracle: {
    id: 'oracle',
    name: 'Oracle',
    src: oracle,
    description: [
      'Wrote and maintained various PLSQL scripts',
      'As part of production support often had to create queries to understand data issues',
    ],
  },
  Windows: {
    id: 'windows',
    name: 'Windows',
    src: windows,
    description: [
      'Supported Windows servers that hosted our websites using Microsoft IIS',
      'Experience configuring and deploying sites, running and writing shell scripts, using MSMQ, and more',
    ],
  },
  TypeScript: {
    id: 'typescript',
    name: 'TypeScript',
    src: typescript,
    description: [
      'All Angular and Node applications & unit tests were written in TypeScript',
    ],
  },
  Docker: {
    id: 'docker',
    name: 'Docker',
    src: docker,
    description: [
      'Experience writing Docker and Docker Compose files for building and deploying Java and Angular apps',
      'Work often involved SSHing into running Docker Containers for configuration and debugging',
    ],
  },
  C: {
    id: 'c',
    name: 'C',
    src: c,
    description: ['Debugged, updated, and maintained legacy batch programs'],
  },
  Sass: {
    id: 'sass',
    name: 'Sass',
    src: sass,
    description: ['All Angular front-end applications were styled using Sass'],
  },
  Node: {
    id: 'node',
    name: 'Node',
    src: node,
    description: ['Occasional work configuring Node REST APIs'],
  },
  Mongo: {
    id: 'mongo',
    name: 'Mongo',
    src: mongo,
    description: [
      'Maintained and configured various Mongo collections',
      'Often wrote complex data migration and data investigation queries',
    ],
  },
  CSharp: {
    id: 'csharp',
    name: 'CSharp',
    src: csharp,
    description: [
      'Wrote and maintained backend REST APIs in C#',
      'Integrated with Oracle database for CRUD operations',
    ],
  },
  ASP: {
    id: 'asp',
    name: 'ASP.Net',
    src: asp,
    description: [
      'Supported legacy ASP.Net site, often fixing bugs and adding pages/features',
    ],
  },
  Unix: {
    id: 'unix',
    name: 'Unix',
    src: unix,
    description: [
      'Supported mulitple Unix servers that hosted sites via Docker containers, often SSHing in to configure and debug',
    ],
  },
};

export default Tools;
