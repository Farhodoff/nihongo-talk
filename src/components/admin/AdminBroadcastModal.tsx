import React, { useState } from 'react';
import { Radio, Send, Loader2, X } from 'lucide-react';
import { Button } from '../ui/Button';
import { useToast } from '../../hooks/use-toast';
import { UserNotificationService } from '../../services/UserNotificationService';

interface AdminBroadcastModalProps {
  isOpen: boolean;
  onClose: () => void;
  isJa?: boolean;
}

export const AdminBroadcastModal: React.FC<AdminBroadcastModalProps> = ({
  isOpen,
  onClose,
  isJa = false,
}) => {
  const { toast } = useToast();
  const [broadcastTag, setBroadcastTag] = useState<'general' | 'update' | 'system' | 'promo'>(
    'update',
  );
  const [broadcastTitle, setBroadcastTitle] = useState('');
  const [broadcastMessage, setBroadcastMessage] = useState('');
  const [sending, setSending] = useState(false);

  if (!isOpen) return null;

  const handleSend = async () => {
    if (!broadcastTitle.trim() || !broadcastMessage.trim()) {
      toast({
        variant: 'destructive',
        title: isJa ? '入力が不完全です' : "To'liq to'ldiring",
        description: isJa
          ? 'タイトルとメッセージを入力してください。'
          : 'Sarlavha va xabar matnini kiriting.',
      });
      return;
    }

    setSending(true);
    try {
      const success = await UserNotificationService.sendGlobalBroadcastAnnouncement({
        title: broadcastTitle.trim(),
        message: broadcastMessage.trim(),
        tag: broadcastTag,
      });

      if (success) {
        toast({
          title: isJa ? '📢 全体アナウンス送信完了' : "📢 Global E'lon Yuborildi",
          description: isJa
            ? '全ユーザーにお知らせが正常に配信されました。'
            : "Barcha platforma foydalanuvchilariga e'lon muvaffaqiyatli tarqatildi.",
        });
        setBroadcastTitle('');
        setBroadcastMessage('');
        onClose();
      } else {
        toast({
          variant: 'destructive',
          title: isJa ? 'エラー' : 'Xatolik',
          description: isJa ? '送信に失敗しました。' : "E'lonni yuborishda xatolik yuz berdi.",
        });
      }
    } catch (e: any) {
      toast({
        variant: 'destructive',
        title: isJa ? 'エラー' : 'Xatolik',
        description: e?.message || (isJa ? '送信に失敗しました。' : "E'lon yuborilmadi."),
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <div
      className="backdrop-blur-xs fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md space-y-4 rounded-2xl border border-border bg-card p-5 shadow-2xl duration-200 animate-in zoom-in-95"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <h3 className="flex items-center gap-2 text-sm font-bold text-foreground">
            <Radio size={16} className="text-primary" />
            {isJa ? '全体アナウンス配信' : "Barcha Foydalanuvchilarga E'lon Yuborish"}
          </h3>
          <button
            onClick={onClose}
            className="cursor-pointer rounded-lg p-1 text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            <X size={16} />
          </button>
        </div>

        <div className="space-y-3 text-xs">
          <div>
            <label className="mb-1 block text-[11px] font-semibold text-muted-foreground">
              {isJa ? 'カテゴリ' : "E'lon Turi"}
            </label>
            <div className="grid grid-cols-4 gap-1.5">
              {(['general', 'update', 'system', 'promo'] as const).map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setBroadcastTag(tag)}
                  className={`rounded-lg border py-1.5 text-[11px] font-semibold capitalize transition-colors ${
                    broadcastTag === tag
                      ? 'border-primary bg-primary text-primary-foreground'
                      : 'border-border bg-muted text-muted-foreground'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="mb-1 block text-[11px] font-semibold text-muted-foreground">
              {isJa ? 'タイトル' : 'Sarlavha'}
            </label>
            <input
              type="text"
              value={broadcastTitle}
              onChange={(e) => setBroadcastTitle(e.target.value)}
              placeholder={
                isJa
                  ? '例: 📢 新しいJLPT N3レッスンが追加されました！'
                  : "Masalan: 📢 Yangi JLPT N3 Darslari Qo'shildi!"
              }
              className="w-full rounded-xl border border-border bg-muted px-3 py-2 text-xs text-foreground outline-none focus:border-primary"
            />
          </div>

          <div>
            <label className="mb-1 block text-[11px] font-semibold text-muted-foreground">
              {isJa ? 'メッセージ本文' : 'Xabar Matni'}
            </label>
            <textarea
              rows={4}
              value={broadcastMessage}
              onChange={(e) => setBroadcastMessage(e.target.value)}
              placeholder={isJa ? '詳細を入力してください...' : "E'lon tafsilotlarini yozing..."}
              className="w-full resize-none rounded-xl border border-border bg-muted px-3 py-2 text-xs text-foreground outline-none focus:border-primary"
            />
          </div>
        </div>

        <div className="flex gap-2">
          <Button variant="outline" onClick={onClose} className="flex-1 text-xs">
            {isJa ? 'キャンセル' : 'Bekor qilish'}
          </Button>
          <Button
            onClick={handleSend}
            disabled={sending}
            className="flex-1 gap-1.5 bg-primary text-xs text-primary-foreground shadow-md shadow-primary/20 hover:bg-primary/90"
          >
            {sending ? <Loader2 size={13} className="animate-spin" /> : <Send size={13} />}
            {isJa ? '配信する' : "E'lonni Tarqatish"}
          </Button>
        </div>
      </div>
    </div>
  );
};
