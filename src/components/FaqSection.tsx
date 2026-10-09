import React, { useId, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Plus, Minus } from "lucide-react";
import { faqCategories } from "../utils/appUtils/constant";
export default function FaqSection() {
  const id = useId();
  const [category, setCategory] = useState(0);
  const [open, setOpen] = useState<number | null>(null);
  return <section className="patient-questions" aria-labelledby={`${id}-heading`}><div className="site-container questions-grid"><div className="questions-intro"><span className="eyebrow">PATIENT RESOURCES</span><h2 id={`${id}-heading`}>A little clarity.<br /><em>A lot of reassurance.</em></h2><p>Quick answers about appointments, billing, admission, and reports.</p><Link to="/ContactUs" className="text-link">Have another question? Contact us <ArrowUpRight size={17} /></Link></div><div><div className="question-categories" aria-label="Question categories">{faqCategories.map((item,index)=><button type="button" key={item.title} aria-pressed={category===index} onClick={()=>{setCategory(index);setOpen(null);}}>{item.title}</button>)}</div><div className="question-list">{faqCategories[category].items.map((item,index)=><div key={`${category}-${index}`} className="question-item"><h3><button type="button" id={`${id}-q-${index}`} aria-expanded={open===index} aria-controls={`${id}-a-${index}`} onClick={()=>setOpen(open===index?null:index)}>{item.question}{open===index?<Minus size={18}/>:<Plus size={18}/>}</button></h3><div id={`${id}-a-${index}`} role="region" aria-labelledby={`${id}-q-${index}`} hidden={open!==index}><p>{item.answer}</p></div></div>)}</div></div></div></section>;
}
