import LeadsList from "@/app/ui/leads/leads-list";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;
  console.log(id);
  
  return (
    <main>   
      <div className="mt-6  gap-6 md:grid-cols-4 lg:grid-cols-8">
        <LeadsList projectId={id}></LeadsList>
      </div>
    </main>
  );
}