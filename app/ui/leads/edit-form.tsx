"use client"
import { updateLead } from '@/app/api/service';
import { Lead, updateLeadForm } from '@/app/interfaces/interfaces';
import { StatusLead } from '@/app/utils/enums';
import { redirect } from 'next/navigation';
import React, { useState } from 'react';

export default function EditLeadForm({ lead }: { lead: Lead }) {
  const [status, setStatus] = useState<StatusLead>(lead.status);
  const [comment, setComment] = useState<string>('');
  const [comments, setComments] = useState<string[] >(lead.observation);


  const handleSubmit = (e: React.FormEvent) => {

    const updatedLeadDto: updateLeadForm = { pk: lead.pk, sk: lead.sk, status, observation: comments };
    updateLead(updatedLeadDto);
    redirect(`http://127.0.0.1:3000/projects/${lead.pk}/leads`)
  };

  return (
    <div className="p-4 border rounded shadow-md max-w-md">
      <h2 className="text-xl font-bold mb-4">Edit Lead: {lead.sk}</h2>

      <div className="mb-4">
        <label htmlFor="status" className="block font-medium mb-1">
          Status
        </label>
        <select
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value as StatusLead)}
          className="w-full p-2 border rounded"
        >
          <option value="PROSPECT">PROSPECT</option>
          <option value="OPEN">OPEN</option>
          <option value="WORKING">WORKING</option>
          <option value="DISQUALIFIED">DISQUALIFIED</option>
          <option value="NOT A TARGET">NOT A TARGET</option>
          <option value="QUALIFIED">QUALIFIED</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="comments" className="block font-medium mb-1">
          Comentário
        </label>
        <textarea
          id="comments"
          value={comments}
          onChange={(e) => setComment(e.target.value)}
          rows={4}
          className="w-full p-2 border rounded"
          placeholder="Comentário sobre este lead..."
        />
      </div>

      <button
        type="button"
        onClick={handleSubmit}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Salvar Alterações
      </button>
    </div>
  );
};


