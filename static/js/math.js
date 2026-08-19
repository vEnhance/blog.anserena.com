// Runs after katex.min.js and auto-render.min.js, which are loaded with defer.

renderMathInElement(document.body, {
  delimiters: [
    { left: "$$", right: "$$", display: true },
    { left: "$", right: "$", display: false },
  ],
  throwOnError: false,
});

// Backtick-wrapped math: a `$x$` or `$$x$$` code span, which Markdown passes
// through verbatim.
document.querySelectorAll("code").forEach(function (el) {
  if (el.closest("pre")) {
    return;
  }
  var tex = el.textContent.trim();
  var display = tex.length > 4 && tex.startsWith("$$") && tex.endsWith("$$");
  var inline =
    !display && tex.length > 2 && tex.startsWith("$") && tex.endsWith("$");
  if (!display && !inline) {
    return;
  }
  var wrapper = document.createElement(display ? "div" : "span");
  wrapper.className = display ? "math-display" : "math-inline";
  katex.render(display ? tex.slice(2, -2) : tex.slice(1, -1), wrapper, {
    displayMode: display,
    throwOnError: false,
  });
  el.replaceWith(wrapper);
});
