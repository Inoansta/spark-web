let started = false;

export async function startWorker() {
  if (started) return;
  const { worker } = await import('./browser');
  await worker.start({ onUnhandledRequest: 'bypass' });
  started = true;
}
