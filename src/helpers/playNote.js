import { Synth, now } from "tone";

// const synth = new Tone.Synth().toDestination();

export const playNote = (noteName) => {
  const synth = new Synth().toDestination();

  synth.triggerAttackRelease(`${noteName}4`, "8n");
};
