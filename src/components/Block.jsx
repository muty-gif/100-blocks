export default function Block({ index, state }) {
  if (!state) return null;

  const { blockIndex } = state;

  let label = "-";
  if (index < blockIndex) label = "✓";
  if (index === blockIndex) label = "•";

  return <span style={{ margin: 2 }}>{label}</span>;
}