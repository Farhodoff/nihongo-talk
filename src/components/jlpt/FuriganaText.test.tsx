import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { FuriganaText } from './FuriganaText';

const mockUseStudyData = vi.fn();

vi.mock('../../context/StudyPlannerContext', () => ({
    useStudyData: () => mockUseStudyData(),
}));

describe('FuriganaText Component', () => {
    it('renders null when text is empty', () => {
        mockUseStudyData.mockReturnValue({ settings: { showFurigana: true } });
        const { container } = render(<FuriganaText text="" />);
        expect(container.firstChild).toBeNull();
    });

    it('renders plain text without bracket annotations', () => {
        mockUseStudyData.mockReturnValue({ settings: { showFurigana: true } });
        render(<FuriganaText text="こんにちは" />);
        expect(screen.getByText('こんにちは')).toBeInTheDocument();
    });

    it('renders kanji with furigana when showFurigana setting is true', () => {
        mockUseStudyData.mockReturnValue({ settings: { showFurigana: true } });
        const { container } = render(<FuriganaText text="日本語[にほんご]" />);

        expect(screen.getByText('日本語')).toBeInTheDocument();
        expect(screen.getByText('にほんご')).toBeInTheDocument();

        const rtElement = container.querySelector('rt');
        expect(rtElement).toBeInTheDocument();
        expect(rtElement?.textContent).toBe('にほんご');
    });

    it('renders multiple kanji-furigana pairs and plain text segments', () => {
        mockUseStudyData.mockReturnValue({ settings: { showFurigana: true } });
        render(<FuriganaText text="日本語[にほんご]を勉強[べんきょう]する" />);

        expect(screen.getByText('日本語')).toBeInTheDocument();
        expect(screen.getByText('にほんご')).toBeInTheDocument();
        expect(screen.getByText('勉強')).toBeInTheDocument();
        expect(screen.getByText('べんきょう')).toBeInTheDocument();
    });

    it('hides furigana readings when showFurigana context setting is false', () => {
        mockUseStudyData.mockReturnValue({ settings: { showFurigana: false } });
        const { container } = render(<FuriganaText text="日本語[にほんご]" />);

        expect(screen.getByText('日本語')).toBeInTheDocument();
        expect(screen.queryByText('にほんご')).not.toBeInTheDocument();
        expect(container.querySelector('rt')).toBeNull();
    });

    it('forces show furigana when forceShow={true} even if settings.showFurigana is false', () => {
        mockUseStudyData.mockReturnValue({ settings: { showFurigana: false } });
        const { container } = render(<FuriganaText text="日本語[にほんご]" forceShow={true} />);

        expect(screen.getByText('日本語')).toBeInTheDocument();
        expect(screen.getByText('にほんご')).toBeInTheDocument();
        expect(container.querySelector('rt')).toBeInTheDocument();
    });

    it('forces hide furigana when forceShow={false} even if settings.showFurigana is true', () => {
        mockUseStudyData.mockReturnValue({ settings: { showFurigana: true } });
        const { container } = render(<FuriganaText text="日本語[にほんご]" forceShow={false} />);

        expect(screen.getByText('日本語')).toBeInTheDocument();
        expect(screen.queryByText('にほんご')).not.toBeInTheDocument();
        expect(container.querySelector('rt')).toBeNull();
    });

    it('applies custom className and rubyClassName props', () => {
        mockUseStudyData.mockReturnValue({ settings: { showFurigana: true } });
        const { container } = render(
            <FuriganaText
                text="漢字[かんじ]"
                className="custom-text-class"
                rubyClassName="custom-ruby-class"
            />
        );

        expect(container.firstChild).toHaveClass('custom-text-class');
        const rt = container.querySelector('rt');
        expect(rt).toHaveClass('custom-ruby-class');
    });
});
