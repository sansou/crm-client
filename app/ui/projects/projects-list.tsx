import { lusitana } from "../fonts";
import clsx from "clsx";
import { getProjects } from "@/app/api/service";
import { Project } from "@/app/interfaces/interfaces";
import Link from "next/link";
import { ViewLeads } from "../buttons";
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