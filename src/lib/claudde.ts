// Opens the Claudde chat widget (rendered inside a shadow DOM host on the page).
// Defensive: retries briefly in case the widget script hasn't mounted yet.

const findLauncher = (): HTMLElement | null => {
  const hosts = Array.from(document.body.children) as HTMLElement[];
  for (const el of hosts) {
    const shadow = el.shadowRoot;
    if (!shadow) continue;
    const launcher = shadow.querySelector<HTMLElement>("#launcher, .launcher");
    if (launcher) {
      const panel = shadow.querySelector("#panel, .panel");
      // Already open — nothing to do (launcher acts as a toggle).
      if (panel?.classList.contains("open")) return null;
      return launcher;
    }
  }
  return null;
};

export const openClauddeChat = (attempt = 0) => {
  const launcher = findLauncher();
  if (launcher) {
    launcher.click();
    return;
  }
  if (attempt < 20) {
    window.setTimeout(() => openClauddeChat(attempt + 1), 150);
  }
};
