import ProjectsList from '../ui/projects/projects-list';
import { CreateTable } from '../ui/buttons';

export default async function Page() {
  return (
    <main>   
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <CreateTable />
      </div>
      <div className="mt-6  gap-6 md:grid-cols-4 lg:grid-cols-8">
        <ProjectsList></ProjectsList>
      </div>
    </main>
  );
}