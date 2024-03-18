export default function ClientOnly({ children, ...delegated }: { children: React.ReactNode }) {
        if (typeof window === 'undefined') {
            return null;
        }
    
        return <div {...delegated}>{children}</div>;
}
