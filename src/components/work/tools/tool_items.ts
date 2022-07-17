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
import backbone from 'assets/logos/backbone.png';
import redux from 'assets/logos/redux.png';
import cypress from 'assets/logos/cypress.png';
import storybook from 'assets/logos/storybook.png';
import postgresql from 'assets/logos/postgresql.png';
import styledcomponents from 'assets/logos/styledcomponents.png';
import graphql from 'assets/logos/graphql.svg';
import javascript from 'assets/logos/javascript.png';
import react from 'assets/logos/react.svg';

export interface Tool {
  id: string;
  name: string;
  src: string;
  description?: Array<string> | { [key: string]: Array<string> };
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
      'Experience with MVC, CompletableFutures, and JUnit',
    ],
  },
  Python: {
    id: 'python',
    name: 'Python',
    src: python,
    description: [
      'Periodic writing and maintaining of batch scripts for data visualization using Spark DataFrames',
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
    description: {
      prodigy: [
        'Worked on team converting our component library from JavaScript to TypeScript',
      ],
      canada_life: [
        'All Angular and Node applications & unit tests were written in TypeScript',
      ],
    },
  },
  Docker: {
    id: 'docker',
    name: 'Docker',
    src: docker,
    description: {
      prodigy: [
        'Updated CI configuration to enable Docker Layer Caching and reduce deployment times',
      ],
      canada_life: [
        'Experience writing Docker and Docker Compose files for building and deploying Java and Angular apps',
        'Work often involved SSHing into running Docker Containers for configuration and debugging',
      ],
    },
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
      'Often wrote complex data migration scripts and data investigation queries',
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
      'Supported multiple Unix servers that hosted sites via Docker containers, often SSHing in to configure and debug',
    ],
  },
  Backbone: {
    id: 'backbone',
    name: 'Backbone',
    src: backbone,
    description: [
      'Often worked in legacy backbone code to update pages and fix bugs',
      'Migrated many components to React, re-writing from scratch',
    ],
  },
  Redux: {
    id: 'redux',
    name: 'Redux',
    src: redux,
    description: [
      'Much of the legacy code relied on Redux for state management',
      'Often had to work with complex actions, reducers, and dispatchers',
    ],
  },
  Cypress: {
    id: 'cypress',
    name: 'Cypress',
    src: cypress,
    description: [
      'Rewrote entire test suites for improved reliability',
      'Reduced total runtime of E2E tests by ~20 minutes',
      'Experience writing custom commands and working with Cypress Testing Library',
    ],
  },
  StoryBook: {
    id: 'storybook',
    name: 'StoryBook',
    src: storybook,
    description: [
      'All work in the component library required updates to StoryBook',
    ],
  },
  PostgreSQL: {
    id: 'postgresql',
    name: 'PostgreSQL',
    src: postgresql,
    description: [
      'Created tables, seeders, and migrations required for various features',
      'Often wrote queries to analyze and manipulate data in dev databases',
    ],
  },
  StyledComponents: {
    id: 'styledcomponents',
    name: 'Styled Components',
    src: styledcomponents,
    description: [
      'Designed components with complex interactions using props, attributes, and css selectors',
    ],
  },
  GraphQL: {
    id: 'graphql',
    name: 'GraphQL',
    src: graphql,
    description: [
      'Created resolvers and services to support new features',
      'Wrote many mutations and queries to manipulate and view data from the front-end',
    ],
  },
  JavaScript: {
    id: 'javascript',
    name: 'JavaScript',
    src: javascript,
    description: [
      'Both the front-end and back-end were maintained and written in JavaScript',
    ],
  },
  React: {
    id: 'react',
    name: 'React',
    src: react,
    description: [
      'Front-end was written in React',
      'Experience with many libraries such as react-router and react-spring',
      'Extensive unit testing with Jest and React Testing Library',
    ],
  },
};

export default Tools;
