// Opens the hosted Claudde widget. Retries briefly if the deferred widget script is still loading.
export const openClauddeChat = (attempt = 0) => {
  if (window.Claudde?.open) {
    window.Claudde?.open();
    return;
  }

  if (attempt < 20) {
    window.setTimeout(() => openClauddeChat(attempt + 1), 150);
  }
};
