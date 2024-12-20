'use client'
import Link from 'next/link';
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { useActionState, useState, } from 'react';
import { ProjectCreate } from '@/app/interfaces/interfaces';
import { Button } from '../buttons';
import { createProject, State } from '@/app/api/service';
import clsx from 'clsx';

export default function Form({ projects }: { projects: ProjectCreate[] }) {
  const [name, setName] = useState('');
  const [domains, setDomains] = useState([]);
  const [accounts, setAccounts] = useState([]);
  const [domainInput, setDomainInput] = useState('');
  const [accountInput, setAccountInput] = useState('');

  // Handlers for inputs
  const handleAddDomain = () => {
    if (domainInput.trim() !== '') {
      setDomains([...domains, domainInput]);
      setDomainInput('');
    }
  };

  const handleAddAccount = () => {
    if (accountInput.trim() !== '') {
      setAccounts([...accounts, accountInput]);
      setAccountInput('');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const projectData: ProjectCreate = {
      name,
      domains,
      accounts,
    };
    createProject(projectData);
    console.log('Project Created:', projectData);
    // Reset form
    setName('');
    setDomains([]);
    setAccounts([]);
  };



  return (
    <form onSubmit={handleSubmit} style={{ padding: '1rem', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ marginBottom: '1rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem' }}>Project Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter project name"
          style={{ padding: '0.5rem', width: '100%', fontSize: '1rem' }}
        />
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem' }}>Domains:</label>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <input
            type="text"
            value={domainInput}
            onChange={(e) => setDomainInput(e.target.value)}
            placeholder="Add a domain"
            style={{ padding: '0.5rem', flex: 1, fontSize: '1rem' }}
          />
          <button
            type="button"
            onClick={handleAddDomain}
            style={{ padding: '0.5rem 1rem', fontSize: '1rem', cursor: 'pointer' }}
          >
            Add
          </button>
        </div>
        <ul style={{ marginTop: '0.5rem', paddingLeft: '1rem' }}>
          {domains.map((domain, index) => (
            <li key={index} style={{ marginBottom: '0.5rem' }}>
              {domain}
            </li>
          ))}
        </ul>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem' }}>Accounts:</label>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <input
            type="text"
            value={accountInput}
            onChange={(e) => setAccountInput(e.target.value)}
            placeholder="Add an account"
            style={{ padding: '0.5rem', flex: 1, fontSize: '1rem' }}
          />
          <button
            type="button"
            onClick={handleAddAccount}
            style={{ padding: '0.5rem 1rem', fontSize: '1rem', cursor: 'pointer' }}
          >
            Add
          </button>
        </div>
        <ul style={{ marginTop: '0.5rem', paddingLeft: '1rem' }}>
          {accounts.map((account, index) => (
            <li key={index} style={{ marginBottom: '0.5rem' }}>
              {account}
            </li>
          ))}
        </ul>
      </div>

      <button
        type="submit"
        className={clsx(
        'flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50',
        )}
      >
        Create Project
      </button>
    </form>
  );
}
