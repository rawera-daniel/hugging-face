export default function SpacesBox({ from, to = "to-red-600", children }) {
  return (
    <article
      className={`rounded-lg border shadow-[0_24px_48px_0_rgba(0,0,0,0.07)] py-3 pl-2 bg-gradient-to-br ${from} ${to}`}
    >
      {children}
    </article>
  );
}
