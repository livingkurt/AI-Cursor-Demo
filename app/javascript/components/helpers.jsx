export function getCSRFToken() {
  const csrfToken = document
    .querySelector('meta[name="csrf-token"]')
    ?.getAttribute("content");
  return csrfToken || "";
}
