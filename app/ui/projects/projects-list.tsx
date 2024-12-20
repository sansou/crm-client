import { lusitana } from "../fonts";
import ProjectTable from "./table";

export default async function ProjectsList() {
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Projetos</h1>
      </div>
      <ProjectTable></ProjectTable>
    </div>
  );
}