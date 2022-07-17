import { WorkItemProps } from 'components/work/WorkItem';
import prodigy from 'assets/logos/prodigy.png';
import canadaLife from 'assets/logos/canadaLife.png';
import humi from 'assets/logos/humi.svg';

import Tools from './tools/tool_items';

export const PROFESSIONAL_WORK_ITEMS: Array<WorkItemProps> = [
  {
    id: 'humi',
    title: 'Humi',
    icon: { src: humi, alt: 'Humi Logo' },
    startDate: new Date(2022, 4, 3),
    endDate: new Date(),
  },
  {
    id: 'prodigy',
    title: 'Prodigy Education',
    icon: { src: prodigy, alt: 'Prodigy Education Logo' },
    startDate: new Date(2021, 3, 12),
    endDate: new Date(2022, 3, 29),
    description: [
      'Prodigy was my first professional experience working in React, having only previously used React for personal projects. \
    This was an excellent opportunity to gain an understanding of more advanced React concepts and learn many lessons in writing clean, maintainable, \
    readable code from other talented developers.',
      'I brought along my vast a11y knowledge I had acquired from my previous roles, and used \
    it to teach others how to build and test accessible components. This work required regularly creating new components, and \
    refactoring legacy ones in the StoryBook component library.',
      'My time at Prodigy also opened up many opportunities to learn other skills. I spent a lot of time working with co-op students \
    and Junior Developers. This allowed me to discover the joy and value in mentoring others, while also improving my skills and ability to lead.',
      "During my time at Prodigy, I discovered a large, complex piece of tech-debt, that was degrading the end-user experience while also impeding the \
    developer's ability to test code. I learned how to define a project plan so that my team could work together to resolve the issue. The plan included \
    requirements gathering, metrics measurements, problem definitions, and many technical spikes to gain a deep understanding of the underlying issue.",
    ],
    tools: [
      Tools.React,
      Tools.JavaScript,
      Tools.TypeScript,
      Tools.GraphQL,
      Tools.StyledComponents,
      Tools.PostgreSQL,
      Tools.StoryBook,
      Tools.Docker,
      Tools.Cypress,
      Tools.Redux,
      Tools.Backbone,
    ],
  },
  {
    id: 'canada_life',
    title: 'Canada Life Assurance Company',
    icon: {
      src: canadaLife,
      round: true,
      alt: 'Canada Life Assurance Company Logo',
    },
    startDate: new Date(2016, 4, 1),
    endDate: new Date(2021, 3, 11),
    description: [
      'I first started working at Canada Life in my 3rd year of university as a 16 month internship. \
      I worked on the application support team which involved both debugging and development. I often had \
      to work with legacy code and was a member of the 24/7 on-call production support rotation. This position taught many lessons \
      in working under pressure and was my first introduction into professional software development. I continued \
      to work in this position part-time during my final year of school and shortly after graduation.',
      'In 2018 I was as one of 5 developers chosen to work on redesigning the site I had supported in my previous \
      role. This was my introduction to working as a full-stack developer, and in an agile environment.',
      'In 2019 I moved once more to another Agile lab in Toronto, focusing on a different area of the business. \
      During this time, I had a heavy focus on accessibility, being one of the main contributors in bringing our site \
      to meet WCAG AA standards.',
    ],
    tools: [
      Tools.Angular,
      Tools.Java,
      Tools.TypeScript,
      Tools.Sass,
      Tools.Mongo,
      Tools.Docker,
      Tools.CSharp,
      Tools.ASP,
      Tools.Oracle,
      Tools.Python,
      Tools.Unix,
      Tools.Windows,
      Tools.Node,
      Tools.C,
    ],
  },
];
