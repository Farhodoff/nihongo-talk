import React from 'react';
import { isSuperAdmin, isAdminEmail } from '../../utils/admin';

export interface RoleBadgeProps {
  role?: string;
  email?: string;
  assignedBy?: string | null;
  assignedAt?: string | null;
}

export const RoleBadge: React.FC<RoleBadgeProps> = ({ role, email, assignedBy, assignedAt }) => {
  if (isSuperAdmin(email, role)) {
    return (
      <div className="flex flex-col items-start gap-0.5">
        <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-[#C9A961]/30 bg-[#C9A961]/15 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-[#C9A961]">
          👑 Superadmin
        </span>
        <span className="text-[9px] text-[#C9A961]/80">Asosiy Boshqaruvchi</span>
      </div>
    );
  }
  if (role === 'admin' || isAdminEmail(email, role)) {
    return (
      <div className="flex flex-col items-start gap-0.5">
        <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-primary/25 bg-primary/10 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-primary">
          🛡️ Admin
        </span>
        {assignedBy && (
          <span
            className="text-[9px] text-muted-foreground"
            title={assignedAt ? `Tayinlangan: ${new Date(assignedAt).toLocaleString()}` : undefined}
          >
            Tayinlagan:{' '}
            <span className="font-mono text-foreground/80">{assignedBy.split('@')[0]}</span>
          </span>
        )}
      </div>
    );
  }
  return (
    <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-muted px-2.5 py-0.5 text-[10px] font-semibold text-muted-foreground">
      Student
    </span>
  );
};
