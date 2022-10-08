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
}

const Tools: { [tool: string]: Tool } = {
  Angular: {
    id: 'angular',
    name: 'Angular',
    src: angular,
  },
  Java: {
    id: 'java',
    name: 'Java',
    src: java,
  },
  Python: {
    id: 'python',
    name: 'Python',
    src: python,
  },
  Oracle: {
    id: 'oracle',
    name: 'Oracle',
    src: oracle,
  },
  Windows: {
    id: 'windows',
    name: 'Windows',
    src: windows,
  },
  TypeScript: {
    id: 'typescript',
    name: 'TypeScript',
    src: typescript,
  },
  Docker: {
    id: 'docker',
    name: 'Docker',
    src: docker,
  },
  C: {
    id: 'c',
    name: 'C',
    src: c,
  },
  Sass: {
    id: 'sass',
    name: 'Sass',
    src: sass,
  },
  Node: {
    id: 'node',
    name: 'Node',
    src: node,
  },
  Mongo: {
    id: 'mongo',
    name: 'Mongo',
    src: mongo,
  },
  CSharp: {
    id: 'csharp',
    name: 'CSharp',
    src: csharp,
  },
  ASP: {
    id: 'asp',
    name: 'ASP.Net',
    src: asp,
  },
  Unix: {
    id: 'unix',
    name: 'Unix',
    src: unix,
  },
  Backbone: {
    id: 'backbone',
    name: 'Backbone',
    src: backbone,
  },
  Redux: {
    id: 'redux',
    name: 'Redux',
    src: redux,
  },
  Cypress: {
    id: 'cypress',
    name: 'Cypress',
    src: cypress,
  },
  StoryBook: {
    id: 'storybook',
    name: 'StoryBook',
    src: storybook,
  },
  PostgreSQL: {
    id: 'postgresql',
    name: 'PostgreSQL',
    src: postgresql,
  },
  StyledComponents: {
    id: 'styledcomponents',
    name: 'Styled Components',
    src: styledcomponents,
  },
  GraphQL: {
    id: 'graphql',
    name: 'GraphQL',
    src: graphql,
  },
  JavaScript: {
    id: 'javascript',
    name: 'JavaScript',
    src: javascript,
  },
  React: {
    id: 'react',
    name: 'React',
    src: react,
  },
};

export default Tools;
