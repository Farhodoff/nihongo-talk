import React from 'react';
import { X, Mic, Send } from 'lucide-react';
import { Button } from '../ui/Button';
import { RoleBadge } from './RoleBadge';

export interface UserStats {
  totalSessions?: number;
  totalDurationMinutes?: number;
  speakingSessions?: number;
  aiCoachSessions?: number;
  avgScore?: number | null;
}

export interface UserSpeechRecord {
  id: string;
  persona_title?: string;
  type?: string;
  created_at: string;
  score?: number;
  duration_seconds?: number;
}

export interface AdminUserDetailModalProps {
  user: {
    id: string;
    email: string;
    full_name?: string;
    role?: string;
    created_at?: string;
    last_sign_in_at?: string;
  } | null;
  userStats?: UserStats;
  speechRecords: UserSpeechRecord[];
  onClose: () => void;
  onOpenMessageModal: (user: { id: string; email: string }) => void;
  isJa?: boolean;
}

export const AdminUserDetailModal: React.FC<AdminUserDetailModalProps> = ({
  user,
  userStats,
  speechRecords,
  onClose,
  onOpenMessageModal,
  isJa = false,
}) => {
  if (!user) return null;

  return (
    <div
      className="backdrop-blur-xs fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      onClick={onClose}
    >
      <div
        className="max-h-[90vh] w-full max-w-2xl space-y-5 overflow-y-auto rounded-2xl border border-border bg-card p-6 shadow-2xl duration-200 animate-in zoom-in-95"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-border pb-3">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-lg font-black text-primary">
              {(user.full_name || user.email)[0].toUpperCase()}
            </div>
            <div>
              <h3 className="flex items-center gap-2 text-base font-bold text-foreground">
                {user.full_name || user.email.split('@')[0]}
                <RoleBadge role={user.role} email={user.email} />
              </h3>
              <p className="font-mono text-xs text-muted-foreground">{user.email}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="cursor-pointer rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <X size={18} />
          </button>
        </div>

        {/* Individual Stats Grid */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <div className="rounded-xl border border-border/80 bg-muted/40 p-3">
            <span className="text-[10px] font-medium uppercase text-muted-foreground">
              {isJa ? '総セッション数' : "Jami Mashg'ulot"}
            </span>
            <div className="mt-0.5 text-base font-black text-foreground">
              {userStats?.totalSessions || 0} {isJa ? '回' : 'ta'}
            </div>
          </div>
          <div className="rounded-xl border border-border/80 bg-muted/40 p-3">
            <span className="text-[10px] font-medium uppercase text-muted-foreground">
              {isJa ? '総学習時間' : "O'rganish Vaqti"}
            </span>
            <div className="mt-0.5 text-base font-black text-foreground">
              {userStats?.totalDurationMinutes || 0} {isJa ? '分' : 'daqiqa'}
            </div>
          </div>
          <div className="rounded-xl border border-border/80 bg-muted/40 p-3">
            <span className="text-[10px] font-medium uppercase text-muted-foreground">
              Speaking & Coach
            </span>
            <div className="mt-0.5 text-base font-black text-primary">
              {(userStats?.speakingSessions || 0) + (userStats?.aiCoachSessions || 0)}{' '}
              {isJa ? '回' : 'seans'}
            </div>
          </div>
          <div className="rounded-xl border border-border/80 bg-muted/40 p-3">
            <span className="text-[10px] font-medium uppercase text-muted-foreground">
              {isJa ? '平均スコア' : "O'rtacha Ball"}
            </span>
            <div className="mt-0.5 text-base font-black text-emerald-400">
              {userStats?.avgScore ? `${userStats.avgScore}%` : '—'}
            </div>
          </div>
        </div>

        {/* User Metadata */}
        <div className="space-y-2 rounded-xl border border-border bg-muted/20 p-3.5 text-xs">
          <div className="flex justify-between">
            <span className="text-muted-foreground">UUID:</span>
            <span className="select-all font-mono text-foreground">{user.id}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">
              {isJa ? '登録日時:' : "Ro'yxatdan o'tgan sana:"}
            </span>
            <span className="text-foreground">
              {user.created_at
                ? new Date(user.created_at).toLocaleString()
                : isJa
                  ? '不明'
                  : "Noma'lum"}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">
              {isJa ? '最終ログイン:' : 'Oxirgi login / faollik:'}
            </span>
            <span className="text-foreground">
              {user.last_sign_in_at ? new Date(user.last_sign_in_at).toLocaleString() : '—'}
            </span>
          </div>
        </div>

        {/* Speech Sessions History for this user */}
        <div className="space-y-2">
          <h4 className="flex items-center gap-1.5 text-xs font-bold text-foreground">
            <Mic size={14} className="text-primary" />
            {isJa ? '会話＆AIコーチ履歴' : 'Muloqot va AI Coach Tarixi'} ({speechRecords.length})
          </h4>
          {speechRecords.length > 0 ? (
            <div className="max-h-48 space-y-2 overflow-y-auto pr-1">
              {speechRecords.map((rec) => (
                <div
                  key={rec.id}
                  className="flex items-center justify-between gap-2 rounded-xl border border-border/70 bg-muted/40 p-2.5 text-xs"
                >
                  <div>
                    <div className="font-bold text-foreground">{rec.persona_title}</div>
                    <div className="text-[10px] text-muted-foreground">
                      {rec.type} • {new Date(rec.created_at).toLocaleString()}
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="font-extrabold text-emerald-400">{rec.score}%</span>
                    <div className="text-[10px] text-muted-foreground">{rec.duration_seconds}s</div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-xl border border-dashed border-border bg-muted/20 p-4 text-center text-xs text-muted-foreground">
              {isJa
                ? 'このユーザーはまだ会話セッションを行っていません'
                : "Ushbu foydalanuvchi hali muloqot mashg'ulotlarini bajarmagan"}
            </div>
          )}
        </div>

        {/* Modal Action Buttons */}
        <div className="flex items-center justify-end gap-2 border-t border-border pt-2">
          <Button
            variant="outline"
            onClick={() => {
              onOpenMessageModal({
                id: user.id,
                email: user.email,
              });
              onClose();
            }}
            className="gap-1.5 text-xs"
          >
            <Send size={13} /> {isJa ? 'メッセージを送信' : 'Xabar Yuborish'}
          </Button>
          <Button onClick={onClose} className="text-xs">
            {isJa ? '閉じる' : 'Yopish'}
          </Button>
        </div>
      </div>
    </div>
  );
};
