import React, { useState, useMemo } from 'react';
import { MI } from './MI';

const PAGE_OPTIONS = [10, 25, 50];

export function DataTable({ title, headers, rows, action, onRowAction, rowActionLabel }) {
  const [sortCol, setSortCol] = useState(null);
  const [sortDir, setSortDir] = useState('asc');
  const [filter, setFilter] = useState('');
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);

  // Filter rows by search text
  const filtered = useMemo(() => {
    if (!filter.trim()) return rows;
    const q = filter.toLowerCase();
    return rows.filter(row =>
      row.some(cell => {
        const v = typeof cell === 'object' && cell !== null && !React.isValidElement(cell) ? cell.v : cell;
        return String(v ?? '').toLowerCase().includes(q);
      })
    );
  }, [rows, filter]);

  // Sort rows
  const sorted = useMemo(() => {
    if (sortCol === null) return filtered;
    return [...filtered].sort((a, b) => {
      const getCellValue = (cell) => {
        if (typeof cell === 'object' && cell !== null && !React.isValidElement(cell)) return cell.v;
        return cell;
      };
      const va = getCellValue(a[sortCol]);
      const vb = getCellValue(b[sortCol]);
      const sa = String(va ?? '');
      const sb = String(vb ?? '');
      const cmp = sa.localeCompare(sb, undefined, { numeric: true, sensitivity: 'base' });
      return sortDir === 'asc' ? cmp : -cmp;
    });
  }, [filtered, sortCol, sortDir]);

  // Paginate
  const totalPages = Math.ceil(sorted.length / pageSize);
  const paged = sorted.slice(page * pageSize, (page + 1) * pageSize);

  const handleSort = (i) => {
    if (sortCol === i) {
      setSortDir(d => d === 'asc' ? 'desc' : 'asc');
    } else {
      setSortCol(i);
      setSortDir('asc');
    }
    setPage(0);
  };

  const allHeaders = onRowAction ? [...headers, 'Actions'] : headers;

  return (
    <div className="card" style={{ overflow: 'hidden' }}>
      {/* Title bar + filter */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '12px 16px', borderBottom: '1px solid var(--border)', gap: 12,
        flexWrap: 'wrap',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          {title && <h3 style={{ fontSize: '.85rem', fontWeight: 700 }}>{title}</h3>}
          {action}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 5,
            padding: '5px 10px', borderRadius: 6,
            background: 'var(--surface2)', border: '1px solid var(--border)',
          }}>
            <MI size={14} style={{ color: 'var(--text-mute)' }}>search</MI>
            <input
              value={filter}
              onChange={e => { setFilter(e.target.value); setPage(0); }}
              placeholder="Search..."
              style={{
                border: 'none', outline: 'none', background: 'transparent',
                fontSize: '.75rem', color: 'var(--text)', width: 120,
                fontFamily: 'var(--f)',
              }}
            />
          </div>
        </div>
      </div>

      {/* Table */}
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 600 }}>
          <thead>
            <tr>
              {allHeaders.map((h, i) => {
                const isActionCol = onRowAction && i === allHeaders.length - 1;
                return (
                  <th
                    key={i}
                    onClick={isActionCol ? undefined : () => handleSort(i)}
                    style={{
                      padding: '8px 14px', textAlign: 'left',
                      fontSize: '.62rem', textTransform: 'uppercase', letterSpacing: 1,
                      color: 'var(--text-mute)', fontWeight: 600,
                      background: 'var(--table-head)', whiteSpace: 'nowrap',
                      cursor: isActionCol ? 'default' : 'pointer',
                      userSelect: 'none',
                    }}
                  >
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 3 }}>
                      {h}
                      {sortCol === i && !isActionCol && (
                        <MI size={12} style={{ color: 'var(--accent)' }}>
                          {sortDir === 'asc' ? 'arrow_upward' : 'arrow_downward'}
                        </MI>
                      )}
                    </span>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {paged.length === 0 ? (
              <tr>
                <td colSpan={allHeaders.length} style={{
                  padding: '28px 14px', textAlign: 'center',
                  fontSize: '.8rem', color: 'var(--text-mute)',
                }}>
                  No records found
                </td>
              </tr>
            ) : paged.map((row, ri) => (
              <tr key={ri} style={{ transition: 'background .15s' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--table-hover)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = ''; }}
              >
                {row.map((cell, ci) => {
                  const isObj = typeof cell === 'object' && cell !== null && !React.isValidElement(cell);
                  const content = isObj ? cell.v : cell;
                  const style = isObj && cell.style ? cell.style : {};
                  return (
                    <td key={ci} style={{
                      padding: '10px 14px', fontSize: '.79rem',
                      borderTop: '1px solid var(--border)', whiteSpace: 'nowrap', ...style,
                    }}>{content}</td>
                  );
                })}
                {onRowAction && (
                  <td style={{
                    padding: '10px 14px', fontSize: '.79rem',
                    borderTop: '1px solid var(--border)', whiteSpace: 'nowrap',
                  }}>
                    <button
                      onClick={() => onRowAction(row, ri + page * pageSize)}
                      style={{
                        padding: '4px 10px', fontSize: '.7rem', fontWeight: 600,
                        border: '1px solid var(--border)', borderRadius: 5,
                        background: 'var(--accent10)', color: 'var(--accent)',
                        cursor: 'pointer', fontFamily: 'var(--f)',
                      }}
                    >
                      {rowActionLabel || 'View'}
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '10px 16px', borderTop: '1px solid var(--border)',
        fontSize: '.7rem', color: 'var(--text-dim)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span>Rows:</span>
          <select
            value={pageSize}
            onChange={e => { setPageSize(Number(e.target.value)); setPage(0); }}
            style={{
              border: '1px solid var(--border)', borderRadius: 4,
              background: 'var(--surface)', color: 'var(--text)',
              padding: '2px 4px', fontSize: '.7rem', fontFamily: 'var(--f)',
              cursor: 'pointer',
            }}
          >
            {PAGE_OPTIONS.map(n => <option key={n} value={n}>{n}</option>)}
          </select>
          <span style={{ marginLeft: 8 }}>
            {sorted.length === 0 ? '0 of 0' :
              `${page * pageSize + 1}\u2013${Math.min((page + 1) * pageSize, sorted.length)} of ${sorted.length}`
            }
          </span>
        </div>
        <div style={{ display: 'flex', gap: 4 }}>
          <button
            disabled={page === 0}
            onClick={() => setPage(p => p - 1)}
            style={{
              width: 26, height: 26, borderRadius: 5,
              border: '1px solid var(--border)', background: 'transparent',
              color: page === 0 ? 'var(--text-mute)' : 'var(--text-dim)',
              cursor: page === 0 ? 'default' : 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            <MI size={14}>chevron_left</MI>
          </button>
          <button
            disabled={page >= totalPages - 1}
            onClick={() => setPage(p => p + 1)}
            style={{
              width: 26, height: 26, borderRadius: 5,
              border: '1px solid var(--border)', background: 'transparent',
              color: page >= totalPages - 1 ? 'var(--text-mute)' : 'var(--text-dim)',
              cursor: page >= totalPages - 1 ? 'default' : 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            <MI size={14}>chevron_right</MI>
          </button>
        </div>
      </div>
    </div>
  );
}
