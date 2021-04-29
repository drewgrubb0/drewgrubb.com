import { useStaticQuery, graphql } from 'gatsby';
import React, { FC } from 'react';
import {
  SkillsData,
  SkillsQueryEdge,
  SkillsQueryRequest,
} from './skills.interface';

const Skills: FC = () => {
  const queryResult: SkillsQueryRequest = useStaticQuery(graphql`
    query {
      skillsData: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/skills/" } }
        sort: { fields: frontmatter___position, order: ASC }
      ) {
        edges {
          node {
            frontmatter {
              title
              proficientSkills
              projectSkills
            }
            html
          }
        }
      }
    }
  `);

  const skillDataMapped: SkillsData[] = queryResult.skillsData.edges.map(
    (edge: SkillsQueryEdge) => {
      return {
        title: edge.node.frontmatter.title,
        proficientSkills: edge.node.frontmatter.proficientSkills,
        projectSkills: edge.node.frontmatter.projectSkills,
        html: edge.node.html,
      };
    }
  );

  return (
    <div id="skills">
      {skillDataMapped.map((skillData: SkillsData, i: number) => {
        return (
          <div key={`skillset-${i}`}>
            <h2>{skillData.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: skillData.html }} />
          </div>
        );
      })}
    </div>
  );
};

export default Skills;
