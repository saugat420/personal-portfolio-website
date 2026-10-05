import { ServicePage } from "@/components/ServicePage";import { services } from "@/data/services";import { pageMetadata } from "@/lib/metadata";
const service=services.find(s=>s.slug==="meta-ads")!;export const metadata=pageMetadata("Meta Ads Expert for Lead Generation",service.short,"/services/meta-ads");export default function Page(){return <ServicePage service={service}/>}
