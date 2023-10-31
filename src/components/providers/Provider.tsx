import ProviderNextAuth from "./Next-AuthProvider";

export default function Provider({ children }: { children: React.ReactNode }) {
    return (
        <>
            <ProviderNextAuth>
                {children}
            </ProviderNextAuth>
        </>
    )
}