export default function Header({ state, startTime }) {
  const now = new Date();

  const format = (date) =>
    date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  if (!state || !startTime) {
    return (
      <div>
        <div>{format(now)}</div>
        <div>Not started</div>
      </div>
    );
  }

  const { completedBlocks } = state;

  const remainingBlocks = 100 - completedBlocks;

  const percent = Math.floor((completedBlocks / 100) * 100);

  const start = new Date(startTime);

  const totalMinutes = 100 * 10;
  const end = new Date(start.getTime() + totalMinutes * 60000);

  return (
    <div>
      <div>{format(now)}</div>
      <div>{remainingBlocks} Blocks Left</div>
      <div>{percent}% Complete</div>
      <div>Start: {format(start)}</div>
      <div>End: {format(end)}</div>
    </div>
  );
}