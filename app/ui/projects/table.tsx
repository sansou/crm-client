import { getProjects } from '@/app/api/service';
import { Project } from '@/app/interfaces/interfaces';
import { ViewLeads } from '../buttons';

export default async function ProjectTable() {
  const projects:Project[] = await getProjects();

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {projects?.map((project: Project) => (
              <div
                key={project.pk}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>

                    <p className="text-sm text-gray-500">{project.domains}</p>
                  </div>
                  <div>
                    <p className='text-sm text-gray-500"'> {project.status}</p>
                  </div>
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">
                      {project.name}
                    </p>
                    <p>{project.createdAt.toLocaleString()}</p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <ViewLeads id={project.sk} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Id
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Nome
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Status
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Criado em
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {projects?.map((project) => (
                <tr
                  key={project.pk}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">

                      <p>{project.pk}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {project.name}
                  </td>

                  <td className="whitespace-nowrap px-3 py-3">
                    {project.status}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {project.createdAt.toLocaleString()}
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <ViewLeads id={project.pk} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
