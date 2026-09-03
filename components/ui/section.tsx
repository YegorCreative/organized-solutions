import type { ReactNode } from "react";
import { Container } from "@/components/ui/container";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
};

export function Section({ id, children, className = "", containerClassName = "" }: SectionProps) {
  return (
    <section id={id} className={`py-16 sm:py-20 ${className}`.trim()}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
