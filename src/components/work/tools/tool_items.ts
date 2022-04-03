import { Tool } from './ToolItem';

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
import spring from 'assets/logos/spring.png';

const Tools: { [tool: string]: Tool } = {
  Angular: {
    id: 'angular',
    name: 'Angular',
    src: angular,
    description: [
      '2+ years building various applications with Angular 6 through 9',
      'Experience with ngx-translate, ngx-bootstrap, jasmine unit testing and more.',
    ],
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
    description: [
      '2+ years debugging, updating, and maintaining legacy batch programs',
    ],
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
  Spring: {
    id: 'spring',
    name: 'Spring Framework',
    src: spring,
  },
};

export default Tools;
