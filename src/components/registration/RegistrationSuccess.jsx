import { motion } from "framer-motion";
import { CheckCircle, Trophy } from "lucide-react";

export default function RegistrationSuccess({ candidate }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.6,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      className="
        paper-card
        mx-auto
        max-w-2xl
        rounded-[2rem]
        bg-green-100
        p-7
        text-center
        sm:p-10
      "
    >
      <div
        className="
        text-6xl
      "
      >
        🎉 🏆 🎉
      </div>

      <motion.div
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
        }}
        className="
          mt-5
          text-8xl
        "
      >
        🧠
      </motion.div>

      <CheckCircle
        className="
          mx-auto
          mt-5
          text-green-700
        "
        size={50}
      />

      <h1
        className="
        mt-4
        font-funny
        text-6xl
        font-black
      "
      >
        YOU'RE IN!
      </h1>

      <p
        className="
        mt-5
        text-3xl
        font-black
      "
      >
        {candidate.name}
      </p>

      <p
        className="
        mt-2
        font-bold
        text-gray-700
      "
      >
        has officially joined the chaos. ⚔️
      </p>

      <div
        className="
        mt-8
        rounded-3xl
        border-4
        border-black
        bg-white
        p-7
      "
      >
        <Trophy
          className="
            mx-auto
            mb-4
          "
          size={40}
        />

        <p
          className="
          text-xs
          font-black
          uppercase
          tracking-widest
        "
        >
          Battle ID
        </p>

        <p
          className="
          mt-3
          font-mono
          text-4xl
          font-black
        "
        >
          {candidate.registrationId}
        </p>
      </div>

      <div
        className="
        mt-7
        rounded-2xl
        border-4
        border-black
        bg-yellow-300
        p-5
        font-black
      "
      >
        🎤 Congratulations!
        <br />
        You may now say:
        <br />
        <span
          className="
          text-2xl
        "
        >
          "Actually..."
        </span>
        <br />
        with confidence. 😂
      </div>

      <p
        className="
        mt-7
        font-bold
        text-gray-600
      "
      >
        ⚔️ Now prepare your arguments.
      </p>
    </motion.div>
  );
}
