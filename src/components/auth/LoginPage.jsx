import React, { useState } from 'react';
import { MI } from '../ui';

export function LoginPage({ onLogin }) {
  const [email, setEmail] = useState('rajesh@psuite.in');
  const [password, setPassword] = useState('admin123');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!email || !password) {
      setError('Please enter email and password');
      return;
    }
    setLoading(true);
    try {
      onLogin(email, password);
    } catch (err) {
      setError(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--bg)',
      padding: 20,
    }}>
      <div style={{
        width: '100%',
        maxWidth: 400,
        animation: 'fadeUp .4s ease',
      }}>
        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div style={{
            width: 56,
            height: 56,
            borderRadius: 14,
            background: 'var(--accent-g)',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 14,
          }}>
            <span style={{
              fontSize: '1.2rem',
              fontWeight: 800,
              color: '#fff',
              letterSpacing: -1,
            }}>PN</span>
          </div>
          <h1 style={{
            fontSize: '1.3rem',
            fontWeight: 700,
            color: 'var(--text)',
            marginBottom: 4,
          }}>Production Nerve Center</h1>
          <p style={{
            fontSize: '.78rem',
            color: 'var(--text-mute)',
          }}>Manufacturing Control Platform</p>
        </div>

        {/* Card */}
        <form
          onSubmit={handleSubmit}
          className="card"
          style={{ padding: '28px 24px' }}
        >
          <h2 style={{
            fontSize: '.88rem',
            fontWeight: 700,
            marginBottom: 20,
            color: 'var(--text)',
          }}>Sign In</h2>

          {error && (
            <div style={{
              padding: '8px 12px',
              marginBottom: 16,
              borderRadius: 7,
              fontSize: '.76rem',
              fontWeight: 500,
              background: 'var(--red10)',
              color: 'var(--red)',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
            }}>
              <MI size={16}>error</MI>
              {error}
            </div>
          )}

          <div className="form-group">
            <label>Email Address</label>
            <input
              className="form-input"
              type="email"
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              className="form-input"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            disabled={loading}
            style={{
              width: '100%',
              marginTop: 8,
              padding: '10px 16px',
              fontSize: '.82rem',
            }}
          >
            {loading ? (
              <MI size={16} style={{ animation: 'pulse 1s infinite' }}>hourglass_empty</MI>
            ) : (
              <MI size={16}>login</MI>
            )}
            {loading ? 'Signing in...' : 'Sign In'}
          </button>

          <p style={{
            textAlign: 'center',
            fontSize: '.7rem',
            color: 'var(--text-mute)',
            marginTop: 16,
          }}>
            Demo: any email + password works
          </p>
        </form>
      </div>
    </div>
  );
}
