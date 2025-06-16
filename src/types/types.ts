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

// "id": "2246dd34-420e-11f0-82e6-ee5ef87f117f",
// "name": "Assign Reviewer",
// "assignee": "demo",
// "created": "2025-06-05T17:38:11.962+0430",
// "due": null,
// "followUp": null,
// "lastUpdated": null,
// "delegationState": null,
// "description": null,
// "executionId": "22468f04-420e-11f0-82e6-ee5ef87f117f",
// "owner": null,
// "parentTaskId": null,
// "priority": 50,
// "processDefinitionId": "ReviewInvoice:1:20f5a4fc-420e-11f0-82e6-ee5ef87f117f",
// "processInstanceId": "22468f04-420e-11f0-82e6-ee5ef87f117f",
// "taskDefinitionKey": "assignReviewer",
// "caseExecutionId": null,
// "caseInstanceId": null,
// "caseDefinitionId": null,
// "suspended": false,
// "formKey": "embedded:app:forms/assign-reviewer.html",
// "camundaFormRef": null,
// "tenantId": null
