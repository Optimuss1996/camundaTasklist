export interface Task {
  id: string;
  name: string;
  assignee: string | null;
  created: string; // ISO date string
  due: string | null;
  followUp: string | null;
  lastUpdated: string | null;
  delegationState: string | null;
  description: string | null;
  executionId: string;
  owner: string | null;
  parentTaskId: string | null;
  priority: number;
  processDefinitionId: string;
  processInstanceId: string;
  taskDefinitionKey: string;
  caseExecutionId: string | null;
  caseInstanceId: string | null;
  caseDefinitionId: string | null;
  suspended: boolean;
  formKey: string | null;
  camundaFormRef: string | null;
  tenantId: string | null;
}
export interface ProcessDefinition {
  id: string;
  key: string;
  name: string;
  description?: string;
  version: string;
  resource: string;
  deploymentId: string;
}
