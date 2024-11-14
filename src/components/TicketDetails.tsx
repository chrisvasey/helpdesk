import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { format } from 'date-fns';
import { ArrowLeft, Paperclip, MessageSquare } from 'lucide-react';
import { mockTickets } from '../data/mockData';

export default function TicketDetails() {
  const { id } = useParams();
  const ticket = mockTickets.find(t => t.id === id);

  if (!ticket) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold text-red-600">Ticket not found</h2>
          <Link
            to="/admin"
            className="mt-4 inline-flex items-center text-indigo-600 hover:text-indigo-500"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-6">
        <Link
          to="/admin"
          className="inline-flex items-center text-indigo-600 hover:text-indigo-500"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Dashboard
        </Link>
      </div>

      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{ticket.title}</h1>
              <p className="mt-1 text-sm text-gray-500">
                Ticket #{ticket.id} • Created {format(ticket.createdAt, 'PPP')}
              </p>
            </div>
            <div className="flex space-x-3">
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium
                  ${
                    ticket.priority === 'critical'
                      ? 'bg-red-100 text-red-800'
                      : ticket.priority === 'high'
                      ? 'bg-orange-100 text-orange-800'
                      : ticket.priority === 'medium'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}
              >
                {ticket.priority.charAt(0).toUpperCase() + ticket.priority.slice(1)}
              </span>
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium
                  ${
                    ticket.status === 'resolved'
                      ? 'bg-green-100 text-green-800'
                      : ticket.status === 'in_progress'
                      ? 'bg-yellow-100 text-yellow-800'
                      : ticket.status === 'pending'
                      ? 'bg-orange-100 text-orange-800'
                      : 'bg-blue-100 text-blue-800'
                  }`}
              >
                {ticket.status.replace('_', ' ').charAt(0).toUpperCase() +
                  ticket.status.replace('_', ' ').slice(1)}
              </span>
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-lg font-medium text-gray-900">Description</h2>
            <p className="mt-2 text-gray-600 whitespace-pre-wrap">{ticket.description}</p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <h2 className="text-lg font-medium text-gray-900">Details</h2>
              <dl className="mt-2 space-y-3">
                <div>
                  <dt className="text-sm font-medium text-gray-500">Category</dt>
                  <dd className="mt-1 text-sm text-gray-900 capitalize">{ticket.category}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Assigned To</dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {ticket.assignedTo || 'Unassigned'}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Last Updated</dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {format(ticket.updatedAt, 'PPp')}
                  </dd>
                </div>
              </dl>
            </div>

            <div>
              <h2 className="text-lg font-medium text-gray-900">Attachments</h2>
              {ticket.attachments.length > 0 ? (
                <ul className="mt-2 divide-y divide-gray-200">
                  {ticket.attachments.map((attachment, index) => (
                    <li key={index} className="py-3 flex items-center">
                      <Paperclip className="h-5 w-5 text-gray-400" />
                      <span className="ml-2 text-sm text-gray-600">{attachment}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-2 text-sm text-gray-500">No attachments</p>
              )}
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-lg font-medium text-gray-900 flex items-center">
              <MessageSquare className="h-5 w-5 mr-2" />
              Comments
            </h2>
            <div className="mt-4 space-y-4">
              <div className="flex">
                <div className="flex-grow">
                  <textarea
                    rows={3}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="Add a comment..."
                  />
                  <div className="mt-3 flex justify-end">
                    <button
                      type="submit"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Post Comment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}