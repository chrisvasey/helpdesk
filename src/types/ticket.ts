export type Priority = 'low' | 'medium' | 'high' | 'critical';
export type Status = 'new' | 'in_progress' | 'pending' | 'resolved' | 'closed';
export type Category = 'hardware' | 'software' | 'network' | 'access' | 'other';

export interface Ticket {
  id: string;
  title: string;
  description: string;
  category: Category;
  priority: Priority;
  status: Status;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
  assignedTo?: string;
  attachments: string[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  department: string;
}