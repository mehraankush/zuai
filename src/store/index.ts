import create from 'zustand';

interface Coursework {
    pdf: Blob | null;
    courseworkType: string;
    subject: string;
    title: string;
}

interface CourseworkState {
    coursework: Coursework;
}

interface CourseworkActions {
    setPdf: (pdf: Blob | null) => void;
    setCourseworkType: (courseworkType: string) => void;
    setSubject: (subject: string) => void;
    setTitle: (title: string) => void;
}

interface CourseworkStore extends CourseworkState, CourseworkActions { }

const useStore = create<CourseworkStore>((set) => ({
    coursework: {
        pdf: null,
        courseworkType: '',
        subject: '',
        title: '',
    },
    setPdf: (pdf: Blob | null) => set((state) => ({ coursework: { ...state.coursework, pdf } })),
    setCourseworkType: (courseworkType: string) =>
        set((state) => ({ coursework: { ...state.coursework, courseworkType } })),
    setSubject: (subject: string) =>
        set((state) => ({ coursework: { ...state.coursework, subject } })),
    setTitle: (title: string) =>
        set((state) => ({ coursework: { ...state.coursework, title } })),
}));

export default useStore;