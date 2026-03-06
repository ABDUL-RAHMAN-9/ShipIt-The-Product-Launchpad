import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

interface FormFieldProps {
    label: string;
    name: string;
    id: string;
    placeholder?: string;
    required: boolean;
    onChange: (
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLTextAreaElement>
    ) => void;
    error: string[];
    helperText?: string;
    textarea?: boolean;
}

export const FormField = ({
    label,
    name,
    id,
    placeholder,
    required,
    onChange,
    error,
    helperText,
    textarea,
}: FormFieldProps) => {

    const hasError = error.length > 0;

    return (
        <div className="space-y-3 w-full">
            <Label
                htmlFor={id}
                className="text-sm font-black uppercase text-foreground/70 ml-1"
            >
                {label} {required && <span className="text-primary">*</span>}
            </Label>
            {textarea ? (
                <Textarea
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    required={required}
                    className={cn(
                        "min-h-[120px] bg-background border-2 border-foreground/10 focus:border-primary rounded-xl transition-all resize-none px-4 py-3",
                        hasError && "border-destructive focus:border-destructive"
                    )}
                    onChange={
                        onChange as (e: React.ChangeEvent<HTMLTextAreaElement>) => void
                    }
                />
            ) : (
                <Input
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    required={required}
                    aria-invalid={hasError}
                    className={cn(
                        "h-12 bg-background border-2 border-foreground/10 focus:border-primary rounded-xl transition-all px-4",
                        hasError && "border-destructive focus:border-destructive"
                    )}
                    onChange={
                        onChange as (e: React.ChangeEvent<HTMLInputElement>) => void
                    }
                />
            )}

            {/*  Feedback: Helper text and Errors */}
            {(helperText || hasError) && (
                <div className="px-1 space-y-1">
                    {helperText && !hasError && (
                        <p className="text-[11px] font-bold text-muted-foreground/60 uppercase tracking-tight ml-1 flex items-center gap-1">
                            <span className="h-1 w-1 rounded-full bg-primary/40" />
                            {helperText}
                        </p>
                    )}
                    {hasError && (
                        <p className="text-xs font-bold text-destructive animate-in fade-in slide-in-from-left-2">
                            {error.join(", ")}
                        </p>
                    )}
                </div>
            )}
        </div>
    );
};