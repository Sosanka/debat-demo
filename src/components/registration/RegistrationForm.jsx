import { useState } from "react";

import Input from "../common/Input";
import Button from "../common/Button";
import DebateMascot from "../mascot/DebateMascot";

import { registerCandidate } from "../../services/registrationApi";

import { normalizeName } from "../../utils/normalizeName";

export default function RegistrationForm({ onSuccess, onAlreadyRegistered }) {
  const [name, setName] = useState("");

  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState("State your name, warrior. 👀");

  async function handleSubmit(event) {
    event.preventDefault();

    const cleanName = normalizeName(name);

    /*
      Validation
    */

    if (!cleanName) {
      setError("You forgot your name! 😂");

      setMessage("Bro... I cannot register AIR. 😭");

      return;
    }

    if (cleanName.length < 2) {
      setError("That's not enough letters.");

      setMessage("Even your argument needs more characters. 😂");

      return;
    }

    if (cleanName.length > 60) {
      setError("That's a name or a whole essay?");

      return;
    }

    try {
      setLoading(true);

      setError("");

      setMessage("Checking the ancient Debate Records... 🔍");

      const result = await registerCandidate(cleanName);

      /*
        Already registered
      */

      if (result.alreadyRegistered) {
        setMessage("🚨 WAIT! I KNOW THIS PERSON!");

        onAlreadyRegistered({
          name: result.name,

          registrationId: result.registrationId,
        });

        return;
      }

      /*
        Successfully registered
      */

      setMessage("YOU HAVE ENTERED THE CHAOS! 🔥");

      onSuccess({
        name: result.name,

        registrationId: result.registrationId,
      });
    } catch (error) {
      console.error(error);

      setError("Something exploded. Try again. 💀");

      setMessage("The Debate Gods are currently unavailable.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className="
      grid
      gap-12
      lg:grid-cols-[320px_1fr]
      lg:items-start
    "
    >
      {/* MASCOT */}

      <div
        className="
        lg:sticky
        lg:top-10
      "
      >
        <DebateMascot message={message} />
      </div>

      {/* FORM */}

      <form
        onSubmit={handleSubmit}
        className="
          paper-card
          rounded-[2rem]
          bg-white
          p-6
          sm:p-10
        "
      >
        <div className="mb-10">
          <div
            className="
            mb-4
            inline-block
            rotate-[-2deg]
            rounded-full
            border-4
            border-black
            bg-pink-300
            px-4
            py-2
            font-black
          "
          >
            🚨 VERY SERIOUS FORM
          </div>

          <h1
            className="
            font-funny
            text-5xl
            font-black
            leading-none
            sm:text-6xl
          "
          >
            Identify Yourself,
            <br />
            Warrior. ⚔️
          </h1>

          <p
            className="
            mt-4
            font-bold
            text-gray-600
          "
          >
            We need exactly ONE thing from you.
            <br />
            Your name.
            <br />
            Don't mess this up. 😂
          </p>
        </div>

        <div className="space-y-7">
          <Input
            label="👤 What's your name?"
            placeholder="
              Enter your legendary name...
            "
            value={name}
            autoComplete="name"
            autoFocus
            onChange={(e) => {
              setName(e.target.value);

              setError("");

              if (e.target.value) {
                setMessage("Hmm... this name sounds dangerous. 👀");
              } else {
                setMessage("State your name, warrior. 👀");
              }
            }}
            error={error}
          />

          {/* FUNNY NOTICE */}

          <div
            className="
            rounded-2xl
            border-4
            border-black
            bg-yellow-100
            p-5
          "
          >
            <p
              className="
              font-black
            "
            >
              ⚠️ IMPORTANT
            </p>

            <div
              className="
              mt-3
              space-y-2
              text-sm
              font-bold
              text-gray-700
            "
            >
              <p>🧠 You must actually exist.</p>

              <p>⚔️ You must be willing to argue.</p>

              <p>😂 Saying "Actually..." is encouraged.</p>

              <p>🚨 One name = one registration.</p>
            </div>
          </div>

          <Button type="submit" loading={loading}>
            ⚔️ REGISTER MY EXISTENCE
          </Button>

          <p
            className="
            text-center
            text-xs
            font-bold
            text-gray-500
          "
          >
            No password. No account. No complicated nonsense.
            <br />
            Just your name. 😂
          </p>
        </div>
      </form>
    </div>
  );
}
