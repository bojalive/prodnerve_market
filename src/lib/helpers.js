/**
 * Format a number as Indian Rupees (INR) with ₹ symbol.
 * Uses the Indian numbering system (lakhs, crores).
 */
export function formatINR(amount) {
  if (amount == null || isNaN(amount)) return '₹0';
  return '₹' + Number(amount).toLocaleString('en-IN', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });
}

/**
 * Format a date string or Date object to DD-MMM-YYYY (e.g. 23-Mar-2026).
 */
export function formatDate(dateStr) {
  if (!dateStr) return '—';
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return '—';
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  return `${String(d.getDate()).padStart(2, '0')}-${months[d.getMonth()]}-${d.getFullYear()}`;
}

/**
 * Format a date string or Date object to DD-MMM-YYYY HH:MM (e.g. 23-Mar-2026 14:30).
 */
export function formatDateTime(dateStr) {
  if (!dateStr) return '—';
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return '—';
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const hh = String(d.getHours()).padStart(2, '0');
  const mm = String(d.getMinutes()).padStart(2, '0');
  return `${String(d.getDate()).padStart(2, '0')}-${months[d.getMonth()]}-${d.getFullYear()} ${hh}:${mm}`;
}

/**
 * Return a CSS color variable for a given status string.
 */
export function getStatusColor(status) {
  const map = {
    approved: 'var(--green)',
    active: 'var(--green)',
    completed: 'var(--green)',
    good: 'var(--green)',
    passed: 'var(--green)',
    pending: 'var(--amber)',
    in_progress: 'var(--amber)',
    warning: 'var(--amber)',
    review: 'var(--amber)',
    hold: 'var(--amber)',
    rejected: 'var(--red)',
    failed: 'var(--red)',
    critical: 'var(--red)',
    overdue: 'var(--red)',
    closed: 'var(--text-mute)',
    draft: 'var(--text-mute)',
    cancelled: 'var(--text-mute)',
  };
  return map[status] || 'var(--text-dim)';
}

/**
 * Get initials from a full name (e.g. "Robert Chandran" -> "RC").
 */
export function getInitials(name) {
  if (!name) return '??';
  return name
    .split(' ')
    .filter(Boolean)
    .map(w => w[0].toUpperCase())
    .slice(0, 2)
    .join('');
}
