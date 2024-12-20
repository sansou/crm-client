import { getProjects } from '@/app/api/service';
import Breadcrumbs from '@/app/ui/projects/breadcrumbs';
import Form from '@/app/ui/projects/create-form';
 
export default async function Page() {
  const projects = await getProjects();
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'projects', href: '/projects' },
          {
            label: 'Create Project',
            href: '/projects/create',
            active: true,
          },
        ]}
      />
      <Form projects={projects} />
    </main>
  );
}