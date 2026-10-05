import { ServicePage } from "@/components/ServicePage";import { services } from "@/data/services";import { pageMetadata } from "@/lib/metadata";
const service=services.find(s=>s.slug==="ai-automation")!;export const metadata=pageMetadata("AI Automation Consultant for Business",service.short,"/services/ai-automation");export default function Page(){return <ServicePage service={service}/>}
