export interface Task {
  id: string;
  name: string;
  assignee: string | null;
  created: string;
  due: string | null;
  description: string | null;
}

export interface Filter {
  id: string;
  resourceType: "Task";
  name: string;
  owner: string | null;
  query: {
    assignee?: string;
    candidateGroups?: string;
    [key: string]: any;
  };
  properties?: {
    color?: string;
    priority?: number;
    [key: string]: any;
  };
  itemCount?: number;
  count?: number;
}
