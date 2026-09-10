import { motion } from "framer-motion";
import { AlertTriangle, RotateCcw } from "lucide-react";

export default function AlreadyRegistered({ candidate, onBack }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.7,
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
        bg-red-100
        p-7
        text-center
        sm:p-10
      "
    >
      <motion.div
        animate={{
          rotate: [-10, 10, -10, 10, 0],
        }}
        transition={{
          duration: 0.7,
        }}
        className="
          text-8xl
        "
      >
        🚨
      </motion.div>

      <AlertTriangle
        className="
          mx-auto
          mt-5
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
        HOLD UP!
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
        text-lg
        font-bold
        text-gray-700
      "
      >
        has ALREADY entered the Debate Arena.
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
          mt-2
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
        😂 NICE TRY.
        <br />
        The Debate Baba already knows you.
      </div>

      <button
        onClick={onBack}
        className="
          mt-7
          inline-flex
          items-center
          gap-2
          rounded-2xl
          border-4
          border-black
          bg-white
          px-6
          py-3
          font-black
          shadow-[5px_5px_0px_#000]
          transition
          hover:translate-y-1
          hover:shadow-none
        "
      >
        <RotateCcw size={20} />
        Try Another Name
      </button>
    </motion.div>
  );
}
