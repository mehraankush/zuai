import create, { StateCreator, SetState, GetState } from 'zustand';

interface PdfViewerState {
    isExpanded: boolean;
    toggleExpand: () => void;
    setToggle: (value: boolean) => void;
}

const usePdfViewerStore = create<PdfViewerState>((set, get) => ({
    isExpanded: true,
    toggleExpand: () =>
        set((state) => ({
            isExpanded: !state.isExpanded,
        })),
    setToggle: (value: boolean) =>
        set((state) => ({
            isExpanded: value,
        })),
}));

export default usePdfViewerStore;