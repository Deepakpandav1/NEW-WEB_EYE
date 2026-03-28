/** Cashless / TPA panel — general vs standalone health insurers */

export type InsurancePartnerCategory = "general" | "health";

export interface InsurancePartner {
  slNo: number;
  name: string;
  category: InsurancePartnerCategory;
  /** Used to resolve brand mark via public favicon service (not hosted in repo). */
  logoDomain: string;
}

export const insurancePartners: InsurancePartner[] = [
  {
    slNo: 1,
    name: "Acko General Insurance Limited",
    category: "general",
    logoDomain: "acko.com",
  },
  {
    slNo: 2,
    name: "Bajaj Allianz General Insurance Company Limited",
    category: "general",
    logoDomain: "bajajallianz.co.in",
  },
  {
    slNo: 3,
    name: "Cholamandalam MS General Insurance Company Limited",
    category: "general",
    logoDomain: "cholainsurance.com",
  },
  {
    slNo: 4,
    name: "Future Generali India Insurance Company Limited",
    category: "general",
    logoDomain: "futuregenerali.in",
  },
  {
    slNo: 5,
    name: "Go Digit General Insurance Limited",
    category: "general",
    logoDomain: "godigit.com",
  },
  {
    slNo: 6,
    name: "HDFC Ergo General Insurance Company Limited",
    category: "general",
    logoDomain: "hdfcergo.com",
  },
  {
    slNo: 7,
    name: "ICICI Lombard General Insurance Company Limited",
    category: "general",
    logoDomain: "icicilombard.com",
  },
  {
    slNo: 8,
    name: "IFFCO Tokio General Insurance Company Limited",
    category: "general",
    logoDomain: "iffco-tokio.co.in",
  },
  {
    slNo: 9,
    name: "Kshema General Insurance Limited",
    category: "general",
    logoDomain: "kshema.co",
  },
  {
    slNo: 10,
    name: "Liberty General Insurance Limited",
    category: "general",
    logoDomain: "libertyinsurance.in",
  },
  {
    slNo: 11,
    name: "Magma General Insurance Limited",
    category: "general",
    logoDomain: "magmahdi.com",
  },
  {
    slNo: 12,
    name: "National Insurance Company Limited",
    category: "general",
    logoDomain: "nationalinsurance.nic.co.in",
  },
  {
    slNo: 13,
    name: "NAVI General Insurance Limited",
    category: "general",
    logoDomain: "getnavi.com",
  },
  {
    slNo: 14,
    name: "Raheja QBE General Insurance Company Limited",
    category: "general",
    logoDomain: "rahejaqbe.com",
  },
  {
    slNo: 15,
    name: "Reliance General Insurance Company Limited",
    category: "general",
    logoDomain: "reliancegeneral.co.in",
  },
  {
    slNo: 16,
    name: "Royal Sundaram General Insurance Company Limited",
    category: "general",
    logoDomain: "royalsundaram.in",
  },
  {
    slNo: 17,
    name: "SBI General Insurance Company Limited",
    category: "general",
    logoDomain: "sbigeneral.co.in",
  },
  {
    slNo: 18,
    name: "Shriram General Insurance Company Limited",
    category: "general",
    logoDomain: "shriramgi.com",
  },
  {
    slNo: 19,
    name: "Tata AIG General Insurance Company Limited",
    category: "general",
    logoDomain: "tataaig.com",
  },
  {
    slNo: 20,
    name: "The New India Assurance Company Limited",
    category: "general",
    logoDomain: "newindia.co.in",
  },
  {
    slNo: 21,
    name: "The Oriental Insurance Company Limited",
    category: "general",
    logoDomain: "orientalinsurance.org.in",
  },
  {
    slNo: 22,
    name: "United India Insurance Company Limited",
    category: "general",
    logoDomain: "uiic.co.in",
  },
  {
    slNo: 23,
    name: "Universal Sompo General Insurance Company Limited",
    category: "general",
    logoDomain: "universalsompo.com",
  },
  {
    slNo: 24,
    name: "Zuno General Insurance Limited",
    category: "general",
    logoDomain: "zuno.insure",
  },
  {
    slNo: 25,
    name: "Zurich Kotak General Insurance Company Limited",
    category: "general",
    logoDomain: "kotakgeneralinsurance.com",
  },
  {
    slNo: 26,
    name: "Aditya Birla Health Insurance Company Limited",
    category: "health",
    logoDomain: "adityabirlahealth.com",
  },
  {
    slNo: 27,
    name: "Care Health Insurance Company Limited",
    category: "health",
    logoDomain: "careinsurance.com",
  },
  {
    slNo: 28,
    name: "ManipalCigna Health Insurance Company Limited",
    category: "health",
    logoDomain: "manipalcigna.com",
  },
  {
    slNo: 29,
    name: "Niva Bupa Health Insurance Company Limited",
    category: "health",
    logoDomain: "nivabupa.com",
  },
  {
    slNo: 30,
    name: "Star Health & Allied Insurance Company Limited",
    category: "health",
    logoDomain: "starhealth.in",
  },
  {
    slNo: 31,
    name: "Narayana Health Insurance Limited",
    category: "health",
    logoDomain: "narayanahealth.insurance",
  },
  {
    slNo: 32,
    name: "Galaxy Health Insurance Limited",
    category: "health",
    logoDomain: "galaxyhealth.com",
  },
];

export const generalInsurancePartners = insurancePartners.filter(
  (p) => p.category === "general"
);
export const healthInsurancePartners = insurancePartners.filter(
  (p) => p.category === "health"
);
