import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import {
  ArrowRight,
  Brain,
  Mic2,
  Swords,
  GraduationCap,
  Flame,
  Crown,
} from "lucide-react";

/* ============================================================
   ROTATING JOKES
============================================================ */

const jokes = [
  "Some opinions deserve a second semester. 📚💀",
  "Not every argument deserves a passing grade. 😂",
  "Confidence is temporary. Screenshots are forever. 📸",
  "Bring logic. Bring confidence. Bring a backup argument too. 😂",
  "Never underestimate someone who says 'Actually...' 😎",
  "Some arguments need extra classes. Unfortunately, there is no supplementary exam. 💀",
  "The syllabus said one thing. Reality said something else. 😭",
  "Education may be important. Debating about it is more entertaining. 😂",
];

export default function Home({ onRegister }) {
  const [jokeIndex, setJokeIndex] = useState(0);

  /* ============================================================
     ROTATE JOKES
  ============================================================ */

  useEffect(() => {
    const timer = setInterval(() => {
      setJokeIndex((current) => (current + 1) % jokes.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  return (
    <main
      className="
        funny-grid
        min-h-screen
        overflow-x-hidden
        bg-orange-50
      "
    >
      {/* ========================================================
          TOP BAR
      ========================================================= */}

      <div
        className="
          border-b-4
          border-black
          bg-black
          px-3
          py-2
          text-center
          text-[10px]
          font-black
          uppercase
          tracking-wide
          text-yellow-300
          sm:px-4
          sm:text-sm
        "
      >
        🚨 UNIVERSITY UPDATE: ARGUING IS NOW A SURVIVAL SKILL 🚨
      </div>

      {/* ========================================================
          MAIN
      ========================================================= */}

      <section
        className="
          mx-auto
          w-full
          max-w-7xl
          px-4
          py-8
          sm:px-6
          sm:py-12
          lg:px-8
          lg:py-14
        "
      >
        <div
          className="
            grid
            items-center
            gap-12
            lg:grid-cols-2
            lg:gap-16
          "
        >
          {/* ====================================================
              LEFT
          ==================================================== */}

          <div
            className="
              text-center
              lg:text-left
            "
          >
            {/* NOTICE */}

            <motion.div
              initial={{
                opacity: 0,
                y: -20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="
                inline-flex
                rotate-[-2deg]
                items-center
                rounded-full
                border-4
                border-black
                bg-yellow-300
                px-4
                py-2
                text-xs
                font-black
                shadow-[4px_4px_0px_#000]
                sm:text-sm
              "
            >
              ⚠️ VERY OFFICIAL NOTICE
            </motion.div>

            {/* ==================================================
                TITLE
            ================================================== */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.1,
              }}
              className="
                mt-6
                font-funny
                text-[3.3rem]
                font-black
                leading-[0.8]
                tracking-tight
                sm:text-7xl
                md:text-8xl
              "
            >
              TEAM
              <br />
              <span
                className="
                  text-pink-500
                "
              >
                MEMORYLOST
              </span>
              <br />
              IS RECRUITING ⚔️
            </motion.h1>

            {/* ==================================================
                SHORT DESCRIPTION
            ================================================== */}

            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.3,
              }}
              className="
                mx-auto
                mt-6
                max-w-lg
                text-base
                font-bold
                leading-relaxed
                text-gray-700
                sm:text-lg
                lg:mx-0
              "
            >
              Have an opinion?
              <br />
              Can you defend it?
              <br />
              Can you make it sound convincing? 😂
            </motion.p>

            {/* ==================================================
                EDUCATION JOKE
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                x: -25,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 0.4,
              }}
              className="
                mx-auto
                mt-6
                max-w-lg
                rotate-[-1deg]
                rounded-2xl
                border-4
                border-black
                bg-pink-300
                p-4
                text-left
                shadow-[6px_6px_0px_#000]
                sm:p-5
                lg:mx-0
              "
            >
              <div
                className="
                  flex
                  items-start
                  gap-3
                "
              >
                <GraduationCap
                  size={28}
                  className="
                    mt-1
                    shrink-0
                  "
                />

                <div>
                  <p
                    className="
                      text-lg
                      font-black
                      sm:text-xl
                    "
                  >
                    🎓 EDUCATION IS NOT IMPORTANT IN UNIVERSITY.
                  </p>

                  <p
                    className="
                      mt-2
                      text-sm
                      font-bold
                      text-gray-700
                      sm:text-base
                    "
                  >
                    Some people may agree on it.
                    <br />
                    That's completely fine. 😂
                    <br />
                    <span
                      className="
                      text-pink-600
                    "
                    >
                      The fact is : They're still studying in our university. 😂
                    </span>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* ==================================================
                ROTATING JOKE
            ================================================== */}

            <motion.div
              key={jokeIndex}
              initial={{
                opacity: 0,
                y: 8,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="
                mx-auto
                mt-5
                max-w-lg
                rounded-2xl
                border-4
                border-black
                bg-white
                p-3
                text-sm
                font-black
                shadow-[5px_5px_0px_#000]
                sm:p-4
                sm:text-base
                lg:mx-0
              "
            >
              💬 "{jokes[jokeIndex]}"
            </motion.div>

            {/* ==================================================
                QUESTIONS
            ================================================== */}

            <div
              className="
                mx-auto
                mt-6
                max-w-md
                space-y-2
                text-left
                text-sm
                font-bold
                text-gray-700
                sm:text-base
                lg:mx-0
              "
            >
              <p>🧠 Got questionable opinions?</p>

              <p>🎤 Can you defend them confidently?</p>

              <p>⚔️ Can you survive the argument?</p>
            </div>

            {/* ==================================================
                JOIN BUTTON
                VISIBLE WITHOUT SCROLLING
            ================================================== */}

            <motion.button
              whileHover={{
                scale: 1.04,
                rotate: -1,
              }}
              whileTap={{
                scale: 0.96,
              }}
              onClick={onRegister}
              className="
                mx-auto
                mt-7
                flex
                w-full
                max-w-lg
                items-center
                justify-center
                gap-3
                rounded-2xl
                border-4
                border-black
                bg-black
                px-6
                py-4
                text-base
                font-black
                text-white
                shadow-[8px_8px_0px_#facc15]
                transition
                hover:shadow-[4px_4px_0px_#facc15]
                sm:py-5
                sm:text-lg
                lg:mx-0
              "
            >
              🧠 JOIN MEMORYLOST
              <ArrowRight size={24} />
            </motion.button>

            <p
              className="
                mt-3
                text-[11px]
                font-bold
                text-gray-500
                sm:text-xs
              "
            >
              No experience required. Confidence preferred. 😂
            </p>
          </div>

          {/* ====================================================
              RIGHT — MASCOT
          ==================================================== */}

          <div
            className="
              flex
              justify-center
              px-4
              sm:px-8
              lg:px-0
            "
          >
            <div
              className="
                relative
                w-full
                max-w-md
              "
            >
              {/* OPINION BADGE */}

              <motion.div
                animate={{
                  rotate: [-2, 2, -2],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
                className="
                  absolute
                  -right-2
                  -top-5
                  z-20
                  rounded-full
                  border-4
                  border-black
                  bg-red-500
                  px-3
                  py-2
                  text-xs
                  font-black
                  text-white
                  shadow-[4px_4px_0px_#000]
                  sm:-right-5
                  sm:text-sm
                "
              >
                🔥 OPINIONATED
              </motion.div>

              {/* MASCOT */}

              <motion.div
                animate={{
                  y: [0, -12, 0],
                  rotate: [-3, 3, -3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="
                  relative
                  mx-auto
                  flex
                  aspect-square
                  w-full
                  max-w-[280px]
                  items-center
                  justify-center
                  rounded-[35%]
                  border-4
                  border-black
                  bg-yellow-300
                  text-[7rem]
                  shadow-[12px_12px_0px_#000]
                  sm:max-w-[340px]
                  sm:text-[8rem]
                  md:max-w-[370px]
                  md:text-[9rem]
                "
              >
                🧠
                {/* ARGUE BADGE */}
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                  className="
                    absolute
                    -left-4
                    top-4
                    rounded-full
                    border-4
                    border-black
                    bg-pink-300
                    px-3
                    py-2
                    text-xs
                    font-black
                    shadow-[3px_3px_0px_#000]
                    sm:-left-7
                    sm:px-4
                    sm:text-sm
                  "
                >
                  PROVE IT! 👊
                </motion.div>
                {/* SWORDS */}
                <motion.div
                  animate={{
                    rotate: [8, -8, 8],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                  className="
                    absolute
                    -bottom-4
                    -right-4
                    text-5xl
                    sm:-bottom-7
                    sm:-right-7
                    sm:text-7xl
                  "
                >
                  ⚔️
                </motion.div>
                {/* CERTIFIED */}
                <div
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    mt-20
                    -translate-x-1/2
                    whitespace-nowrap
                    rounded-full
                    border-[3px]
                    border-black
                    bg-white
                    px-3
                    py-1
                    text-[9px]
                    font-black
                    sm:mt-24
                    sm:text-xs
                  "
                >
                  🧠 CERTIFIED OPINION
                </div>
                {/* SPEECH */}
                <motion.div
                  animate={{
                    y: [0, -4, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="
                    absolute
                    -bottom-9
                    left-1/2
                    w-52
                    -translate-x-1/2
                    rounded-2xl
                    border-4
                    border-black
                    bg-white
                    px-3
                    py-3
                    text-center
                    text-xs
                    font-black
                    shadow-[5px_5px_0px_#000]
                    sm:w-60
                    sm:text-sm
                  "
                >
                  EDUCATION?
                  <br />
                  <span
                    className="
                    text-pink-500
                  "
                  >
                    WE'LL DEBATE THAT. 😂
                  </span>
                </motion.div>
              </motion.div>

              {/* ==================================================
                  SMALL REPORT
              ================================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.6,
                }}
                className="
                  mx-auto
                  mt-14
                  max-w-sm
                  rounded-2xl
                  border-4
                  border-black
                  bg-white
                  p-4
                  shadow-[6px_6px_0px_#000]
                "
              >
                <div
                  className="
                    flex
                    items-center
                    justify-between
                    border-b-2
                    border-black
                    pb-3
                  "
                >
                  <span
                    className="
                      text-xs
                      font-black
                    "
                  >
                    📋 MEMORYLOST REPORT
                  </span>

                  <Crown size={20} />
                </div>

                <div
                  className="
                    mt-4
                    grid
                    grid-cols-2
                    gap-3
                    text-center
                  "
                >
                  <Report label="Confidence" value="97%" />

                  <Report label="Preparation" value="3%" />

                  <Report label="Random Facts" value="84%" />

                  <Report label="Actually..." value="∞" />
                </div>

                <div
                  className="
                    mt-4
                    rounded-xl
                    border-2
                    border-black
                    bg-yellow-300
                    p-2
                    text-center
                    text-xs
                    font-black
                  "
                >
                  ⚔️ DEBATE READY
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* ======================================================
            THREE SMALL CARDS
        ====================================================== */}

        <div
          className="
            mt-16
            grid
            gap-4
            sm:grid-cols-3
          "
        >
          <Feature
            icon={<Brain size={28} />}
            title="THINK"
            text="5% knowledge. 95% confidence."
          />

          <Feature
            icon={<Mic2 size={28} />}
            title="SPEAK"
            text="Talk confidently while your brain loads."
          />

          <Feature
            icon={<Swords size={28} />}
            title="ARGUE"
            text="Respect the person. Attack the argument."
          />
        </div>

        {/* ======================================================
            FOOTER
        ====================================================== */}

        <div
          className="
            mt-10
            text-center
            text-xs
            font-bold
            text-gray-500
            sm:text-sm
          "
        >
          <Flame
            className="
              mx-auto
              mb-2
            "
            size={20}
          />
          Made with 10% education and 90% unnecessary confidence. 😂
        </div>
      </section>
    </main>
  );
}

/* ============================================================
   FEATURE
============================================================ */

function Feature({ icon, title, text }) {
  return (
    <motion.div
      whileHover={{
        y: -5,
        rotate: -1,
      }}
      className="
        paper-card-small
        rounded-2xl
        bg-white
        p-4
        sm:p-5
      "
    >
      <div
        className="
          flex
          items-center
          justify-between
        "
      >
        {icon}

        <span
          className="
          text-xl
        "
        >
          😂
        </span>
      </div>

      <h2
        className="
          mt-3
          font-funny
          text-2xl
          font-black
        "
      >
        {title}
      </h2>

      <p
        className="
          mt-1
          text-sm
          font-semibold
          leading-relaxed
          text-gray-600
        "
      >
        {text}
      </p>
    </motion.div>
  );
}

/* ============================================================
   REPORT
============================================================ */

function Report({ label, value }) {
  return (
    <div
      className="
        rounded-xl
        border-2
        border-black
        p-2
      "
    >
      <p
        className="
          text-[10px]
          font-bold
          text-gray-500
        "
      >
        {label}
      </p>

      <p
        className="
          mt-1
          font-black
        "
      >
        {value}
      </p>
    </div>
  );
}
