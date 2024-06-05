export default function GlobalModal({children} : any) {
    return (
        // backdrop
        <div
            className={`
        fixed inset-0 flex justify-center items-center transition-colors
        "visible bg-black/20" : "invisible"}
        `}
        >
            {/* modal */}
            <div
                className={`
            bg-white rounded-xl shadow p-6 transition-all
            "scale-100 opacity-100" : "scale-125 opacity-0"
        `}
            >
                {children}
            </div>
        </div>
    )
}