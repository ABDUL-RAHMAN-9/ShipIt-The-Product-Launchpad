interface HeaderTagProps {
    firstTitle: string;
    secondTitle?: string;
    thirdTitle?: string;
}

export default function HeaderTag({
    firstTitle,
    secondTitle,
    thirdTitle,
}: HeaderTagProps) {
    return (
        <div className="flex flex-col items-start gap-y-1 font-mono text-[0.78rem] font-bold uppercase tracking-[0.08em] text-[#F6C4C1] sm:flex-row sm:items-center sm:gap-x-2">
            <span>{firstTitle}</span>

            {/* Show the first separator and second title only if secondTitle is provided */}
            {secondTitle && (
                <>
                    <span
                        className="hidden sm:inline text-white/40"
                        aria-hidden="true">
                        •
                    </span>
                    <span>{secondTitle}</span>
                </>
            )}

            {/* Show the second separator and third title only if thirdTitle is provided */}
            {thirdTitle && (
                <>
                    <span
                        className="hidden sm:inline text-white/40"
                        aria-hidden="true">
                        •
                    </span>
                    <span>{thirdTitle}</span>
                </>
            )}
        </div>
    );
}
