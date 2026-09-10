export default function Input({ label, error, ...props }) {
  return (
    <div>
      <label
        className="
        mb-3
        block
        text-sm
        font-black
        uppercase
      "
      >
        {label}
      </label>

      <input
        {...props}
        className="
          w-full
          rounded-2xl
          border-4
          border-black
          bg-white
          px-5
          py-4
          text-lg
          font-bold
          outline-none
          transition
          placeholder:text-gray-400
          focus:-translate-y-1
          focus:shadow-[6px_6px_0px_#000]
        "
      />

      {error && (
        <p
          className="
          mt-2
          font-bold
          text-red-600
        "
        >
          🚨 {error}
        </p>
      )}
    </div>
  );
}
