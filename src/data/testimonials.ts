export type Testimonial = {
  name: string;
  role: string;
  city: string;
  quote: string;
  avatar?: string;
  isSample: boolean;
};

export const testimonials: Testimonial[] = [
  {
    name: "Sample Client",
    role: "First-Time Buyer",
    city: "Charlotte, NC",
    quote:
      "Keith took the time to actually explain what each number on the page meant. I walked into closing knowing exactly what I was signing — that was a first for me.",
    isSample: true,
  },
  {
    name: "Sample Client",
    role: "Move-Up Buyer",
    city: "Greenville, SC",
    quote:
      "We'd been told 'no' twice by other lenders. Keith found a program that fit and kept us in the loop the whole way. The communication is what stood out — he calls back.",
    isSample: true,
  },
  {
    name: "Sample Partner",
    role: "Real Estate Agent",
    city: "Raleigh, NC",
    quote:
      "I send Keith my picky buyers, my self-employed buyers, my emotional buyers. He treats them like family and gets them across the line. My closings are calmer when he's on the file.",
    isSample: true,
  },
  {
    name: "Sample Client",
    role: "Investor",
    city: "Columbia, SC",
    quote:
      "Keith mapped out three different financing structures for my next rental and walked me through the trade-offs in plain English. I picked the one I understood — not just the one with the lowest rate.",
    isSample: true,
  },
];
