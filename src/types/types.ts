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

// --- Process Definition from /process-definition/:id API ---
export type ProcessDefinition = {
  id: string;
  key: string;
  name: string;
  version: number;
  resource: string;
};
// --- Process Instance History from /history/process-instance/:id API ---
export type ProcessInstanceHistory = {
  id: string;
  startUserId: string;
  startTime: string;
  processDefinitionId: string;
  processDefinitionName: string;
};
// --- Final Combined Model for Display in UI ---
export type EnrichedTask = {
  id: string;
  name: string;
  assignee: string;
  created: string;
  priority: number;

  processDefinitionId: string;
  processDefinitionName: string;
  processDefinitionKey: string;

  processInstanceId: string;
  processStarter: string;
  processStartTime: string;
};
