import { lusitana } from "../fonts";
import LeadTable from "./table";

export default async function LeadsList(props: {projectId: string }) {

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Leads</h1>
      </div>
      <LeadTable projectId={props.projectId}></LeadTable>
    </div>
  );
}