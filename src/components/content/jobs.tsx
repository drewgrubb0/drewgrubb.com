import React, { FunctionComponent } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import {
  JobData,
  JobQueryGroup,
  JobQueryEdge,
  JobQueryRequest,
} from './jobs.interface';

const Jobs: FunctionComponent = () => {
  const queryResult: JobQueryRequest = useStaticQuery(graphql`
    query {
      jobsData: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/jobs/" } }
        sort: { fields: frontmatter___sortStartDate, order: DESC }
      ) {
        group(field: frontmatter___company) {
          edges {
            node {
              frontmatter {
                title
                location
                range
                url
              }
              html
            }
          }
          fieldValue
        }
      }
    }
  `);

  const jobDataByCompanyGroup = new Map<string, JobData[]>();

  queryResult.jobsData.group.forEach((companyGroup: JobQueryGroup) => {
    const companyJobData: JobData[] = companyGroup.edges.map(
      (groupEdge: JobQueryEdge) => {
        return {
          title: groupEdge.node.frontmatter.title,
          location: groupEdge.node.frontmatter.location,
          range: groupEdge.node.frontmatter.range,
          url: groupEdge.node.frontmatter.url,
          html: groupEdge.node.html,
        };
      }
    );

    jobDataByCompanyGroup.set(companyGroup.fieldValue, companyJobData);
  });

  const companyNames: string[] = Array.from(jobDataByCompanyGroup.keys());

  return (
    <div>
      {Array.from(jobDataByCompanyGroup.values()).map(
        (jobDataList: JobData[], i: number) => {
          return (
            <div key={`company-${i}`}>
              <h1>{companyNames[i]}</h1>
              {jobDataList.map((jobData: JobData, j: number) => {
                return (
                  <div
                    key={`pos-${j}`}
                    dangerouslySetInnerHTML={{ __html: jobData.html }}
                  />
                );
              })}
            </div>
          );
        }
      )}
    </div>
  );
};

export default Jobs;
