import { WorkItemProps } from 'components/work/WorkItem';
import prodigy from 'assets/logos/prodigy.png';
import canadaLife from 'assets/logos/canadaLife.png';

import Tools from './tools/tool_items';

export const PROFESSIONAL_WORK_ITEMS: WorkItemProps[] = [
  {
    title: 'Prodigy Education',
    icon: { src: prodigy, alt: 'Prodigy Education Logo' },
    startDate: new Date(2021, 3, 12),
    endDate: new Date(),
    description: [],
  },
  {
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
      to work with legacy code and was part of a 24/7 on-call rotation. This position taught many lessons \
      in working under pressure and was my first introduction into professional software development. I continued \
      to work in this position part-time during my final year of school and shortly after graduation.',
      'In 2018 I was as one of 5 developers chosen to work on redesigining the site I was supporting in my previous \
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
      Tools.Spring,
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
