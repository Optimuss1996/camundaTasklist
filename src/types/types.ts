export interface Task {
  id: string;
  name: string;
  assignee: string | null;
  owner: string | null;
  description: string | null;
  created: string; // ISO date string
  due: string | null;
  followUp: string | null;
  delegationState: string | null;
  suspended: boolean;
  priority: number;

  taskDefinitionKey: string;
  parentTaskId: string | null;

  processInstanceId: string;
  processDefinitionId: string;

  executionId: string;
  caseExecutionId: string | null;
  caseInstanceId: string | null;
  caseDefinitionId: string | null;

  tenantId: string | null;

  formKey: string | null;
  camundaFormRef: string | null;
  lastUpdated: string | null;
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
