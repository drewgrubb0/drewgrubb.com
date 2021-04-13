export interface SkillsQueryRequest {
  readonly skillsData: SkillsQueryData;
}

export interface SkillsQueryData {
  readonly edges: SkillsQueryEdge[];
}

export interface SkillsQueryEdge {
  readonly node: SkillsQueryNode;
}

export interface SkillsQueryNode {
  readonly frontmatter: SkillsData;
  readonly html: string;
}

export interface SkillsData {
  readonly title: string;
  readonly proficientSkills: string[];
  readonly projectSkills: string[];
  readonly icon?: string;
  readonly html: string;
}
