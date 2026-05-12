import React from 'react';
import { MI } from '../ui';

export function StatusWorkflow({ steps = [], currentStep }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 0,
      overflowX: 'auto',
      padding: '8px 0',
    }}>
      {steps.map((step, i) => {
        const stepIndex = typeof currentStep === 'number' ? currentStep : steps.findIndex(s => s.id === currentStep);
        const isCompleted = i < stepIndex;
        const isActive = i === stepIndex;
        const isPending = i > stepIndex;

        let circleColor = 'var(--text-mute)';
        let circleBg = 'var(--surface2)';
        let labelColor = 'var(--text-mute)';
        let lineColor = 'var(--border)';

        if (isCompleted) {
          circleColor = '#fff';
          circleBg = 'var(--green)';
          labelColor = 'var(--green)';
          lineColor = 'var(--green)';
        } else if (isActive) {
          circleColor = '#fff';
          circleBg = 'var(--accent)';
          labelColor = 'var(--accent)';
        }

        return (
          <React.Fragment key={step.id || i}>
            {/* Connecting line before (except first) */}
            {i > 0 && (
              <div style={{
                flex: 1,
                minWidth: 24,
                height: 2,
                background: isCompleted ? 'var(--green)' : 'var(--border)',
                transition: 'background .3s ease',
              }} />
            )}

            {/* Step circle + label */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 6,
              minWidth: 60,
            }}>
              <div style={{
                width: 32,
                height: 32,
                borderRadius: '50%',
                background: circleBg,
                border: isPending ? '2px solid var(--border)' : 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all .3s ease',
                boxShadow: isActive ? `0 0 0 3px ${circleBg}33` : 'none',
              }}>
                {isCompleted ? (
                  <MI size={16} style={{ color: circleColor }}>check</MI>
                ) : (
                  <span style={{
                    fontSize: '.66rem',
                    fontWeight: 700,
                    color: isPending ? 'var(--text-mute)' : circleColor,
                  }}>{i + 1}</span>
                )}
              </div>
              <span style={{
                fontSize: '.64rem',
                fontWeight: isActive ? 600 : 400,
                color: labelColor,
                textAlign: 'center',
                whiteSpace: 'nowrap',
              }}>{step.label}</span>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}
