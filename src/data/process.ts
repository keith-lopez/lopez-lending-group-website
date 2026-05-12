/** Four-step homepage process. Order is significant. */
export type ProcessStep = {
  number: number;
  title: string;
  description: string;
  icon: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: "Game Plan Call",
    description:
      "We talk through your goals, your timeline, and where you are right now.",
    icon: "/images/process/step-1-call.svg",
  },
  {
    number: 2,
    title: "Custom Strategy",
    description:
      "I pull options across 290+ lenders and map the right path for your situation.",
    icon: "/images/process/step-2-strategy.svg",
  },
  {
    number: 3,
    title: "Clear Pre-Approval",
    description:
      "You get a real letter you can actually shop with, plus the numbers behind it.",
    icon: "/images/process/step-3-preapproval.svg",
  },
  {
    number: 4,
    title: "Smooth Closing",
    description:
      "I keep you, your agent, and the file on schedule from contract to keys.",
    icon: "/images/process/step-4-closing.svg",
  },
];
