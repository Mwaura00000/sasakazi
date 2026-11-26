import { Suspense } from "react";
import RegisterForm from "@/components/RegisterForm";

export const metadata = {
  title: "Register Your Business | SasaKazi Digital BPO",
  description: "Deploy vetted Kenyan digital pods in stock visibility, payments reconciliation, and customer operations with senior EldoHub mentorship in 30-45 days."
};

export default function RegisterBusinessPage() {
  return (
    <Suspense fallback={<div style={{ textAlign: "center", padding: "4rem" }}>Loading business portal...</div>}>
      <RegisterForm defaultRole="business" />
    </Suspense>
  );
}
