import React from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import TicketForm from './components/TicketForm';
import AdminDashboard from './components/AdminDashboard';
import TicketDetails from './components/TicketDetails';
import { FileText, Layout } from 'lucide-react';

function Navigation() {
  const location = useLocation();
  const isAdminView = location.pathname.startsWith('/admin');
  const isTicketView = location.pathname.startsWith('/ticket/');

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-indigo-600">
              IT Support Portal
            </Link>
          </div>
          {!isTicketView && (
            <div className="flex items-center space-x-4">
              <Link
                to="/"
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  !isAdminView
                    ? 'bg-indigo-100 text-indigo-700'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <FileText className="h-5 w-5" />
                  <span>Submit Ticket</span>
                </div>
              </Link>
              <Link
                to="/admin"
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  isAdminView
                    ? 'bg-indigo-100 text-indigo-700'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Layout className="h-5 w-5" />
                  <span>Admin Dashboard</span>
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <main className="py-10">
          <Routes>
            <Route path="/" element={<TicketForm />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/ticket/:id" element={<TicketDetails />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}