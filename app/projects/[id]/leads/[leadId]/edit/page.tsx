import { getLeadById } from '@/app/api/service';
import { Lead } from '@/app/interfaces/interfaces';
import EditLeadForm from '@/app/ui/leads/edit-form';
import Breadcrumbs from '@/app/ui/projects/breadcrumbs';
 
export default async function Page(props: { params: Promise<{ id: string, leadId: string }> }) {
  const params = await props.params;
  const projId = params.id;
  const leadId = decodeURIComponent( params.leadId);  
  
  const lead: Lead = await getLeadById(projId, leadId);

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Project', href: `/projects/${projId}/leads` },
          {
            label: 'Edit Lead',
            href: `/projects/${projId}/leads/${leadId}/edit`,
            active: true,
          },
        ]}
      />
      <EditLeadForm lead={lead}  />
    </main>
  );
}