// Minimal renderer for the plain-text legal documents in content/.
// Supports: title line, numbered section headings ("1. NAME"), "- " bullets,
// blank-line separated paragraphs. Consecutive bullets group into one list.
export function LegalDoc({ text }) {
  const lines = String(text ?? '').split(/\r?\n/);
  const blocks = [];
  let bullets = [];
  let titled = false;
  const flush = () => {
    if (bullets.length > 0) {
      blocks.push(
        <ul key={blocks.length} className="list-disc space-y-1 pl-6 text-sm leading-relaxed text-zinc-300">
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>,
      );
      bullets = [];
    }
  };
  lines.forEach((raw) => {
    const line = raw.trim();
    if (line === '') {
      flush();
      return;
    }
    if (/^- /.test(line)) {
      bullets.push(line.replace(/^- /, ''));
      return;
    }
    flush();
    if (!titled) {
      titled = true;
      blocks.push(
        <h1 key={blocks.length} className="font-display text-3xl font-extrabold sm:text-4xl">
          {line}
        </h1>,
      );
    } else if (/^\d+\. [A-Z]/.test(line)) {
      blocks.push(
        <h2 key={blocks.length} className="pt-6 font-display text-xl font-bold">
          {line}
        </h2>,
      );
    } else {
      blocks.push(
        <p key={blocks.length} className="text-sm leading-relaxed text-zinc-300">
          {line}
        </p>,
      );
    }
  });
  flush();
  return <div className="space-y-3">{blocks}</div>;
}
