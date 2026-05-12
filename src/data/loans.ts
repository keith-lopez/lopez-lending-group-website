export type Loan = {
  id: string;
  name: string;
  icon: string;
  description: string;
  builtFor: string[];
  whyPeopleChoose: string[];
  whatToHaveReady: string[];
};

export const loans: Loan[] = [
  {
    id: "home-purchase",
    name: "Home Purchase Financing",
    icon: "/images/icons/home-purchase.svg",
    description:
      "Clear guidance from pre-approval to closing for primary residences, second homes, and move-up purchases.",
    builtFor: [
      "First-time buyers ready to stop renting",
      "Move-up buyers selling and buying at once",
      "Second-home buyers shopping the Carolinas",
    ],
    whyPeopleChoose: [
      "A real pre-approval you can actually shop with",
      "Honest comparisons across loan types and lenders",
      "A loan officer who picks up the phone before, during, and after closing",
    ],
    whatToHaveReady: [
      "Most recent 30 days of pay stubs",
      "Last two years of W-2s or tax returns",
      "Two months of bank or asset statements",
      "Photo ID and a rough idea of your timeline",
    ],
  },
  {
    id: "conventional",
    name: "Conventional Loans",
    icon: "/images/icons/conventional.svg",
    description:
      "Flexible options for borrowers with strong credit and a range of down-payment scenarios.",
    builtFor: [
      "Buyers with steady income and solid credit",
      "Anyone wanting to avoid FHA mortgage insurance long-term",
      "Move-up buyers and second-home purchasers",
    ],
    whyPeopleChoose: [
      "Down payment options from 3% up to 20%+",
      "PMI that can be removed once you hit 20% equity",
      "Wider room to structure the loan around your goals",
    ],
    whatToHaveReady: [
      "Two years of employment history",
      "Pay stubs, W-2s, and most recent tax return",
      "Bank statements covering down payment and reserves",
    ],
  },
  {
    id: "fha",
    name: "FHA Loans",
    icon: "/images/icons/fha.svg",
    description:
      "Lower down-payment requirements and more forgiving qualification guidelines for buyers who need a different path in.",
    builtFor: [
      "First-time buyers with limited savings",
      "Buyers with credit scores in the 580–680 range",
      "Families using gift funds for the down payment",
    ],
    whyPeopleChoose: [
      "As little as 3.5% down",
      "More flexible credit and debt-to-income guidelines",
      "Gift funds and down-payment assistance are welcome",
    ],
    whatToHaveReady: [
      "Recent pay stubs and W-2s or tax returns",
      "Bank statements and any gift-letter documentation",
      "Photo ID and Social Security number",
    ],
  },
  {
    id: "va",
    name: "VA Loans",
    icon: "/images/icons/va.svg",
    description:
      "Helping eligible veterans and military families take full advantage of their VA home loan benefits.",
    builtFor: [
      "Active-duty service members",
      "Veterans and qualifying spouses",
      "Reservists and National Guard members who meet service requirements",
    ],
    whyPeopleChoose: [
      "$0 down payment in most cases",
      "No monthly mortgage insurance",
      "Competitive rates and flexible qualification",
    ],
    whatToHaveReady: [
      "Certificate of Eligibility (I can help pull it)",
      "DD-214 or current service documentation",
      "Pay stubs, W-2s, and bank statements",
    ],
  },
  {
    id: "refinance",
    name: "Refinance Solutions",
    icon: "/images/icons/refinance.svg",
    description:
      "Lower your payment, restructure your loan, or tap into equity with a refinance built around your goals.",
    builtFor: [
      "Homeowners chasing a lower monthly payment",
      "Anyone wanting to drop PMI or shorten their term",
      "Owners who want to use equity for renovation or debt strategy",
    ],
    whyPeopleChoose: [
      "Honest math on whether a refi actually saves you money",
      "Rate-and-term, cash-out, and streamline options",
      "A clear comparison to your current loan before you commit",
    ],
    whatToHaveReady: [
      "Most recent mortgage statement",
      "Homeowners insurance declarations page",
      "Pay stubs, W-2s, and bank statements",
    ],
  },
  {
    id: "investment",
    name: "Investment Property Financing",
    icon: "/images/icons/investment.svg",
    description:
      "Financing for long-term rentals and portfolios — including options that qualify on the property's income, not yours.",
    builtFor: [
      "First-time investors buying their first rental",
      "Experienced landlords scaling a portfolio",
      "Self-employed buyers who don't fit conventional guidelines",
    ],
    whyPeopleChoose: [
      "DSCR loans that qualify on rental income, not tax returns",
      "Conventional investor financing when it makes sense",
      "Portfolio-level strategy, not just one-off transactions",
    ],
    whatToHaveReady: [
      "Property address and current or projected rent",
      "Two months of bank or asset statements",
      "Schedule of any other real estate owned",
    ],
  },
];
