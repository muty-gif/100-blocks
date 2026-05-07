export const BLOCK_DURATION_MIN = 10;
export const TOTAL_BLOCKS = 100;

export function getElapsedMinutes(startTime) {
  return Math.max(0, Math.floor((Date.now() - startTime) / 60000));
}

export function getBlockState(startTime) {
  const elapsed = getElapsedMinutes(startTime);

  const blockIndex = Math.floor(elapsed / BLOCK_DURATION_MIN);
  const clampedIndex = Math.min(blockIndex, TOTAL_BLOCKS - 1);

  const minutesIntoBlock = elapsed % BLOCK_DURATION_MIN;
  const progress = minutesIntoBlock / BLOCK_DURATION_MIN;

  return {
    elapsed,
    blockIndex: clampedIndex,
    progress,
    completedBlocks: Math.min(blockIndex, TOTAL_BLOCKS),
    isFinished: blockIndex >= TOTAL_BLOCKS
  };
}