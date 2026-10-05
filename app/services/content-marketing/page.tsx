import { ServicePage } from "@/components/ServicePage";import { services } from "@/data/services";import { pageMetadata } from "@/lib/metadata";
const service=services.find(s=>s.slug==="content-marketing")!;export const metadata=pageMetadata("Content Marketing Strategy Services",service.short,"/services/content-marketing");export default function Page(){return <ServicePage service={service}/>}
