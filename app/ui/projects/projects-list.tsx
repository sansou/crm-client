import { lusitana } from "../fonts";
import clsx from "clsx";
import { getProjects } from "@/app/api/service";
import { Project } from "@/app/interfaces/interfaces";

export default async function ProjectsList() {

  const projects:Project[]  = await getProjects();

  return (
    <div className="flex w-full flex-col md:col-span-4">
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
        <div className="bg-white px-6">
          {projects.map((proj: Project, i) => {
            return (
              <div
                key={proj.pk}
                className={clsx(
                  'flex flex-row items-center justify-between py-4',
                  {
                    'border-t': i !== 0,
                  },
                )}
              >
                <div className="flex items-center">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold md:text-base">
                      {proj.name}
                    </p>
                    <p className="hidden text-sm text-gray-500 sm:block">
                      {proj.status}
                    </p>
                  </div>
                </div>
                <p
                  className={`${lusitana.className} truncate text-sm font-medium md:text-base`}
                >
                  {proj.domains}
                </p>
              </div>
            );
          })}
        </div>
        
      </div>
    </div>
  );
}