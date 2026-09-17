import React from 'react';
import { Clock, X, Loader2, ShieldCheck, AlertTriangle } from 'lucide-react';
import { Button } from '../ui/Button';
import { AdminAuditLogEntry } from '../../utils/admin';

interface AdminAuditLogsModalProps {
  isOpen: boolean;
  onClose: () => void;
  auditLogs: AdminAuditLogEntry[];
  loading: boolean;
  isJa?: boolean;
}

export const AdminAuditLogsModal: React.FC<AdminAuditLogsModalProps> = ({
  isOpen,
  onClose,
  auditLogs,
  loading,
  isJa = false,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="backdrop-blur-xs fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      onClick={onClose}
    >
      <div
        className="flex max-h-[85vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-border p-4">
          <div className="flex items-center gap-2">
            <Clock size={18} className="text-primary" />
            <div>
              <h3 className="text-sm font-bold text-foreground">
                {isJa ? '管理者権限 監査ログ' : 'Adminlar Tarixi va Audit Jurnali'}
              </h3>
              <p className="text-[11px] text-muted-foreground">
                {isJa
                  ? '誰がいつ管理者を指名・解除したかの全履歴'
                  : 'Qaysi admin kimni tayinlagan va adminlikdan olganligi tarixi'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="cursor-pointer rounded-lg p-1 text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            <X size={16} />
          </button>
        </div>

        <div className="flex-1 space-y-3 overflow-y-auto p-4">
          {loading ? (
            <div className="flex h-36 flex-col items-center justify-center gap-2 text-xs text-muted-foreground">
              <Loader2 size={20} className="animate-spin text-primary" />
              <span>{isJa ? '監査ログを読み込み中...' : 'Audit jurnali yuklanmoqda...'}</span>
            </div>
          ) : auditLogs.length === 0 ? (
            <div className="flex h-36 flex-col items-center justify-center rounded-xl border border-dashed border-border text-xs text-muted-foreground">
              <span>
                {isJa ? '監査履歴はありません' : "Hozircha admin o'zgarishlar tarixi mavjud emas"}
              </span>
            </div>
          ) : (
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-left text-xs">
                <thead className="border-b border-border bg-muted/50 font-semibold text-muted-foreground">
                  <tr>
                    <th className="p-2.5">Sana / Vaqt</th>
                    <th className="p-2.5">Amal</th>
                    <th className="p-2.5">Foydalanuvchi</th>
                    <th className="p-2.5">Ijrochi Admin</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60 font-sans">
                  {auditLogs.map((log) => (
                    <tr key={log.id} className="transition-colors hover:bg-muted/30">
                      <td className="whitespace-nowrap p-2.5 font-mono text-[11px] text-muted-foreground">
                        {new Date(log.created_at).toLocaleString()}
                      </td>
                      <td className="whitespace-nowrap p-2.5">
                        {log.action === 'GRANT_ADMIN' ? (
                          <span className="inline-flex items-center gap-1 rounded-full border border-primary/20 bg-primary/10 px-2 py-0.5 text-[10px] font-bold text-primary">
                            <ShieldCheck size={11} /> Admin Tayinlandi
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 rounded-full border border-red-500/20 bg-red-500/10 px-2 py-0.5 text-[10px] font-bold text-red-400">
                            <AlertTriangle size={11} /> Bekor Qilindi
                          </span>
                        )}
                      </td>
                      <td className="p-2.5 font-mono text-[11px] text-foreground">
                        {log.target_email}
                      </td>
                      <td className="p-2.5 font-mono text-[11px] text-muted-foreground">
                        {log.performed_by_email || 'Superadmin'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <div className="flex justify-end border-t border-border bg-muted/20 p-3">
          <Button variant="outline" size="sm" onClick={onClose} className="text-xs">
            {isJa ? '閉じる' : 'Yopish'}
          </Button>
        </div>
      </div>
    </div>
  );
};
