import { Ticket } from '../types/ticket';

export const mockTickets: Ticket[] = [
  {
    id: '1',
    title: 'Network Connection Issue',
    description: 'Unable to connect to the company VPN. I have tried restarting my computer and router but still experiencing connection drops every few minutes.',
    category: 'network',
    priority: 'high',
    status: 'in_progress',
    createdAt: new Date('2024-03-10T10:00:00'),
    updatedAt: new Date('2024-03-10T14:30:00'),
    userId: 'user1',
    assignedTo: 'John Smith',
    attachments: [],
  },
  {
    id: '2',
    title: 'Software License Expired',
    description: 'Adobe Creative Suite license showing as expired. Need immediate renewal for ongoing project work.',
    category: 'software',
    priority: 'medium',
    status: 'new',
    createdAt: new Date('2024-03-11T09:15:00'),
    updatedAt: new Date('2024-03-11T09:15:00'),
    userId: 'user2',
    assignedTo: undefined,
    attachments: ['error_screenshot.png'],
  },
  {
    id: '3',
    title: 'Printer Not Responding',
    description: 'Office printer on 3rd floor not responding to print jobs. Multiple users affected.',
    category: 'hardware',
    priority: 'low',
    status: 'pending',
    createdAt: new Date('2024-03-09T15:20:00'),
    updatedAt: new Date('2024-03-10T11:45:00'),
    userId: 'user3',
    assignedTo: 'Sarah Johnson',
    attachments: [],
  },
];