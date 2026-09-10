import { useState } from "react";

import RegistrationForm from "../components/registration/RegistrationForm";

import AlreadyRegistered from "../components/registration/AlreadyRegistered";

import RegistrationSuccess from "../components/registration/RegistrationSuccess";

export default function Register() {
  const [status, setStatus] = useState("form");

  const [candidate, setCandidate] = useState(null);

  if (status === "already_registered") {
    return (
      <main
        className="
        funny-grid
        min-h-screen
        bg-orange-50
        px-5
        py-12
        sm:px-8
        lg:py-20
      "
      >
        <AlreadyRegistered
          candidate={candidate}
          onBack={() => setStatus("form")}
        />
      </main>
    );
  }

  if (status === "success") {
    return (
      <main
        className="
        funny-grid
        min-h-screen
        bg-orange-50
        px-5
        py-12
        sm:px-8
        lg:py-20
      "
      >
        <RegistrationSuccess candidate={candidate} />
      </main>
    );
  }

  return (
    <main
      className="
      funny-grid
      min-h-screen
      bg-orange-50
      px-5
      py-10
      sm:px-8
      lg:py-16
    "
    >
      <div
        className="
        mx-auto
        max-w-6xl
      "
      >
        <RegistrationForm
          onSuccess={(data) => {
            setCandidate(data);

            setStatus("success");
          }}
          onAlreadyRegistered={(data) => {
            setCandidate(data);

            setStatus("already_registered");
          }}
        />
      </div>
    </main>
  );
}
