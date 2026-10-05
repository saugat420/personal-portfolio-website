import { Bot, ChartNoAxesCombined, LayoutTemplate, Megaphone, PanelsTopLeft } from "lucide-react";

export const services = [
  {
    slug: "meta-ads", title: "Meta Ads", short: "Generate leads and customers through Facebook and Instagram advertising.", homeTitle: "Reach the Right People and Generate More Leads",
    homeCopy: "Stop spending money on ads without knowing what is working. I help you create and optimize Facebook and Instagram advertising campaigns designed to attract the right customers and generate real business opportunities.",
    homeItems: ["Campaign strategy", "Audience research", "Lead generation", "Ad creatives", "Retargeting", "Campaign optimization"], icon: Megaphone,
    hero: "Stop Spending Money on Ads That Don't Bring Customers", intro: "Meta Ads can put your business in front of thousands of potential customers. But reaching people is not enough.",
    heroHighlight: "Audience + Offer + Message + Creative + Funnel", heroClose: "I help businesses build Meta advertising campaigns focused on generating real business opportunities.", heroCta: "Book a Free Meta Ads Consultation",
    problemsTitle: "Your Ads May Not Be the Real Problem", problemsCopy: "Poor results can come from many different parts of the customer journey. Instead of simply changing ads, we look at the entire journey.",
    problems: ["Wrong audience", "Weak offer", "Poor ad creative", "Confusing messaging", "Bad landing page", "No follow-up", "Incorrect tracking"], includesTitle: "What I Help With",
    includes: ["Customer and audience research", "Campaign strategy", "Campaign setup", "Lead generation campaigns", "Creative direction", "Retargeting", "Tracking", "Optimization"],
    closingTitle: "Want to Know How Meta Ads Could Work for Your Business?", closingCopy: "Book a free consultation and get a customized Digital Marketing Plan.", note: "",
  },
  {
    slug: "content-marketing", title: "Content Marketing", short: "Create content that attracts attention and builds trust.", homeTitle: "Turn Content Into Trust and Customers",
    homeCopy: "Posting every day doesn't automatically grow your business. Your content needs to answer your customer's questions, solve their problems and give them a reason to trust you. I help you build a simple content system designed around your customers and business goals.",
    homeItems: ["Content strategy", "Customer research", "Content ideas", "AI-assisted content creation", "Video content", "Content repurposing"], icon: PanelsTopLeft,
    hero: "Stop Posting Just to Stay Active", intro: "More posts don't automatically mean more customers. Good content should make your ideal customer notice you, understand you, trust you and remember you.",
    heroHighlight: "", heroClose: "I help businesses create content around the questions, problems and interests of their customers.", heroCta: "Book a Free Consultation", problemsTitle: "", problemsCopy: "", problems: [], includesTitle: "What We Can Build",
    includes: ["Content strategy", "Content pillars", "Content ideas", "Short-form video strategy", "Educational content", "AI-assisted content creation", "Repurposing systems", "Content calendar"],
    closingTitle: "Turn Your Content Into Part of Your Marketing System", closingCopy: "Book a free consultation and get a customized Digital Marketing Plan for your business.", note: "",
  },
  {
    slug: "ai-automation", title: "AI Automation", short: "Automate repetitive marketing and follow-up tasks.", homeTitle: "Spend Less Time on Repetitive Work",
    homeCopy: "How much time does your team spend manually replying to leads, sending follow-ups, updating information or repeating the same tasks? AI and automation can handle many of these repetitive processes while your team focuses on more important work.",
    homeItems: ["Lead follow-ups", "Customer inquiries", "Email workflows", "Lead qualification", "Marketing tasks", "Internal workflows"], icon: Bot,
    hero: "Your Team Shouldn't Spend Hours Doing Work That Can Be Automated", intro: "Following up manually. Copying information between tools. Answering the same questions. Sending repetitive emails. These small tasks can consume hours every week.",
    heroHighlight: "", heroClose: "I help businesses use AI and automation to make these processes faster and more consistent.", heroCta: "Book a Free Consultation", problemsTitle: "", problemsCopy: "", problems: [], includesTitle: "What Can Be Automated?",
    includes: ["Lead capture", "Lead qualification", "Email follow-ups", "Customer inquiries", "Appointment workflows", "CRM updates", "Marketing reporting", "Content workflows"],
    closingTitle: "Find Out What You Can Automate", closingCopy: "Book a free consultation and we'll identify where AI and automation can save your business time.", note: "AI isn't about removing people. It's about helping people spend less time on repetitive work.",
  },
  {
    slug: "website-landing-page-design", title: "Website & Landing Pages", short: "Turn more visitors into leads and customers.", homeTitle: "Turn More Website Visitors Into Leads",
    homeCopy: "Your website should do more than look good. It should clearly explain what you offer, build trust and guide visitors toward taking the next step. I build conversion-focused websites and landing pages designed around your customer's journey.",
    homeItems: ["Business websites", "Landing pages", "Lead generation pages", "Sales pages", "Marketing funnels"], icon: LayoutTemplate,
    hero: "Your Website Should Help You Get Customers", intro: "A beautiful website is useful. But a website that clearly explains your value and guides people toward taking action is much more valuable.",
    heroHighlight: "Turn more visitors into business opportunities.", heroClose: "I build websites and landing pages around one clear goal.", heroCta: "Book a Free Consultation",
    problemsTitle: "Your Website May Be Losing Customers If...", problemsCopy: "", problems: ["Visitors don't understand what you offer", "There is no clear CTA", "Pages load slowly", "The website is difficult to use on mobile", "There is too much information", "Visitors don't know what to do next"], includesTitle: "What I Can Build",
    includes: ["Business websites", "Landing pages", "Lead generation pages", "Sales pages", "Marketing funnels", "Website redesigns"], closingTitle: "Want a Website That Supports Your Marketing?", closingCopy: "Book a free consultation and let's identify what your website needs.", note: "",
  },
  {
    slug: "digital-marketing", title: "Digital Marketing", short: "Connect everything into one customer acquisition system.", homeTitle: "Stop Doing Random Marketing",
    homeCopy: "Running ads here, posting content there and trying different tools without a strategy can waste both time and money. I help you connect your marketing into one clear system.",
    homeItems: ["Customer research", "Marketing strategy", "Advertising", "Content", "Websites", "Lead generation", "Follow-up", "Automation", "Analytics"], icon: ChartNoAxesCombined,
    hero: "Your Marketing Should Work Together", intro: "Ads shouldn't operate separately from your website. Content shouldn't operate separately from your sales process. And leads shouldn't disappear because nobody followed up.",
    heroHighlight: "Attract → Convert → Follow Up → Sell → Retain", heroClose: "I help businesses connect these pieces into one marketing system.", heroCta: "Book a Free Consultation", problemsTitle: "", problemsCopy: "", problems: [], includesTitle: "Your Digital Marketing System May Include",
    includes: ["Customer research", "Advertising", "Content", "Website & landing pages", "Follow-up", "Automation", "Analytics"], closingTitle: "Let's Build the Right Marketing Plan for Your Business", closingCopy: "You don't need every marketing channel. You need to know which ones matter for your business.", note: "",
  },
] as const;

export type Service = (typeof services)[number];
