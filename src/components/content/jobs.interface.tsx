export interface JobQueryRequest {
  readonly jobsData: JobQueryData;
}

export interface JobQueryData {
  readonly group: JobQueryGroup[];
}

export interface JobQueryGroup {
  readonly edges: JobQueryEdge[];
  readonly fieldValue: string;
}

export interface JobQueryEdge {
  readonly node: JobQueryNode;
}

export interface JobQueryNode {
  readonly frontmatter: JobData;
  readonly html: string;
}

export interface JobData {
  readonly title: string;
  readonly location: string;
  readonly range: string;
  readonly url: string;
  readonly html: string;
}
