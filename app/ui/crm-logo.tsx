import { lusitana } from './fonts';
import { MagnifyingGlassCircleIcon } from '@heroicons/react/20/solid';

export default function CrmLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <MagnifyingGlassCircleIcon  className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px]">CRM</p>
    </div>
  );
}
