
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/EJN_training/',
  component: ComponentCreator('/EJN_training/','24d'),
  exact: true,
},
{
  path: '/EJN_training/__docusaurus/debug',
  component: ComponentCreator('/EJN_training/__docusaurus/debug','84e'),
  exact: true,
},
{
  path: '/EJN_training/__docusaurus/debug/config',
  component: ComponentCreator('/EJN_training/__docusaurus/debug/config','15c'),
  exact: true,
},
{
  path: '/EJN_training/__docusaurus/debug/content',
  component: ComponentCreator('/EJN_training/__docusaurus/debug/content','978'),
  exact: true,
},
{
  path: '/EJN_training/__docusaurus/debug/globalData',
  component: ComponentCreator('/EJN_training/__docusaurus/debug/globalData','acc'),
  exact: true,
},
{
  path: '/EJN_training/__docusaurus/debug/metadata',
  component: ComponentCreator('/EJN_training/__docusaurus/debug/metadata','74b'),
  exact: true,
},
{
  path: '/EJN_training/__docusaurus/debug/registry',
  component: ComponentCreator('/EJN_training/__docusaurus/debug/registry','205'),
  exact: true,
},
{
  path: '/EJN_training/__docusaurus/debug/routes',
  component: ComponentCreator('/EJN_training/__docusaurus/debug/routes','975'),
  exact: true,
},
{
  path: '/EJN_training/docs',
  component: ComponentCreator('/EJN_training/docs','721'),
  
  routes: [
{
  path: '/EJN_training/docs/01-Introduction',
  component: ComponentCreator('/EJN_training/docs/01-Introduction','040'),
  exact: true,
},
{
  path: '/EJN_training/docs/02-BasicSkills',
  component: ComponentCreator('/EJN_training/docs/02-BasicSkills','55b'),
  exact: true,
},
{
  path: '/EJN_training/docs/03-AdvancedSkills',
  component: ComponentCreator('/EJN_training/docs/03-AdvancedSkills','1e5'),
  exact: true,
},
{
  path: '/EJN_training/docs/04-HandsOnCourse',
  component: ComponentCreator('/EJN_training/docs/04-HandsOnCourse','61a'),
  exact: true,
},
{
  path: '/EJN_training/docs/05-CaseStudies',
  component: ComponentCreator('/EJN_training/docs/05-CaseStudies','a47'),
  exact: true,
},
{
  path: '/EJN_training/docs/06-BestPracticesCloud',
  component: ComponentCreator('/EJN_training/docs/06-BestPracticesCloud','582'),
  exact: true,
},
{
  path: '/EJN_training/docs/07-DataSources',
  component: ComponentCreator('/EJN_training/docs/07-DataSources','e48'),
  exact: true,
},
{
  path: '/EJN_training/docs/08-InterviewQuestions',
  component: ComponentCreator('/EJN_training/docs/08-InterviewQuestions','44b'),
  exact: true,
},
{
  path: '/EJN_training/docs/09-BooksAndCourses',
  component: ComponentCreator('/EJN_training/docs/09-BooksAndCourses','988'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
