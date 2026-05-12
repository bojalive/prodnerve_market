import React, { useState } from 'react';
import { MI, Badge } from '../ui';
import { formatDateTime } from '../../lib/helpers';

export function ApprovalPanel({ status, approvals = [], onApprove, onReject, canApprove }) {
  const [comment, setComment] = useState('');

  const handleApprove = () => {
    onApprove?.(comment);
    setComment('');
  };

  const handleReject = () => {
    onReject?.(comment);
    setComment('');
  };

  const actionIcon = (action) => {
    if (action === 'approved') return { icon: 'check_circle', color: 'var(--green)' };
    if (action === 'rejected') return { icon: 'cancel', color: 'var(--red)' };
    return { icon: 'schedule', color: 'var(--amber)' };
  };

  return (
    <div className="card" style={{ padding: 18 }}>
      {/* Header with status */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 16,
      }}>
        <span style={{
          fontSize: '.78rem',
          fontWeight: 700,
          color: 'var(--text)',
        }}>Approval Status</span>
        <Badge status={status} />
      </div>

      {/* Timeline */}
      {approvals.length > 0 && (
        <div style={{ marginBottom: canApprove ? 16 : 0 }}>
          {approvals.map((item, i) => {
            const ai = actionIcon(item.action);
            return (
              <div key={i} style={{
                display: 'flex',
                gap: 10,
                paddingBottom: i < approvals.length - 1 ? 12 : 0,
                marginBottom: i < approvals.length - 1 ? 12 : 0,
                borderBottom: i < approvals.length - 1 ? '1px solid var(--border)' : 'none',
              }}>
                <div style={{
                  width: 28,
                  height: 28,
                  borderRadius: '50%',
                  background: `${ai.color}18`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  marginTop: 2,
                }}>
                  <MI size={14} style={{ color: ai.color }}>{ai.icon}</MI>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 2 }}>
                    <span style={{
                      fontSize: '.74rem',
                      fontWeight: 600,
                      color: 'var(--text)',
                    }}>{item.approver || 'Unknown'}</span>
                    {item.level && (
                      <span style={{
                        fontSize: '.6rem',
                        color: 'var(--text-mute)',
                        background: 'var(--surface2)',
                        padding: '1px 6px',
                        borderRadius: 6,
                      }}>L{item.level}</span>
                    )}
                  </div>
                  <div style={{
                    fontSize: '.68rem',
                    color: ai.color,
                    fontWeight: 500,
                    textTransform: 'capitalize',
                    marginBottom: 2,
                  }}>{item.action?.replace(/_/g, ' ') || 'pending'}</div>
                  {item.date && (
                    <div style={{
                      fontSize: '.64rem',
                      color: 'var(--text-mute)',
                    }}>{formatDateTime(item.date)}</div>
                  )}
                  {item.comments && (
                    <div style={{
                      fontSize: '.7rem',
                      color: 'var(--text-dim)',
                      marginTop: 4,
                      padding: '5px 8px',
                      background: 'var(--surface2)',
                      borderRadius: 5,
                      fontStyle: 'italic',
                    }}>"{item.comments}"</div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Approve / Reject actions */}
      {canApprove && (
        <div style={{ borderTop: approvals.length > 0 ? '1px solid var(--border)' : 'none', paddingTop: 12 }}>
          <textarea
            className="form-textarea"
            placeholder="Add a comment (optional)..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            style={{ width: '100%', marginBottom: 10, minHeight: 60 }}
          />
          <div style={{ display: 'flex', gap: 8 }}>
            <button className="btn btn-primary" onClick={handleApprove} style={{ flex: 1 }}>
              <MI size={15}>check</MI> Approve
            </button>
            <button className="btn btn-danger" onClick={handleReject} style={{ flex: 1 }}>
              <MI size={15}>close</MI> Reject
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
