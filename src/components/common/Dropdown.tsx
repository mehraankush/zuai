import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select"

interface DropdownMenuComponentProps {
    trigger?: React.ReactNode | string;
    options?: string[];
    setState?: (value: string) => void;
}

export function DropdownMenuComponent({
    trigger,
    options,
    setState
}: DropdownMenuComponentProps) {
    const handleSelect = (value: string) => {
        console.log("selected:", value)
        setState && setState(value)
    }

    return (
        <Select onValueChange={handleSelect}>
            <SelectTrigger
                className="text-gray-500"
            >
                <SelectValue placeholder={trigger} />
            </SelectTrigger>
            <SelectContent>
                {
                    options && options.map((opt, index) => (
                        <SelectItem
                            value={opt}
                            key={index}
                            className="rounded-xl ext-center cursor-pointer pl-2 text-sm text-gray100"
                        >{opt}
                        </SelectItem>
                    ))
                }
            </SelectContent>
        </Select>
    )
}