export default function Grid({ state }) {
  return (
    <div className="grid">
      {Array.from({ length: 100 }).map((_, i) => {
        let status = "upcoming";
        let progress = 0;

        if (state) {
          if (i < state.blockIndex) status = "completed";
          if (i === state.blockIndex) {
            status = "active";
            progress = state.progress;
          }
        }

        return (
          <div key={i} className={`block ${status}`}>
            {status === "active" && (
              <div
                className="fill"
                style={{ transform: `scaleY(${progress})` }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}