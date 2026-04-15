(() => {
  // Only run on the home page (permalink "/")
  if (window.location.pathname !== "/") return;

  const titleEl = document.querySelector(".page__title");
  const docBaseTitle = "Hong's Home";

  const frames = [
    "(  )",
    "(`  )",
    "(･`  )",
    "(ω･` )",
    "(･ω･` )",
    "(´･ω･`)",
    "( ´･ω･)",
    "( ´･ω)",
    "(  ´･)",
    "(  ´)",
    "(  )",
  ];

  const sequence = frames; // already a full loop as provided
  const originalText = titleEl ? titleEl.textContent.trim() : "";
  const headingBase = originalText || "Hi, there 👋";
  const renderDocTitle = (frame) => `${docBaseTitle} ${frame}`.trim();
  const renderHeading = (frame) => `${headingBase} ${frame}`.trim();
  let currentTitle = docBaseTitle;
  let idx = 0;
  let paused = false;
  let timer;

  const tick = () => {
    if (paused) return;
    const frame = sequence[idx % sequence.length];
    if (titleEl) titleEl.textContent = renderHeading(frame);
    currentTitle = renderDocTitle(frame);
    document.title = currentTitle;
    idx += 1;
  };

  const start = () => {
    if (timer) clearInterval(timer);
    paused = false;
    timer = setInterval(tick, 200);
  };

  const stop = () => {
    paused = true;
    if (timer) clearInterval(timer);
    if (titleEl) titleEl.textContent = originalText;
    document.title = docBaseTitle;
  };

  // 初始设置为自定义标题，并启动动画
  document.title = docBaseTitle;
  start();

  if (titleEl) {
    titleEl.addEventListener("mouseenter", () => {
      stop();
    });
    titleEl.addEventListener("mouseleave", () => {
      idx = 0; // restart
      start();
    });
  }

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      stop();
    } else {
      idx = 0;
      start();
    }
  });

  window.addEventListener("blur", stop);
  window.addEventListener("focus", () => {
    idx = 0;
    start();
  });
})();
