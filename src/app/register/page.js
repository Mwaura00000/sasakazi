import { Suspense } from "react";
import RegisterForm from "@/components/RegisterForm";

export const metadata = {
  title: "Create Account | SasaKazi Digital BPO & Talent Network",
  description: "Join SasaKazi's vetted digital talent network or register your business to deploy supervised digital pods in Eldoret, Nairobi, and across Kenya."
};

export default function RegisterPage() {
  return (
    <Suspense fallback={<div style={{ textAlign: "center", padding: "4rem" }}>Loading registration portal...</div>}>
      <RegisterForm defaultRole="talent" />
    </Suspense>
  );
}
