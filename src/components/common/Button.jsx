import { Loader2 } from "lucide-react";

export default function Button({ loading, children, ...props }) {
  return (
    <button
      {...props}
      disabled={loading}
      className="
        w-full
        rounded-2xl
        border-4
        border-black
        bg-yellow-400
        px-6
        py-5
        text-lg
        font-black
        uppercase
        transition
        hover:-translate-y-1
        hover:bg-yellow-300
        hover:shadow-[7px_7px_0px_#000]
        active:translate-y-1
        active:shadow-none
        disabled:cursor-not-allowed
        disabled:opacity-60
      "
    >
      {loading ? (
        <span
          className="
          flex
          items-center
          justify-center
          gap-3
        "
        >
          <Loader2
            size={24}
            className="
              animate-spin
            "
          />
          CHECKING THE DEBATE RECORDS...
        </span>
      ) : (
        children
      )}
    </button>
  );
}
