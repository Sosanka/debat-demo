import { motion } from "framer-motion";

export default function DebateMascot({ message }) {
  return (
    <div
      className="
      flex
      flex-col
      items-center
    "
    >
      <motion.div
        animate={{
          y: [0, -12, 0],
          rotate: [-3, 3, -3],
        }}
        transition={{
          duration: 2.2,
          repeat: Infinity,
        }}
        className="
          relative
          flex
          h-44
          w-44
          items-center
          justify-center
          rounded-[38%]
          border-4
          border-black
          bg-yellow-300
          text-8xl
          shadow-[10px_10px_0px_#000]
        "
      >
        🧠
        <span
          className="
          absolute
          -bottom-5
          -right-7
          rotate-12
          text-6xl
        "
        >
          ⚔️
        </span>
        <span
          className="
          absolute
          -left-7
          top-2
          text-4xl
        "
        >
          💢
        </span>
      </motion.div>

      <motion.div
        key={message}
        initial={{
          opacity: 0,
          scale: 0.7,
          y: 10,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        className="
          mt-7
          max-w-xs
          rounded-3xl
          border-4
          border-black
          bg-white
          p-5
          text-center
          font-black
          shadow-[6px_6px_0px_#000]
        "
      >
        {message}
      </motion.div>
    </div>
  );
}
