import React from 'react';

export function FormField({
  label,
  type = 'text',
  value,
  onChange,
  options,
  required,
  error,
  placeholder,
  disabled,
  name,
}) {
  const id = name || label?.toLowerCase().replace(/\s+/g, '_');

  const baseStyle = {
    padding: '9px 12px',
    fontSize: '.82rem',
    fontFamily: 'var(--f)',
    color: 'var(--text)',
    background: disabled ? 'var(--surface2)' : 'var(--surface)',
    border: `1px solid ${error ? 'var(--red)' : 'var(--border)'}`,
    borderRadius: 7,
    outline: 'none',
    width: '100%',
    transition: 'border-color .2s, background .2s',
    opacity: disabled ? 0.6 : 1,
  };

  const renderInput = () => {
    if (type === 'select') {
      return (
        <select
          id={id}
          value={value ?? ''}
          onChange={e => onChange?.(e.target.value)}
          disabled={disabled}
          required={required}
          style={{
            ...baseStyle,
            cursor: disabled ? 'not-allowed' : 'pointer',
            appearance: 'none',
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2394A3B3' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right 10px center',
            paddingRight: 30,
          }}
        >
          <option value="">{placeholder || 'Select...'}</option>
          {(options || []).map((opt) => {
            const val = typeof opt === 'object' ? opt.value : opt;
            const lbl = typeof opt === 'object' ? opt.label : opt;
            return <option key={val} value={val}>{lbl}</option>;
          })}
        </select>
      );
    }

    if (type === 'textarea') {
      return (
        <textarea
          id={id}
          value={value ?? ''}
          onChange={e => onChange?.(e.target.value)}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          rows={3}
          style={{ ...baseStyle, resize: 'vertical', minHeight: 80 }}
        />
      );
    }

    if (type === 'checkbox') {
      return (
        <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: disabled ? 'not-allowed' : 'pointer' }}>
          <input
            type="checkbox"
            checked={!!value}
            onChange={e => onChange?.(e.target.checked)}
            disabled={disabled}
            required={required}
            style={{ width: 16, height: 16, accentColor: 'var(--accent)' }}
          />
          <span style={{ fontSize: '.8rem', color: 'var(--text)' }}>{placeholder}</span>
        </label>
      );
    }

    return (
      <input
        id={id}
        type={type}
        value={value ?? ''}
        onChange={e => onChange?.(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        style={baseStyle}
      />
    );
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 5, marginBottom: 14 }}>
      {label && type !== 'checkbox' && (
        <label
          htmlFor={id}
          style={{
            fontSize: '.72rem', fontWeight: 600, color: 'var(--text-dim)',
            textTransform: 'uppercase', letterSpacing: .5,
          }}
        >
          {label}{required && <span style={{ color: 'var(--red)', marginLeft: 2 }}>*</span>}
        </label>
      )}
      {renderInput()}
      {error && (
        <span style={{ fontSize: '.68rem', color: 'var(--red)' }}>{error}</span>
      )}
    </div>
  );
}
